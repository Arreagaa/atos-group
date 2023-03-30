<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function __invoke(ContactRequest $request){
        Mail::to(['jose.garcia@grupoatos.com.gt', 'juanpablo.garcia@agricolasanjose.com.gt'])->send(new ContactMail($request->name, $request->phone, $request->email, $request->body));

        return redirect()->back();

    }
}
