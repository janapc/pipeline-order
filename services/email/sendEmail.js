const nodemailer = require("nodemailer");

function formatMessage(data) {
  return `
  <html>
  <head>
  </head>
  <body style="font-size: 18px;color: #4b4b4b;font-family: monospace;display: flex;align-items: center;justify-content: center;flex-direction: column;">
    <div>
      <p>Olá ${data.name} seu produto está a caminho 🚚 do endereço <strong> ${
    data.address
  } </strong></p>

      <p>O código de rastreio do seu produto: <strong> ${
        data.code
      } </strong></p>

      <p>Mais detalhes sobre seu produto:</p>
      <ul>
        <li>Nome do produto: ${data.product.title}</li>
        <li>Valor do produto: ${new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(data.product.value))}</li>
        <li>Tipo de pagamento: ${data.payment_type}</li>
      </ul>
      <footer> <p>Agora só aguardar e obrigado pela compra</p> </footer>
    </div>
  </body>
</html>
`;
}

module.exports.sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const formatMessageTicket = formatMessage(data);

  return await transporter.sendMail({
    from: '"Produtinhos" <produtinhos@empresa.com>',
    to: data.email,
    subject: "Seu produto está a caminho",
    html: formatMessageTicket,
  });
};
