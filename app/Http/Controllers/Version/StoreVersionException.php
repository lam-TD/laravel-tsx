<?php

namespace App\Http\Controllers\Version;

class StoreVersionException extends Exception {
    public function __construct($message = "Failed to store version", $code = 0, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }

    public static function failedToStoreVersion() {
        return new self("Failed to store version");
    }

    public function render()
    {
        return ApiResponse::internalServerError($this->getMessage());
    }
}