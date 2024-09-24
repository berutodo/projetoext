import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import cookie from 'cookie';

const secret = process.env.JWT_SECRET;

export async function POST(req) {
    const { username, password } = await req.json();

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10); 

    if (username === adminUsername && bcrypt.compareSync(password, adminPassword)) {
        const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
        console.log("Token gerado:", token);
        const response = NextResponse.json({ message: 'Login bem-sucedido!' });
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600,
            path: '/',
        });

        return response;
    }

    return NextResponse.json({ message: 'Usuário ou senha incorretos!' }, { status: 401 });
}