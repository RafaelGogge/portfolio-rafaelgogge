import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email para você
    const toYou = await resend.emails.send({
      from: "Portfolio Rafael Gogge <onboarding@resend.dev>",
      to: ["dev.rafaelgogge@gmail.com"],
      subject: `[Portfolio] ${subject}`,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Nova mensagem do Portfolio
        </h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Informações do Contato:</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Mensagem:</h3>
          <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, "<br>")}</p>
        </div>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px;">
            Mensagem enviada através do formulário de contato do portfolio<br>
            <a href="mailto:${email}" style="color: #3b82f6;">Responder diretamente para ${email}</a>
          </p>
        </div>
      </div>`
    });

    // Email de confirmação para o usuário
    const toUser = await resend.emails.send({
      from: "Portfolio Rafael Gogge <onboarding@resend.dev>",
      to: [email],
      subject: "Obrigado pelo contato! - Rafael Gogge",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Obrigado pelo contato, ${name}! 🚀
        </h2>
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="line-height: 1.6; color: #1e293b;">
            Recebi sua mensagem sobre "<strong>${subject}</strong>" e ficarei feliz em responder em breve!
          </p>
          <p style="line-height: 1.6; color: #1e293b;">
            Normalmente respondo em até 24 horas. Enquanto isso, fique à vontade para:
          </p>
          <ul style="color: #475569; line-height: 1.6;">
            <li>Conferir meus projetos no <a href="https://github.com/rafaelgogge" style="color: #3b82f6;">GitHub</a></li>
            <li>Conectar comigo no <a href="https://linkedin.com/in/rafaelgogge" style="color: #3b82f6;">LinkedIn</a></li>
            <li>Agendar uma reunião no <a href="https://calendly.com/rafaelgogge" style="color: #3b82f6;">Calendly</a></li>
          </ul>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #10b981; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Sua mensagem:</h3>
          <p style="line-height: 1.6; color: #475569; font-style: italic;">"${message}"</p>
        </div>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px;">
            Rafael Vieira Gogge<br>
            Desenvolvedor Full Stack<br>
            <a href="mailto:dev.rafaelgogge@gmail.com" style="color: #3b82f6;">dev.rafaelgogge@gmail.com</a>
          </p>
        </div>
      </div>`
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
