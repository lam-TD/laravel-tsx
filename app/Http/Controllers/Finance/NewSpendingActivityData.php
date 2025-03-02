<?php

namespace App\Http\Controllers\Finance;

use App\Models\PersonalSpendingActivity;
use App\Http\Requests\Finance\NewSpendingActivityRequest;

final class NewSpendingActivityData
{
  public function __construct(public readonly PersonalSpendingActivity $personalSpendingActivity)
  {

  }
  public static function fromRequest(NewSpendingActivityRequest $request): self
  {
    return new self(
      new PersonalSpendingActivity($request->validated() + ['user_id' => 3])
    );
  }
}