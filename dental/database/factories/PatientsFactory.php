<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patients>
 */
class PatientsFactory extends Factory
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
            'first_name'=>fake()->firstName(),
            'last_name'=>fake()->lastName(),
            'middle_name'=>fake()->firstName(),
            'extension_name'=>fake()->suffix(),
            'address'=>fake()->address(),
            'birthdate'=>fake()->date(),
            'email'=>fake()->unique()->safeEmail(),
            'password'=>fake()->password()
        ];
    }
}
