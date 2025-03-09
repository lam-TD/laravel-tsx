<?php

namespace App\Http\Controllers\Version;

class Version extends Model {
  protected $fillable = [
    'version',
    'description',
    'is_published',
    'update_patch',
    'release_notes',
  ];
}