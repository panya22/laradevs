<?php

namespace App\Http\Controllers;

use App\Models\Doctors;
use Illuminate\Http\Request;

class DoctorsController extends Controller
{
    public function getalldoctors(){
        $docs = Doctors::all();
        
         return$docs;
    }
}
