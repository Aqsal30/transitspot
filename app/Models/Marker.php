<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marker extends Model
{
    protected $fillable = [
        'Stasiun',
        'Longitude',
        'Latitude',
        'Alamat',
        'Deskripsi',
        'Sejarah'
    ];
}
