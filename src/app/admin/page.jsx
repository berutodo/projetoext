"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

export default function AdminPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [horario, setHorario] = useState('');
    const [dia, setDia] = useState('');
    const [loading, setLoading] = useState(false);

    const supabaseUrl = 'https://rntbzvmnnrestpcjnpew.supabase.co';
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, `${supabaseKey}`);

    const handleSubmit = async () => {
        if (!name || !horario || !dia) {
            console.log("Todos os campos devem ser preenchidos.");
            return;
        }

        setLoading(true);
        const { error } = await supabase.from('programacao').insert({ name, horario, dia });
        
        setLoading(false);
        console.log("clicado com sucesso");
        
        if (error) {
            console.log("Erro:", error);
        } else {
            console.log("Dados inseridos com sucesso!");
        }
    };

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch('/api/auth/check-auth', { method: 'GET', credentials: 'include' });
            if (!res.ok) {
                router.push('/login');
            }
        };

        checkAuth();
    }, [router]);

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div>
                <h1 className='text-2xl mb-10'>Criar programação</h1>
                <div className='flex w-56 flex-col'>
                    <div className='flex flex-col'>
                        <span>Nome da programação</span>
                        <input type="text" onChange={e => setName(e.target.value)} value={name} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Horario da programação</span>
                        <input type="text" onChange={e => setHorario(e.target.value)} value={horario} />
                    </div>
                    <div className='flex flex-col'>
                        <span>Dia da programação</span>
                        <input type="text" onChange={e => setDia(e.target.value)} value={dia} />
                    </div>
                </div>
                <button className='border-2 p-4 border-black rounded-lg' onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Enviando...' : 'Submit'}
                </button>
            </div>
        </div>
    );
}
