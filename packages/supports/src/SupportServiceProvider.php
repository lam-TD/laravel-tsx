<?php
namespace Ltd\Supports;

use Illuminate\Support\ServiceProvider;
use Ltd\Supports\Http\Api\Response\ApiResponseFormatter;

class SupportServiceProvider extends ServiceProvider
{
	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register()
	{
		$this->app->bind('ApiResponse', function () {
			return new ApiResponseFormatter();
		});
	}

	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot()
	{

	}
}