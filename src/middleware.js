

import { NextResponse } from 'next/server'

 

export function middleware(request) {
  console.log("middlewear executed")
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

  const token = request.cookies.get('authtoken')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/todos', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail',
    '/home',
    '/todos'
  ]
}