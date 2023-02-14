import { DataTypes, Model } from "sequelize";
import { DB_CONN } from "../../dbConnections";
import { MODELS, TABLES } from "../../../constants";

export default class UserFileServer extends Model {
  public ID: string;
  public FILE_NAME: string;
  public USER_ID: string;
}

UserFileServer.init(
  {
    ID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FILE_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    USER_ID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: DB_CONN.AC,
    modelName: MODELS.AC.USER_FILE_SERVER,
    tableName: TABLES.AC.USER_FILE_SERVER,
    timestamps: false,
  }
);
