<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
class PersonalSpendingCategory extends Model
{
    public function scopeName(Builder $query, $date)
    {
        return $query->whereDate('name', $date);
    }
}
