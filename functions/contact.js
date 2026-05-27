export async function onRequestPost(context) {
  const formData = await context.request.formData();

  const data = {
    empresa: formData.get("empresa"),
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    tipo_proyecto: formData.get("tipo_proyecto"),
    mensaje: formData.get("mensaje"),
  };

  console.log("Nuevo requerimiento recibido:", data);

  return new Response(
    `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solicitud recibida</title>

        <style>
          body{
            margin:0;
            min-height:100vh;

            display:flex;
            align-items:center;
            justify-content:center;

            background:#020617;

            color:#e5e7eb;

            font-family:Arial, Helvetica, sans-serif;
          }

          .box{
            max-width:580px;

            padding:40px;

            border-radius:22px;

            background:
              linear-gradient(
                180deg,
                rgba(15,23,42,.85),
                rgba(2,6,23,.72)
              );

            border:1px solid rgba(56,189,248,.14);

            text-align:center;

            box-shadow:
              0 20px 60px rgba(0,0,0,.28);
          }

          h1{
            margin-bottom:18px;

            color:#f97316;

            font-size:42px;
          }

          p{
            color:#cbd5e1;

            line-height:1.8;

            font-size:18px;
          }

          a{
            display:inline-block;

            margin-top:24px;

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
            y se pondrá en contacto a la brevedad.
          </p>

          <a href="/">Volver a FHSERVER Tech</a>

        </div>

      </body>
    </html>
    `,
    {
      status: 200,
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    }
  );
}

export async function onRequestGet() {
  return Response.redirect("/", 302);
}
