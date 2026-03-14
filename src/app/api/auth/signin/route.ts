import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/lib/auth-store';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check password
    if (user.password !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // In production: Create JWT session here

    return NextResponse.json(
      { 
        message: 'Signed in successfully',
        user: { fullName: user.fullName, email: user.email }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Signin error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
