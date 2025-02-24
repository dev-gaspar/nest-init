export type Config = {
  port: number;
  databaseUrl: string;
  jwt: {
    secret: string;
  };
};
