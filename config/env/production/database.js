module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'httpdjbz_freuzepanel'),
        user: env('DATABASE_USERNAME', 'httpdjbz_freuzepanel'),
        password: env('DATABASE_PASSWORD', 'freuze8563F'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  });
  