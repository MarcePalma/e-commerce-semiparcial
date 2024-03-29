import { emailRegex, passwordRegex } from "@/utils/Regex";
import { encriptarPassword } from "@/utils/crypto";
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  // Configurar los encabezados CORS
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*"); // Esto permite solicitudes desde cualquier origen
  headers.set("Access-Control-Allow-Methods", "POST");
  headers.set("Access-Control-Allow-Headers", "Content-Type");

  // Verificar el método de la solicitud
  if (req.method !== "POST") {
    return new Response(null, { status: 405, headers });
  }

  const usuario = await req.json();


  if (Object.values(usuario).includes(undefined)) {
    return new Response(JSON.stringify({ msg: "Error! Faltan datos" }), {
      status: 400,
    });
  }

  if (!usuario.email.match(emailRegex))
    return new Response(JSON.stringify({ msg: "Email invalido!" }), {
      status: 400,
    });

  if (!usuario.password.match(passwordRegex))
    return new Response(JSON.stringify({ msg: "Contraseña invalida!" }), {
      status: 400,
    });

  const hash = await encriptarPassword(usuario.password);

  const usuarioAGuardar = { ...usuario, password: hash };

  const usuarioSubido = await prisma.usuario.create({ data: usuarioAGuardar });

  if (!usuarioSubido)
    return new Response(
      JSON.stringify({ msg: "No se pudo subir el usuario!" }),
      { status: 500 }
    );

  const token = sign(usuarioAGuardar, process.env.TOKEN_SECRET as string);

  return new Response(JSON.stringify({ token }), { status: 201, headers });
}
