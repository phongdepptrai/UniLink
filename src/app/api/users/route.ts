import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '../../../lib/mongodb';
import User from '../../../models/User';

// GET all users
export async function GET() {
  try {
    console.log('Connecting to MongoDB...');
    await connectDB();
    console.log('MongoDB connected');

    const users = await User.find({}).select('-password');
    return NextResponse.json({ success: true, data: users });

  } catch (error: unknown) {
    console.error('GET ERROR:', error);

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

async function parseRequestBody(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return request.json();
  }

  if (
    contentType.includes('multipart/form-data') ||
    contentType.includes('application/x-www-form-urlencoded')
  ) {
    const formData = await request.formData();
    return Object.fromEntries(formData.entries());
  }

  return {};
}

// POST create new user
export async function POST(request: NextRequest) {
  try {
    console.log('Connecting to MongoDB...');
    await connectDB();
    console.log('MongoDB connected');

    const body = await parseRequestBody(request);

    const { name, email, institution, password, confirmPassword } = body as {
      name?: string;
      email?: string;
      institution?: string;
      password?: string;
      confirmPassword?: string;
    };

    if (!name || !email || !institution || !password) {
      return NextResponse.json(
        { success: false, error: 'Missing required user fields' },
        { status: 400 }
      );
    }

    if(password !== confirmPassword) {
      return NextResponse.json(
        { success: false, error: 'Passwords do not match' },
        { status: 400 }
      );
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Email already exists' },
        { status: 409 }
      );
    }
    
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      institution,
      password: hashedPassword,
    });

    const userObj = user.toObject();
    delete userObj.password;

    return NextResponse.json(
      { success: true, data: userObj },
      { status: 201 }
    );

  } catch (error: unknown) {
    console.error('POST ERROR:', error);

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