<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Set;

class TestController extends Controller
{
    public function index(){
        $set = Set::all();
        return Inertia::render('Test', [
            'set' => $set
            
        ]);
    }
}