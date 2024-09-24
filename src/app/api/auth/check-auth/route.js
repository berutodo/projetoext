import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const secret = process.env.JWT_SECRET;

export async function GET(req) {
    const tokenObj = req.cookies.get('token');
    const token = tokenObj ? tokenObj.value : null;

    if (token) {
        try {
            const decoded = jwt.verify(token, secret);
            console.log("Token verificado:", decoded);
            return NextResponse.json({ message: 'Autenticado' });
        } catch (error) {
            console.error("Erro ao verificar token:", error);
            return NextResponse.json({ message: 'Token inválido ou expirado' }, { status: 401 });
        }
    }

    return NextResponse.json({ message: 'Não autenticado' }, { status: 401 });
}

