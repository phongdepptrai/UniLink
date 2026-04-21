import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '../../../lib/mongodb';
import User from '../../../models/User';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { email, password } = body as { email?: string; password?: string };

    // 1️⃣ Check missing fields
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // 2️⃣ Check if user exists
    // ⚡ Bolt: Use .lean() to skip Mongoose document instantiation since we only read fields
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password').lean();

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Account does not exist' },
        { status: 404 }
      );
    }

    // 3️⃣ Check password in hashed form
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: 'Invalid password' },
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