<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PatientsAppointments>
 */
class PatientsAppointmentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'doctors_id' => null,
            'patients_id' => null,
            'appointment_type' => fake()->sentence(),
            'appointment_date' => fake()->dateTimeBetween('-1 year', '+1 year'),
            'note' => fake()->sentences(3, true),
            'status' =>fake()->sentence()        
        ];
    }
}
