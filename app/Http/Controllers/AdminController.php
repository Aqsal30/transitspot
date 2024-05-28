<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Testing;
use App\Models\Set;

class AdminController extends Controller
{
    public function index(){
        $artikel = Set::all();
        return Inertia::render('Admin',[
            'artikel' => $artikel
        ]);
    }

    public function store(Request $request){
        $artikel = new Set();
        $image_file = $request->file('Gambar');
        $image_ex = $image_file->extension();
        $image = $request->Stasiun . "." . $image_ex;
        $image_file->move('gambar', $image);

        $artikel->Stasiun = $request->Stasiun;
        $artikel->Longitude = $request->Longitude;
        $artikel->Latitude = $request->Latitude;
        $artikel->Alamat = $request->Alamat;
        $artikel->Deskripsi = $request->Deskripsi;
        $artikel->Sejarah = $request->Sejarah;
        $artikel->Gambar = $image;
        $artikel->save();
        return to_route('admin');  
    }
    public function input(){
        $artikel = Set::all();
        return Inertia::render('Input',[
            'artikel' => $artikel
        ]);
    }
    public function edit(Set $set, Request $request){
        return Inertia::render('Edit',[
            'data' => $set->find($request->id)
        ]);
    }

    public function update(Request $request){
        $image_file = $request->file('Gambar');
        $image_ex = $image_file->extension();
        $image = $request->Stasiun . "." . $image_ex;
        $image_file->move('gambar', $image);

        Set::where('id', $request->id)->update([
            'Stasiun' => $request->Stasiun,
            'Longitude' => $request->Longitude,
            'Latitude' => $request->Latitude,
            'Alamat' => $request->Alamat,
            'Deskripsi' => $request->Deskripsi,
            'Sejarah' => $request->Sejarah,
            'Gambar' => $image,
        ]);
        return to_route('admin');  
    }

    public function destroy(Request $request){
        $artikel = Set::find($request->id);
        $artikel->delete();
        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}