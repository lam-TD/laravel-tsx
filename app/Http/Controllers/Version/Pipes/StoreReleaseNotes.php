<?php

namespace App\Http\Controllers\Version\Pipes;

use App\Http\Controllers\Version\StoreVersionData;
use Closure;

class StoreReleaseNotes
{
    /**
     * Handle storing release notes.
     *
     * @param StoreVersionData $data
     * @param Closure $next
     * @return mixed
     */
    public function handle(StoreVersionData $data, Closure $next)
    {
        $releaseNotes = $data->version->getAttribute('release_notes');
        $version = $data->version->getAttribute('version');
        $releaseNotesPath = 'versions/'. $version .'/release_notes';
        $releaseNotesFilename = $version . '.md';
        
        $releaseNotes->storeAs($releaseNotesPath, $releaseNotesFilename);
        
        return $next($data);
    }
} 