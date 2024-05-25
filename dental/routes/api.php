<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DoctorsController;
use App\Http\Controllers\PatientsAppointmentsController;
use App\Http\Controllers\PatientsController;
use App\Http\Controllers\PatientsHistoryController;
use App\Models\Patients;
use App\Models\PatientsHistory;

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


Route::get('loadpatients', [PatientsController::class, 'patients']);
Route::post('patients/delete/{id}', [PatientsController::class, 'patientsdelete']);
Route::post('patients/add', [PatientsController::class, 'addPatient']);
Route::post('patientsque/add', [PatientsAppointmentsController::class, 'fromQue']);
Route::get('patientsque/approved', [PatientsAppointmentsController::class, 'loadQue']);
Route::get('patientsHistory', [PatientsHistoryController::class, 'loadHistory']);
Route::post('patientsHistory/add', [PatientsHistoryController::class, 'history']);



//dashboard
Route::get('dashboard', [PatientsAppointmentsController::class, 'loadDashboard']);
