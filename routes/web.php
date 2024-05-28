<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MarkerController;
use App\Http\Controllers\ListController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/map', [MarkerController:: class, 'index']);

Route::get('/list', [ListController:: class, 'index']);

Route::get('/artikel', [ArtikelController:: class, 'index']);

Route::get('/test', [TestController:: class, 'index']);

Route::post('/upload', [AdminController:: class, 'store']);

Route::get('/admin', [AdminController:: class, 'index'])->middleware(['auth', 'verified'])->name('admin');

Route::get('/admin/input', [AdminController:: class, 'input'])->middleware(['auth', 'verified'])->name('input');

Route::post('/masuk', [AdminController:: class, 'store']);

Route::get('/admin/edit', [AdminController:: class, 'edit'])->middleware(['auth', 'verified'])->name('edit');

Route::post('/admin/update', [AdminController:: class, 'update'])->middleware(['auth', 'verified'])->name('update');
Route::post('/admin/delete', [AdminController:: class, 'destroy'])->middleware(['auth', 'verified'])->name('hapus');

require __DIR__.'/auth.php';
