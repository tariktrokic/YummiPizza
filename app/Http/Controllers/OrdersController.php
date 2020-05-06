<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Order;

class OrdersController extends Controller {
    public function createOrder(Request $request) {       
       $request->validate([
            'name' => 'required',
            'last_name' => 'required',
            'adress' => 'required',
            'order' => 'required'
        ]); 
        $order = new Order;
        $order->name = $request->name;
        $order->last_name = $request->last_name;
        $order->order = $request->order;
        $order->adress = $request->adress;
        $order->cost = $request->cost;
        $order->save();
        return $order;
    }
}
