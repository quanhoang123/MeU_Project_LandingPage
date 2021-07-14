<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('Admin.Page.login');
});
Route::get('/signup', function () {
    return view('Admin.Page.signup');
});
Route::get('/table', function () {
    return view('Admin.Page.table');
});
Route::get('/blog', function () {
    return view('Admin.Page.blog');
});
Route::get('/charts', function () {
    return view('Admin.Page.chart');
});
