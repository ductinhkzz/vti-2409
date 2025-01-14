export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('DEFAULT_FROM_MAIL'),
        defaultReplyTo: env('DEFAULT_REPLY_MAIL'),
      },
    },
  },
});
