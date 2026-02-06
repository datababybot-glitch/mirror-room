import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PASSWORD = 'shepherd-mode';

export function middleware(request: NextRequest) {
  // Check if password cookie exists and matches
  const passwordCookie = request.cookies.get('mirror-room-auth')?.value;
  
  // Allow access to the auth endpoint
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // Check if authenticated
  if (passwordCookie === PASSWORD) {
    return NextResponse.next();
  }

  // Redirect to auth page if not authenticated
  const url = request.nextUrl.clone();
  url.pathname = '/auth';
  
  // Don't redirect if already on auth page
  if (request.nextUrl.pathname === '/auth') {
    return NextResponse.next();
  }

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
