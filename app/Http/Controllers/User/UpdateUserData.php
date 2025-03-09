<?php

namespace App\Http\Controllers\User;

use App\Models\User;

class UpdateUserData {
  public function __construct(public readonly User $user, public readonly mixed $avatar, public readonly bool $isRemoveAvatar)
  {

  }

  public static function fromRequest(UpdateUserRequest $request)
  {
    return new self(
      $request->route('user'),
      $request->file('avatar'),
      $request->input('is_remove_avatar', false)
    );
  }
}