import { BaseDAO } from "./Base";
import { MODELS } from "../../constants";

export class UserFileServerDao extends BaseDAO {
  constructor() {
    super("AC", MODELS.AC.USER_FILE_SERVER);
  }
}
