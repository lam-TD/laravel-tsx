<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
class NewUserRequest extends FormRequest
{
    public function __construct(public readonly User $user, public readonly mixed $avatar)
    {

    }
    public static function fromRequest(NewUserRequest $request): self
    {
        return new self(
            new User($request->validated()),
            $request->file('avatar')
        );
    }
}