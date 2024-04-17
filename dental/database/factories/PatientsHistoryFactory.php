<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PatientsHistory>
 */
class PatientsHistoryFactory extends Factory
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
            'appointments_id' => null,
             'patients_diagnosis' => fake()->sentence(),
            'patients_treatment' => fake()->sentences(3, true),
            'diagnosis_date' => fake()->date()
        ];
    }
}
