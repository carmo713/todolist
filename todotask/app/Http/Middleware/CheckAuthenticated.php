<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckAuthenticated
{
    public function handle($request, Closure $next)
    {
        if (!Auth::check()) {
            return redirect('login'); // Redireciona para a página de login se não estiver autenticado
        }

        return $next($request); // Permite que a solicitação prossiga
    }
}
