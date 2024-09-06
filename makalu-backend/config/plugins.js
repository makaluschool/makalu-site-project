module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.email, // Your Gmail
          pass: process.env.psw, // Gmail App Password
        },
      },
      settings: {
        defaultFrom: process.env.email,
        defaultReplyTo: process.env.email,
      },
    },
  },

  upload: {
    config: {
      provider: "strapi-provider-upload-supabase",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env("SUPABASE_DIRECTORY"),
        options: {},
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
