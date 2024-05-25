<?php

namespace App\Http\Controllers;

use App\Models\PatientsAppointments;
use Illuminate\Http\Request;

class PatientsAppointmentsController extends Controller
{

    public function loadQue()
    {
        $data = PatientsAppointments::all();

        return $data;
    }

    public function fromQue(Request $request)
    {
        $patient = new PatientsAppointments();
        $patient->patients_id = $request->patients_id;
        $patient->first_name = $request->first_name;
        $patient->last_name = $request->last_name;
        $patient->middle_name = $request->middle_name;
        $patient->extension_name = $request->extension_name;
        $patient->reason = $request->reason;
        $patient->status = $request->status;
        $patient->save();

        return response()->json(['message' => 'successful']);
    }
}
