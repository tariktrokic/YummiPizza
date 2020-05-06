<?php

use Illuminate\Database\Seeder;
use App\Pizza;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PizzaTableSeeder::class);
        $this->command->info('User table seeded!');
    }
}

class PizzaTableSeeder extends Seeder {

    public function run()
    {
        DB::table('pizzas')->delete();

        $pizzas = [
            ['name'=> 'Neapolitan', 'price' => '10.2'],
            ['name'=> 'Chicago', 'price' => '5.6'],
            ['name'=> 'Sicilian', 'price' => '8.32'],
            ['name'=> 'Greek', 'price' => '9.5'],
            ['name'=> 'California', 'price' => '7.68'],
            ['name'=> 'Detroit', 'price' => '11.56'],
            ['name'=> 'Margherita', 'price' => '16.23'],
            ['name'=> 'Stromboli', 'price' => '20.45'],
        ];

        foreach ($pizzas as $pizza) {
            Pizza::create($pizza);
        }
    }

}
