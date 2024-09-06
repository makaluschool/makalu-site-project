const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres'); // Set PostgreSQL as the client

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'), // Change to your actual PostgreSQL host
        port: env.int('DATABASE_PORT', 5432),    // PostgreSQL default port
        database: env('DATABASE_NAME', 'strapi'), // Your database name
        user: env('DATABASE_USERNAME', 'strapi'), // Your PostgreSQL username
        password: env('DATABASE_PASSWORD', 'strapi'), // Your PostgreSQL password
        ssl: env.bool('DATABASE_SSL', false) && {  // SSL configuration
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'), // Default schema
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2), 
        max: env.int('DATABASE_POOL_MAX', 10), // Connection pool settings
      },
    },
  };

  return {
    connection: {
      client, 
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
