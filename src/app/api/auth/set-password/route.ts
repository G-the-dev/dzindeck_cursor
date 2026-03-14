import { NextRequest, NextResponse } from 'next/server';
import { users, resetTokens } from '@/lib/auth-store';

export async function POST(req: NextRequest) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        { error: 'Token and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Find token
    const tokenData = resetTokens.get(token);
    
    if (!tokenData || tokenData.expiry < new Date()) {
      return NextResponse.json(
        { error: 'Link expired', code: 'LINK_EXPIRED' },
        { status: 400 }
      );
    }

    // Find user
    const user = users.find(u => u.email === tokenData.email);
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 400 }
      );
    }

    // Update password
    user.password = password;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    resetTokens.delete(token);

    return NextResponse.json(
      { message: 'Password updated successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Set password error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
