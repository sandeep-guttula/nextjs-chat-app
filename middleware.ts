import { authOptions } from './auth';
import  { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Session, getServerSession } from 'next-auth';

export async function middleware(req: NextRequest) {

    const session = await getServerSession(authOptions);

    const path = req.nextUrl.pathname;

    const isPublicPath = path === '/' || path === "/pricing"

    if (isPublicPath) {
        return NextResponse.next();
    }

    if (!(req as any).session) {
        return NextResponse.redirect('/register');
    }
}


export const config = {
    matcher: ["/chat", "/chat/:id*"],
};