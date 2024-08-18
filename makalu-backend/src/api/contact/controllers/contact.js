'use strict';

/**
 * contact controller
 */

module.exports = {
  async sendContactForm(ctx) {
    const { name, email, message } = ctx.request.body;
    
    try {
      await strapi.plugins['email'].services.email.send({
        to: process.env.email, // School's Gmail address
        from: email, // Sender's email
        subject: `New message from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      });

      ctx.send({ message: 'Email sent successfully' });
    } catch (err) {
        console.log(err)
      ctx.send({ error: 'Failed to send email' }, 500);
    }
  },
};
