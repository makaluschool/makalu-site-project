module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.sendContactForm',
      config: {
        auth: false, // If you want it to be public
      },
    },
  ],
};
