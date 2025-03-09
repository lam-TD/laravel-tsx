<?php

namespace App\Http\Controllers\Version;

use App\Supports\Helpers\File\FileEncryter;
use Illuminate\Http\UploadedFile;
use Illuminate\Pipeline\Pipeline;
use Exception;

class StoreVersionAction {
    public function execute(StoreVersionData $data) {
        try {
            DB::beginTransaction();
            $version = app(Pipeline::class)
                ->send($data)
                ->through([
                    \App\Http\Controllers\Version\Pipes\StoreReleaseNotes::class,
                    \App\Http\Controllers\Version\Pipes\StoreUpdatePatch::class,
                    \App\Http\Controllers\Version\Pipes\EncryptUpdatePatch::class,
                    \App\Http\Controllers\Version\Pipes\SaveVersion::class,
                ])
                ->thenReturn();

            DB::commit();

            event(new VersionStored($version));
            return $version;
        } catch (Exception $e) {
            DB::rollBack();
            throw new StoreVersionException('Failed to store version: ' . $e->getMessage(), 0, $e);
        }
    }
}