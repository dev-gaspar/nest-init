export interface Config {
  port: number;
  databaseUrl: string;
  jwt: {
    secret: string;
  };
}
