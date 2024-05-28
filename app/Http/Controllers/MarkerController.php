<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Set;

class MarkerController extends Controller
{
    public function index(){
        $set = set::all();
        return Inertia::render('Map', [
            'set' => $set,
            
        ]);
    }
}