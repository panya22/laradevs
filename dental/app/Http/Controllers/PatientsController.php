<?php

namespace App\Http\Controllers;

use App\Models\Patients;
use Illuminate\Http\Request;
class PatientsController extends Controller
{
    public function patients(){
         $data = Patients::all();
        
         return $data;
    }

     public function patientsdelete(Request $request, $id){
         $data = Patients::findOrFail($id);
         $data->delete();
         return response()->json(['data' => $data], 200);
    }

  public function patientsinsert(Request $request, $payload){
         $data = Patients::create($payload);
         return response()->json(['data' => $data], 200);
    }

}
