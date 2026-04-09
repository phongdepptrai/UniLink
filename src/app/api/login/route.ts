import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '../../../lib/mongodb';
import User from '../../../models/User';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { email, password } = body as { email?: string; password?: string };

    // 1️⃣ Check missing fields and validate types
    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email and password are required and must be valid text' },
        { status: 400 }
      );
    }

    // 2️⃣ Check if user exists
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

    if (!user) {
      // Return unified error message to prevent user enumeration
      // Simulate the time taken by bcrypt to mitigate timing-based enumeration attacks.
      // Uses a valid bcrypt hash with cost 12 (matching user creation) to ensure consistent processing time.
      await bcrypt.compare(password, '$2a$12$O2z8c13V.oVw.K.V9.K.V.O2z8c13V.oVw.K.V9.K.V.O2z8c13V.');
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // 3️⃣ Check password in hashed form
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // 4️⃣ Success login
    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('LOGIN ERROR:', error);

    const message =
      error && typeof error === 'object' && 'message' in error
        ? String((error as { message?: string }).message)
        : 'Internal server error';

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}