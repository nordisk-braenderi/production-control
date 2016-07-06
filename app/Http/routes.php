<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return redirect()->route('batch.index');
});

Route::resource('/batch', 'BatchController');
Route::get('/batch/{batch}/created', 'StateController@created');

Route::resource('/user', 'UserController');

Route::get('/spirit/states', 'SpiritController@states');
Route::resource('/spirit', 'SpiritController');

/*
 * Colors
 * */