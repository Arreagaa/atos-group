<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PostController;
use App\Models\Post;
use Inertia\Inertia;

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
    return Inertia::render('Landing/AShow');
})->name('landing');

Route::get('/sustainability', function () {
    return Inertia::render('Sustainability/ASustainability');
})->name('sustainability');

Route::get('/products', function () {
    return Inertia::render('Products/AShow');
})->name('products');

Route::group([], function () {
    Route::resource('/posts', PostController::class);
});

Route::get('/socialWork', function () {
    return Inertia::render('SocialWork/AShow');
})->name('socialWork');

Route::get('/environment', function () {
    return Inertia::render('AEnvironment/AShow');
})->name('environment');

Route::get('/laboratory', function () {
    return Inertia::render('Laboratory/AShow');
})->name('laboratory');

Route::get('/bio-security', function () {
    return Inertia::render('Bio-security/AShow');
})->name('bio-security');

Route::get('/certifications', function () {
    return Inertia::render('Certifications/AShow');
})->name('certifications');

Route::post('/contact', ContactController::class)->name('contact');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        $posts = Post::all();
        return Inertia::render('Dashboard', ['posts'=>$posts]);
    }
    )->name('dashboard');
});