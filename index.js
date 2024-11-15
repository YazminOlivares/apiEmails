const express = require('express')
const app = express()
const port = 4000

const { MailtrapClient } = require("mailtrap");

const TOKEN = "74c6987d1bd0c296bce8c0d33df605db";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "kayaolivaresbe@ittepic.edu.mx",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    html: `
        <!doctype html>
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body style="font-family: sans-serif;">
            <div style="display: block; margin: auto; max-width: 600px;" class="main">
            <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">¡Felicidades por enviar un email de prueba con Mailtrap!</h1>
            <p>Inspecciónelo utilizando las pestañas que ve arriba y aprenda cómo se puede mejorar este email.</p>
            <p>¡Ahora envíe su email utilizando nuestro servidor SMTP falso y la integración de su elección!</p>
            <p>¡Buena suerte! Esperamos que funcione.</p>
            </div>
        </body>
        </html>
    `,
    category: "Integration Test",
  })
  .then(console.log, console.error);

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})