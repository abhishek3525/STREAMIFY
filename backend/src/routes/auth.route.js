import express from "express";
import {signup,login,logout,onboarding} from "../controllers/auth.controller.js"
import {protectRoute} from "../middleware/auth.middleware.js"
const router=express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)//logout is a post method and not a get method becuase it modifies the server state by clearing the cookie

router.post("/onboarding",protectRoute,onboarding);
// check if user is logged in
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});
export default router;