<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('News/AShow', ['posts'=>$posts]);
    }

    public function create()
    {
        return Inertia::render('News/utils/ACreate');
    }

    public function store(Request $request)
    {
        $post = new Post([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time().'.'.$image->getClientOriginalExtension();
            $image->storeAs('images', $name, 'public');
            $post->image = $name;
        }

        if ($request->hasFile('pdf')) {
            $pdf = $request->file('pdf');
            $name = time().'.'.$pdf->getClientOriginalExtension();
            $pdf->storeAs('pdf', $name, 'public');
            $post->pdf = $name;
        }

        $post->save();

        return Redirect::route('dashboard');
    }

    public function edit(Post $post)
    {
        return Inertia::render('News/utils/AEdit', ['post' => $post]);
    }

    public function update(Request $request, Post $post)
    {
        $post->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ]);

        return Redirect::route('dashboard');
    }

    public function destroy(Post $post)
    {
        if (Storage::disk('public')->exists('pdf/' . $post->pdf)) {
            Storage::disk('public')->delete('pdf/' . $post->pdf);
        }

        if (Storage::disk('public')->exists('images/' . $post->image)) {
            Storage::disk('public')->delete('images/' . $post->image);
        }

        $post->delete();

        return Redirect::route('dashboard');
    }
}
