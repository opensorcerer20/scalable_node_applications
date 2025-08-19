declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      // Add other environment variables here with their types
    }
  }
}
export {}; // To make it a module