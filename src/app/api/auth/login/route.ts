import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

let users: { email: string; passwordHash: string; name?: string }[] = [];

const SECRET_KEY = "supersecretkey";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = users.find(u => u.email === email);
    if (!user) {
      return NextResponse.json({ error: "Неверный email или пароль" }, { status: 400 });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Неверный email или пароль" }, { status: 400 });
    }

    const token = jwt.sign({ email: user.email, name: user.name }, SECRET_KEY, { expiresIn: "1h" });

    return NextResponse.json({ token, email: user.email, name: user.name });
  } catch (err) {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}

