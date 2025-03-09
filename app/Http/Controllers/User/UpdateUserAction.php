<?php

namespace App\Http\Controllers\User;

class UpdateUserAction {
    public function execute(UpdateUserData $data)
    {
      if($data->isRemoveAvatar) {
        $old = $data->user->getAttribute('avatar');
        $data->user->fill([
          'avatar' => null
        ]);
      }
      return $data->user->saveOrFail();
    }
}