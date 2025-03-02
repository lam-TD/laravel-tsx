<?php

use App\Http\Controllers\Finance\FinanceResourceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('/finance', FinanceResourceController::class);
