export interface ConfigDatabase {
    url: string;
  }
  
  export interface ConfigSwagger {
    username: string;
    password: string;
  }
  
  export interface AuthConfig {
    expiresIn: number;
    secret: string;
  }
  
  export interface ConfigData {
    env: string;
  
    port: number;
  
    db: ConfigDatabase;
  
    swagger: ConfigSwagger;
  
    logLevel: string;
  
    auth: AuthConfig;
  }