<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DoctorsController;
use App\Http\Controllers\PatientsController;
use App\Models\Patients;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('doctors', [DoctorsController::class, 'getalldoctors']);
Route::get('loadpatients', [PatientsController::class, 'patients']);
Route::post('patients/delete/{id}', [PatientsController::class, 'patientsdelete']);
Route::post('patients/add', [PatientsController::class, 'addPatient']);
