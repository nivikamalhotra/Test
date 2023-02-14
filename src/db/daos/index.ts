import { UserDetailsDao } from "./UserDetailsDao";
import { UserFileServerDao } from "./UserFileServerDao";

const UserDetails = new UserDetailsDao();
const UserFileServer = new UserFileServerDao();

export { UserDetails, UserFileServer };
