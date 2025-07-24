// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não definida");
      return NextResponse.json({ error: "RESEND_API_KEY não definida" }, { status: 500 });
    }
    // Teste simples de envio para debug
    const test = await resend.emails.send({
      from: "Portfolio Rafael Gogge <onboarding@resend.dev>",
      to: ["dev.rafaelgogge@gmail.com"],
      subject: "Teste de envio Resend API",
      html: "<p>Testando integração Resend via Vercel/Next.js</p>",
    });
    console.log("Resultado do teste Resend:", test);
    if (test.error) {
      return NextResponse.json({ error: test.error }, { status: 500 });
    }

    const toYou = await resend.emails.send({
      from: "Portfolio Rafael Gogge <onboarding@resend.dev>",
      to: ["dev.rafaelgogge@gmail.com"],
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #3b82f6;">Nova mensagem do Portfolio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <p><strong>Mensagem:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    const toUser = await resend.emails.send({
      from: "Portfolio Rafael Gogge <onboarding@resend.dev>",
      to: [email],
      subject: "Obrigado pelo contato! - Rafael Gogge",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #3b82f6;">Obrigado pelo contato, ${name}! 🚀</h2>
          <p>Recebi sua mensagem e entrarei em contato em breve.</p>
          <p><strong>Sua mensagem:</strong><br><em>${message}</em></p>
          <hr />
          <p>Conecte-se comigo:</p>
          <ul>
            <li><a href="https://github.com/rafaelgogge">GitHub</a></li>
            <li><a href="https://linkedin.com/in/rafaelgogge">LinkedIn</a></li>
            <li><a href="https://calendly.com/rafaelgogge">Calendly</a></li>
          </ul>
        </div>
      `,
    });

    if (toYou.error || toUser.error) {
      return NextResponse.json(
        { error: "Erro ao enviar email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
