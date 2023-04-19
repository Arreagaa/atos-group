<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\File;

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
            'title' => $request->get('title'),
            'description' => $request->get('description'),
        ]);
        
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $name);
            $post->image = $name;
        }

        if ($request->hasFile('pdf')) {
            $pdf = $request->file('pdf');
            $name = time().'.'.$pdf->getClientOriginalExtension();
            $destinationPath = public_path('/pdf');
            $pdf->move($destinationPath, $name);
            $post->pdf = $name;
        }
        
        $post->save();
        
        return Redirect::route('dashboard');
    }

    public function edit(post $post)
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
        $publicPath = public_path();

        if (File::exists($publicPath . '/pdf/' . $post->pdf)) {
            File::delete($publicPath . '/pdf/' . $post->pdf);
        }

        if (File::exists($publicPath . '/images/' . $post->image)) {
            File::delete($publicPath . '/images/' . $post->image);
        }

        $post->delete();

        return Redirect::route('dashboard');
    }
}
