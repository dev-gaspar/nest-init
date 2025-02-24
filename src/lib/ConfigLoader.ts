import { Config } from 'src/types/config';

export default (): Config => {
  const { PORT, DATABASE_URL, JWT_SECRET } = process.env;
  if (!PORT || !DATABASE_URL || !JWT_SECRET) {
    throw new Error('Missing environment variables');
  }

  return {
    port: Number(PORT),
    databaseUrl: DATABASE_URL,
    jwt: {
      secret: JWT_SECRET,
    },
  };
};
