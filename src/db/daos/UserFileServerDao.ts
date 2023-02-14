import { BaseDAO } from "./Base";
import { MODELS } from "../../constants";

export class UserFileServerDao extends BaseDAO {
  constructor() {
    super("AC", MODELS.AC.USER_FILE_SERVER);
  }

  getfile(sid: string) {
    const query = {
      where: {
        USER_ID: sid,
      },
    };
    return this.findAll(query);
  }
}
