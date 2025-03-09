<?php

namespace App\Http\Controllers\Version\Pipes;

use App\Http\Controllers\Version\StoreVersionData;
use Closure;
use Illuminate\Http\UploadedFile;

class StoreUpdatePatch
{
    /**
     * Handle storing update patch file.
     *
     * @param StoreVersionData $data
     * @param Closure $next
     * @return mixed
     */
    public function handle(StoreVersionData $data, Closure $next)
    {
        /** @var UploadedFile $updatePatch */
        $updatePatch = $data->version->getAttribute('update_patch');
        $version = $data->version->getAttribute('version');
        $updatePatchPath = 'versions/'. $version .'/update_patch';
        $updatePatchFilename = $version . '.zip';
        
        $storedPath = $updatePatch->storeAs($updatePatchPath, $updatePatchFilename);
        
        // Add the stored path to the data object for the next pipe
        $data->storedUpdatePatchPath = $storedPath;
        
        return $next($data);
    }
} 