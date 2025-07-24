<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
       return response()->json(User::select('id', 'name', 'email', 'created_at')->get());

    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);

        try {
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

            return response()->json(['message' => 'Usuário criado com sucesso!', 'user' => $user], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao criar usuário', 'error' => $e->getMessage()], 500);
        }
    }
}

