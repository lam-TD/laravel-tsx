<?php

namespace App\Http\Controllers\User;

class NewUserData {
    public function __construct(public readonly User $user)
    {

    }
    public static function fromRequest(NewUser $request): self
    {
        return new self(
            new User($request->validated())
        );
    }
}