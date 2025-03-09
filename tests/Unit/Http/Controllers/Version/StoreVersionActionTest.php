<?php

namespace Tests\Unit\Http\Controllers\Version;

use App\Http\Controllers\Version\Pipes\EncryptUpdatePatch;
use App\Http\Controllers\Version\Pipes\SaveVersion;
use App\Http\Controllers\Version\Pipes\StoreReleaseNotes;
use App\Http\Controllers\Version\Pipes\StoreUpdatePatch;
use App\Http\Controllers\Version\StoreVersionAction;
use App\Http\Controllers\Version\StoreVersionData;
use App\Http\Controllers\Version\Version;
use App\Supports\Helpers\File\FileEncryter;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

uses(TestCase::class);

beforeEach(function () {
    // Set up environment variables for testing
    putenv('FILE_ENCRYPTION_KEY=0123456789abcdef0123456789abcdef');
    putenv('FILE_ENCRYPTION_IV=0123456789abcdef');
    
    // Mock storage
    Storage::fake('local');
    
    // Mock DB transactions
    DB::shouldReceive('beginTransaction')->once();
    DB::shouldReceive('commit')->once();
    
    // Mock events
    Event::fake();
    
    // Create test files
    $this->releaseNotes = UploadedFile::fake()->create('release-notes.md', 10);
    $this->updatePatch = UploadedFile::fake()->create('update-patch.zip', 100);
    
    // Create a version model
    $this->version = new Version([
        'version' => '1.0.0',
        'release_notes' => $this->releaseNotes,
        'update_patch' => $this->updatePatch
    ]);
    
    // Create store version data
    $this->storeVersionData = new StoreVersionData($this->version);
    
    // Create action instance
    $this->action = new StoreVersionAction();
});

afterEach(function () {
    // Remove environment variables
    putenv('FILE_ENCRYPTION_KEY');
    putenv('FILE_ENCRYPTION_IV');
});

test('pipeline processes all pipes correctly', function () {
    // Mock the pipes
    $this->mock(StoreReleaseNotes::class, function ($mock) {
        $mock->shouldReceive('handle')
            ->once()
            ->andReturnUsing(function ($data, $next) {
                return $next($data);
            });
    });
    
    $this->mock(StoreUpdatePatch::class, function ($mock) {
        $mock->shouldReceive('handle')
            ->once()
            ->andReturnUsing(function ($data, $next) {
                $data->storedUpdatePatchPath = 'versions/1.0.0/update_patch/1.0.0.zip';
                return $next($data);
            });
    });
    
    $this->mock(EncryptUpdatePatch::class, function ($mock) {
        $mock->shouldReceive('handle')
            ->once()
            ->andReturnUsing(function ($data, $next) {
                $data->version->setAttribute('update_patch', '1.0.0.enc');
                return $next($data);
            });
    });
    
    $this->mock(SaveVersion::class, function ($mock) {
        $mock->shouldReceive('handle')
            ->once()
            ->andReturnUsing(function ($data, $next) {
                return $next($data->version);
            });
    });
    
    // Execute the action
    $result = $this->action->execute($this->storeVersionData);
    
    // Assert the result
    expect($result)->toBe($this->version);
    expect($result->getAttribute('update_patch'))->toBe('1.0.0.enc');
});

test('integration test with real pipes', function () {
    // Mock the FileEncryter to avoid actual encryption
    $this->mock(FileEncryter::class, function ($mock) {
        $mock->shouldReceive('encrypt')->andReturn('encrypted-content');
        $mock->shouldReceive('toFile')->andReturn(storage_path('app/versions/1.0.0/update_patch/1.0.0.enc'));
        $mock->makePartial();
    });
    
    // Make sure the static method works
    FileEncryter::shouldReceive('encryptFile')
        ->andReturn(new FileEncryter());
    
    // Execute the action
    $result = $this->action->execute($this->storeVersionData);
    
    // Assert the result
    expect($result)->toBe($this->version);
    
    // Check that files were stored
    Storage::disk('local')->assertExists('versions/1.0.0/release_notes/1.0.0.md');
    Storage::disk('local')->assertExists('versions/1.0.0/update_patch/1.0.0.zip');
}); 