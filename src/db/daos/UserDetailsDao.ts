import { BaseDAO } from "./Base";
import { MODELS } from "../../constants";

export class UserDetailsDao extends BaseDAO {
  constructor() {
    super("AC", MODELS.AC.USER_DETAILS);
  }
}
