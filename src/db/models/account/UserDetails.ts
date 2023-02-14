import { Model, DataTypes } from "sequelize";
import { MODELS, TABLES } from "../../../constants";
import { DB_CONN } from "../../dbConnections";

export default class UserDetails extends Model {
  public USER_ID!: string;
  public NAME!: string;
}

UserDetails.init(
  {
    USER_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: DB_CONN.AC,
    modelName: MODELS.AC.USER_DETAILS,
    tableName: TABLES.AC.USER_DETAILS,
    timestamps: false,
  }
);
