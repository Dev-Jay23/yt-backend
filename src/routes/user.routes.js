import { Router } from "express";
import {
    changeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    getWatchHistory,
    loggedOutUser,
    loginUser,
    refreshAccessToken,
    registerUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage
} from "../controllers/user.controller.js";
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
router.route("/refresh-token").post(refreshAccessToken)
router.route("/changepassword").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)
router.route("/update-avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/update-cover-image").patch(verifyJWT, upload.single("coverimage"), updateUserCoverImage)
router.route("/channel/:username").get(verifyJWT, getUserChannelProfile)
router.route("/watch-history").get(verifyJWT, getWatchHistory)





export default router