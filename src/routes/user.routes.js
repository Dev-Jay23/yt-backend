import { Router } from "express";
import { loggedOutUser, loginUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverimage",
            maxCount: 1
        }
    ]),
    registerUser)



router.route("/loginuser").post(loginUser)


// secured routes

router.route("/logout").post(verifyJWT, loggedOutUser)



export default router