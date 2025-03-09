<?php

namespace App\Http\Controllers\Finance;

use App\Http\Requests\Finance\NewSpendingActivityRequest;
use App\Models\PersonalSpendingActivity;
use Ltd\Supports\Http\Controllers\ResourceController;
use Ltd\Supports\Http\Api\Response\ApiResponse;
use Ltd\Supports\Http\Requests\ResourceRequest;
use Spatie\QueryBuilder\AllowedFilter;

class FinanceResourceController extends ResourceController
{
    protected array $allowedSorts = ['id', 'date', 'amount'];
    protected array $allowedFilters = [];
    protected array $allowedFilterScopes = [
        // AllowedFilter::scope('ctg', 'category'),
    ];
    protected array $allowedIncludes = ['category'];
    protected array $allowedFields = ['id', 'date', 'amount', 'category_id', 'category.id', 'category.name', 'category.color', 'category.icon'];

    protected bool $useMeta = true;


    public function index(ResourceRequest $request)
    {
        $this->request = $request;
        $this->allowedFilterScopes = [
            AllowedFilter::scope('ctg', 'category'),
            AllowedFilter::exact()
        ];
        $resource = $this->resourceCollection()->toArray();
        return ApiResponse::ok(data: $resource['data'], meta: $resource['meta']);
    }

    public function show(ResourceRequest $request, $id)
    {
        $this->request = $request;
        $resource = $this->resourceItem($id)->toArray();
        return ApiResponse::ok(data: $resource['data'], meta: $resource['meta']);
    }

    public function model()
    {
        return PersonalSpendingActivity::class;
    }

    public function store(NewSpendingActivityRequest $request)
    {
        $data = NewSpendingActivityData::fromRequest($request);
        $creator = new NewSpendingActivityAction();
        $creator->execute($data);
        return ApiResponse::created();
    }
}
