export async function onRequestPost(context) {

  const formData = await context.request.formData();

  const empresa = formData.get("empresa") || "";
  const nombre = formData.get("nombre") || "";
  const email = formData.get("email") || "";
  const tipo = formData.get("tipo_proyecto") || "";
  const mensaje = formData.get("mensaje") || "";

  const telegramMessage = `
📩 Nuevo requerimiento desde FHSERVER Tech

🏢 Empresa: ${empresa}

👤 Nombre / Cargo:
${nombre}

📧 Correo:
${email}

🧩 Tipo de proyecto:
${tipo}

📝 Requerimiento:
${mensaje}
`;

  const telegramUrl =
    `https://api.telegram.org/bot${context.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  await fetch(telegramUrl, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      chat_id: context.env.TELEGRAM_CHAT_ID,
      text: telegramMessage,
    }),
  });

  return new Response(
    `
    <!DOCTYPE html>
    <html lang="es">

      <head>

        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Solicitud recibida</title>

        <style>

          body{
            margin:0;

            min-height:100vh;

            display:flex;
            align-items:center;
            justify-content:center;

            background:#020617;

            color:#ffffff;

            font-family:Arial, Helvetica, sans-serif;
          }

          .box{

            width:min(540px,90%);

            padding:50px;

            border-radius:24px;

            text-align:center;

            background:
              linear-gradient(
                180deg,
                rgba(15,23,42,.82),
                rgba(2,6,23,.62)
              );

            border:
              1px solid rgba(56,189,248,.12);

            box-shadow:
              0 20px 50px rgba(0,0,0,.35);
          }

          h1{
            margin:0 0 18px;

            color:#f97316;

            font-size:48px;
          }

          p{
            color:#cbd5e1;

            line-height:1.8;

            font-size:18px;
          }

          a{
            display:inline-block;

            margin-top:28px;

            color:#38bdf8;

            text-decoration:none;
          }

        </style>

      </head>

      <body>

        <div class="box">

          <h1>Solicitud recibida</h1>

          <p>
            Gracias por contactarnos.
            Nuestro equipo revisará tu requerimiento
            y se pondrá en contacto contigo a la brevedad.
          </p>

          <a href="/">
            Volver a FHSERVER Tech
          </a>

        </div>

      </body>

    </html>
    `,
    {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    }
  );
}

export async function onRequestGet() {
  return Response.redirect("/", 302);
}
