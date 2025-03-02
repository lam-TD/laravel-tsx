<?php

namespace App\Http\Controllers\Finance;

final class NewSpendingActivityAction
{
    public function execute(NewSpendingActivityData $data)
    {
        return $data->personalSpendingActivity->saveOrFail();
    }
}