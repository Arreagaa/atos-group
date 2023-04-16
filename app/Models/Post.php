<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'description', 'image'
    ];

    protected $casts = [
        'created_at' => 'datetime:F d, Y',
    ];
    
}
