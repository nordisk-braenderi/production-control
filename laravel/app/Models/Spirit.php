<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Spirit extends Model
{
    use SoftDeletes;

    protected $casts = [
        'process' => 'array',
    ];

    protected $dates = ['deleted_at'];

    public static function rules($id = null, $merge = [])
    {
        return array_merge([
            'name' => 'required|unique:spirits,name' . ($id ? ",$id" : ''),
            'abv' => 'required|numeric'
        ], $merge);
    }

    public function getProcessAttribute($value) {
        return State::find(json_decode($value));
    }
}