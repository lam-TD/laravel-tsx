<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('personal_spending_activities', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date');
            $table->integer('amount')->default(0);
            $table->string('description')->nullable();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('category_id')->constrained('personal_spending_categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_spending_activities');
    }
};
