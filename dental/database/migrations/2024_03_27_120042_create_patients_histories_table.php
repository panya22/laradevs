<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('patients_histories', function (Blueprint $table) {
            $table->unsignedBigInteger('doctors_id')->nullable();
            $table->foreign('doctors_id')->references('id')->on('doctors')->onDelete('cascade');
            $table->unsignedBigInteger('patients_id')->nullable();
            $table->foreign('patients_id')->references('id')->on('patients')->onDelete('cascade');
            $table->unsignedBigInteger('appointments_id')->nullable();
            $table->foreign('appointments_id')->references('id')->on('patients_appointments')->onDelete('cascade');
            $table->id();
            $table->string('patients_diagnosis');
            $table->string('patients_treatment');
            $table->date('diagnosis_date');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients_histories');
    }
};
