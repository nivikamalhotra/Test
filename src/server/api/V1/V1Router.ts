import express from "express";
import api from "..";
import { cognitoAuth } from "../../lib/middleware/cognitoAuth";
import { getFile } from "./user.controller";

const router: express.Router = express.Router({ mergeParams: true });

router.get("/file", api.http(cognitoAuth.validateUser), api.http(getFile));

export const V1Router = router;
