<?php

namespace App\Http\Controllers\Version\Pipes;

use App\Http\Controllers\Version\StoreVersionData;
use Closure;

class SaveVersion
{
    /**
     * Handle saving the version record.
     *
     * @param StoreVersionData $data
     * @param Closure $next
     * @return mixed
     */
    public function handle(StoreVersionData $data, Closure $next)
    {
        $data->version->save();
        
        return $next($data->version);
    }
} 