<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patients extends Model
{
    use HasFactory;

    protected $fillable = [
        'email', 'password', 'phone', 'first_name', 'last_name', 'middle_name', 'extension_name', 'gender', 'address', 'reason'
    ];
}
