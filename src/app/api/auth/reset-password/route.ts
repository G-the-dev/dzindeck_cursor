import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { users, resetTokens } from '@/lib/auth-store';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Find user
    const user = users.find(u => u.email === email.toLowerCase());

    if (!user) {
      // Don't reveal if user exists for security
      return NextResponse.json(
        { message: 'If an account exists, a reset link has been sent' },
        { status: 200 }
      );
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

    // Save token
    resetTokens.set(resetToken, { email: email.toLowerCase(), expiry: resetTokenExpiry });
    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;

    // In production, send email here
    // For now, just log the token for testing
    console.log(`Reset token for ${email}: ${resetToken}`);
    console.log(`Reset URL: http://localhost:3000/set-password?token=${resetToken}`);

    return NextResponse.json(
      { message: 'If an account exists, a reset link has been sent' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
