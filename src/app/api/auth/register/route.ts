import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

let users: { email: string; passwordHash: string; name?: string }[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email и пароль обязательны" }, { status: 400 });
    }

    // Проверка существующего пользователя
    if (users.find(u => u.email === email)) {
      return NextResponse.json({ error: "Пользователь уже существует" }, { status: 400 });
    }

    // Хэшируем пароль
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    users.push({ email, passwordHash, name });

    return NextResponse.json({ message: "Пользователь зарегистрирован" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
