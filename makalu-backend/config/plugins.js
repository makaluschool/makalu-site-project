module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.gmail.com',
          port: 465,
          auth: {
            user: process.env.email, // Your Gmail
            pass: process.env.psw,    // Gmail App Password
          },
        },
        settings: {
          defaultFrom: process.env.email,
          defaultReplyTo: process.env.email,
        },
      },
    },
  });
  
