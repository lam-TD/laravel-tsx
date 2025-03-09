<?php

namespace App\Http\Controllers\User;

class NewUserAction {
    public function execute(NewUserData $data)
    {

        if($data->avatar) {
            $data->user->avatar = $data->avatar->store('avatars');
        }

        return $data->user->saveOrFail();
    }
}