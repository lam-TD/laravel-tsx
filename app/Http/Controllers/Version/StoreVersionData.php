<?php

namespace App\Http\Controllers\Version;

class StoreVersionData {
    /**
     * Path where the update patch is stored
     */
    public ?string $storedUpdatePatchPath = null;
    
    /**
     * Constructor
     * 
     * @param Version $version The version model
     */
    public function __construct(public readonly Version $version) {

    }

    /**
     * Create a new instance from a request
     * 
     * @param StoreVersionRequest $request
     * @return self
     */
    public static function fromRequest(StoreVersionRequest $request) {
        $validated = $request->validated();
        $version = new Version($validated);

        return new self(
          $version
        );
    }
}