<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtikelCollection;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Artikel;
use App\Models\Set;
;

class ArtikelController extends Controller
{
    public function index(){
        $set = new ArtikelCollection(Set::paginate(6));
        return Inertia::render('Artikel',[
            'artikel' => $set
        ]);
    }
}