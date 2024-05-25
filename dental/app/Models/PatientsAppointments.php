<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PatientsAppointments extends Model
{
    use HasFactory;
    protected $fillable = [
        'patients_id', 'first_name', 'last_name', 'middle_name', 'extension_name', 'reason', 'status'
    ];

    public function conPatients(): BelongsTo
    {
        return $this->belongsTo(Patients::class);
    }
}
