<?php

namespace App\Http\Controllers\Version\Pipes;

use App\Http\Controllers\Version\StoreVersionData;
use App\Supports\Helpers\File\FileEncryter;
use Closure;

class EncryptUpdatePatch
{
    /**
     * Handle encrypting update patch file.
     *
     * @param StoreVersionData $data
     * @param Closure $next
     * @return mixed
     */
    public function handle(StoreVersionData $data, Closure $next)
    {
        $version = $data->version->getAttribute('version');
        $updatePatchPath = 'versions/'. $version .'/update_patch';
        
        // Get the full path to the stored file
        $fullStoredPath = storage_path('app/' . $data->storedUpdatePatchPath);
        
        // Encrypt update patch
        $encrypter = FileEncryter::encryptFile($fullStoredPath);
        
        // Store the encrypted file
        $encryptedFilePath = $encrypter->toFile(storage_path('app/' . $updatePatchPath . '/' . $version . '.enc'));
        
        // Update the version record with the encrypted filename
        $data->version->setAttribute('update_patch', basename($encryptedFilePath));
        
        return $next($data);
    }
} 