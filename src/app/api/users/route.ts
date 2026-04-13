import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '../../../lib/mongodb';
import User from '../../../models/User';

// GET all users (with pagination)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
    const limit = Math.max(1, Math.min(100, parseInt(searchParams.get('limit') || '10', 10) || 10));
    const skip = (page - 1) * limit;

    console.log(`Fetching users: page=${page}, limit=${limit}`);

    await connectDB();

    // Fetch users with pagination and exclude password field
    const [users, total] = await Promise.all([
      User.find({}).select('-password').skip(skip).limit(limit).lean(),
      // ⚡ Bolt Optimization: Use estimatedDocumentCount() instead of countDocuments({}) for O(1) performance
      User.estimatedDocumentCount(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      data: users,
      pagination: {
        total,
        page,
        limit,
        pages: totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });

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
    await connectDB();

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

    // ⚡ Bolt Optimization: Use exists() instead of findOne() to avoid loading full document into memory
    const existing = await User.exists({ email: email.toLowerCase() });
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