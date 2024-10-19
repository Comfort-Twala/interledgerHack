import dotenv from "dotenv";
dotenv.config({ override: true });

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
  }
}