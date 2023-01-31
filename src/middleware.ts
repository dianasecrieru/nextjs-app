import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL('/middleware-test/working', request.url))
}

export const config = {
  matcher: '/middleware-test/',
}