<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class PersonalSpendingActivity extends Model
{
    protected $table = 'personal_spending_activities';
    protected $fillable = [
        'date',
        'date' => 'datetime:Y-m-d',
        'amount' => 'float',
        'user_id',
        'category_id'
    ];
    protected $casts = [
        'date' => 'datetime:Y-m-d',
        'amount' => 'float'
    ];

    /**
     * Scope a query to only include activities of a given date.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $date
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeDate(Builder $query, $date)
    {
        return $query->whereDate('date', $date);
    }

    public function scopeCategory(Builder $query, $category)
    {
        return $query->where('category_id', $category);
    }

    public function category()
    {
        return $this->belongsTo(PersonalSpendingCategory::class, 'category_id');
    }
}
