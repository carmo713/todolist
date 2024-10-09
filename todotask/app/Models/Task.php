<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    /**
     * Atributos que podem ser preenchidos em massa.
     *
     * @var array
     */
    protected $fillable = [
        'title',         // Título da tarefa
        'description',   // Descrição da tarefa
        'status',        // Status da tarefa: 'pending', 'in_progress', 'completed'
        'due_date',      // Data limite da tarefa
    ];
}
