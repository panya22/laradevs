<?php

namespace App\Http\Controllers;

use App\Models\PatientsHistory;
use Illuminate\Http\Request;

class PatientsHistoryController extends Controller
{

    public function loadHistory()
    {
        $data = PatientsHistory::all();

        return $data;
    }


    public function history(Request $request)
    {
        $patient = new PatientsHistory();
        $patient->patients_id = $request->patients_id;
        $patient->first_name = $request->first_name;
        $patient->last_name = $request->last_name;
        $patient->middle_name = $request->middle_name;
        $patient->extension_name = $request->extension_name;
        $patient->reason = $request->reason;
        $patient->history = $request->history;
        $patient->save();

        return response()->json(['message' => 'successful']);
    }
}
