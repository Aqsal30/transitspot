<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\List;

class ListController extends Controller
{
    public function index(){
        return Inertia::render('List');
    }
}