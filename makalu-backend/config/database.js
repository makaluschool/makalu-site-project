const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT'); // Set PostgreSQL as the client

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: env.bool('DATABASE_SSL', false) && {  // SSL configuration
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'), // Default schema
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 1), 
        max: env.int('DATABASE_POOL_MAX', 100), // Connection pool settings
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
