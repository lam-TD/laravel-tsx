<?php

namespace App\Http\Controllers\Version;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StoreVersionRequest extends FormRequest
{
    public function rules()
    {
        return [
            'version' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'is_published' => 'required|boolean',
            'update_patch' => 'required|file|mimes:zip',
            'release_notes' => 'required|file|mimes:txt,md',
            // 'product_id' => 'required|exists:products,id',
        ];
    }
}
