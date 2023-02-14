import { config } from "./index";
// import packageJson from '../../package.json';

const serverName: string = config.nConfig.get("server:name");
const serverHost: string = config.nConfig.get("server:host");
const serverBaseUrl: string = config.nConfig.get("server:url");
const serverPort: number = config.nConfig.get("server:port");
const defaultTimeZone: string = config.nConfig.get("server:defaultTimeZone");
const assetsDirectory: string = config.nConfig.get("paths:assets");
const contentDirectory: string = config.nConfig.get("paths:content");
const uploadsDirectory: string = config.nConfig.get("paths:uploads");

const env: string = config.nConfig.get("env");
const accountDbHost: string = config.nConfig.get("database:account:host");
const accountDbPort: number = config.nConfig.get("database:account:port");
const accountDbName: string = config.nConfig.get("database:account:name");
const accountDbUser: string = config.nConfig.get("database:account:user");
const accountDbPassword: string = config.nConfig.get(
  "database:account:password"
);
const accountDbDebug: boolean = config.nConfig.get("database:account:debug");
const accountLogSqlQuery: boolean = config.nConfig.get(
  "database:account:log_sql_query"
);
const AWS_REGION: string = config.nConfig.get("AWS:REGION");

const COGNITO_ACCESS_KEY: string = config.nConfig.get("COGNITO:ACCESS_KEY");
const COGNITO_SECRET_KEY: string = config.nConfig.get("COGNITO:SECRET_KEY");
const COGNITO_USER_POOL_ID: string = config.nConfig.get("COGNITO:USER_POOL_ID");
const COGNITO_APP_CLIENT_ID: string = config.nConfig.get(
  "COGNITO:APP_CLIENT_ID"
);


export const CONSTANT_CONFIG = {
  SERVER: {
    NAME: serverName,
    HOST: serverHost,
    URL: serverBaseUrl,
    PORT: serverPort,
    DEFAULT_TIME_ZONE: defaultTimeZone,
  },
  /**
   * Default user agent used in API calls made from this app
   */
  // USER_AGENT: `${serverName}/${packageJson.version}`,
  USER_AGENT: `${serverName}`,

  ENV: env,
  DATABASE: {
    ACCOUNT: {
      HOST: accountDbHost,
      PORT: accountDbPort,
      NAME: accountDbName,
      USER: accountDbUser,
      PASSWORD: accountDbPassword,
      DEBUG: accountDbDebug,
      LOG: accountLogSqlQuery,
    },
  },
  COGNITO: {
    ACCESS_KEY: COGNITO_ACCESS_KEY,
    SECRET_KEY: COGNITO_SECRET_KEY,
    USER_POOL_ID: COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: COGNITO_APP_CLIENT_ID,
  },
  PATHS: {
    ASSETS: assetsDirectory,
    CONTENT: contentDirectory,
    UPLOADS: uploadsDirectory,
  },
  AWS: {
    REGION: AWS_REGION,
  },
};
