<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Site\UserController;


Route::get('/api/users', [UserController::class, 'index']);
Route::post('/api/users', [UserController::class, 'store']);

Route::view('/{any}', 'react')->where('any', '.*');
