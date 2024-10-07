import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'src/lib/posts.json');

export async function GET() {
  try {
    // console.log('filePath:', filePath);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.posts.push(body);
    fs.writeFileSync(filePath, JSON.stringify(data));
    return NextResponse.json(body, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to write data' },
      { status: 500 }
    );
  }
}
