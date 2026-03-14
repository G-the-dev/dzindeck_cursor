import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/lib/auth-store';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password } = await request.json();

    // Validation
    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    // Create user
    const newUser = { fullName, email, password };
    users.push(newUser);

    // In production: Send verification email here

    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: { fullName, email }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
