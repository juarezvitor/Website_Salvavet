import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, phone, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: subject || "Contato pelo site",
      text: `
      Nome: ${name}
      Telefone: ${phone || "Não informado"}
      E-mail: ${email}

      Mensagem:
      ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "E-mail enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erro ao enviar e-mail" },
      { status: 500 }
    );
  }
}
