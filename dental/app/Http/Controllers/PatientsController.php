<?php

namespace App\Http\Controllers;

use App\Models\Patients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PatientsController extends Controller
{
     public function patients()
     {
          $data = Patients::all();

          return $data;
     }

     public function patientsdelete(Request $request, $id)
     {
          $data = Patients::findOrFail($id);
          $data->delete();
          return response()->json(['data' => $data], 200);
     }

     public function addPatient(Request $request)
     {

          $patient = new Patients();
          $patient->first_name = $request->first_name;
          $patient->last_name = $request->last_name;
          $patient->middle_name = $request->middle_name;
          $patient->extension_name = $request->extension_name;
          $patient->address = $request->address;
          $patient->reason = $request->reason;
          $patient->phone = $request->phone;
          $patient->gender = $request->gender;
          $patient->email = $request->email;
          $patient->password = $request->password;

          $patient->save();

          return response()->json(['message' => 'successful']);
     }
}
