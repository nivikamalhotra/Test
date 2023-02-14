import { UserFileServer } from "../../../db/daos";
import { GlobalUtils } from "../../utils";
import { SUCCESS } from "../../utils/V1/constants/success.messages";
import { responses as ModifiedResponse } from "../../utils/V1/responses";

export const getFile = async (object, options) => {
  const response = GlobalUtils.responseObject();
  try {
    const userSid = options.locals?.auth.sub;
    const file = await UserFileServer.getfile(userSid);

    return ModifiedResponse.sendCreated(response, {
      message: SUCCESS.CHILD.SHARED_SUCCESSFULLY,
      data: file,
    });
  } catch (err) {
    console.log(err);
    return ModifiedResponse.sendFailure(response, err);
  }
};
