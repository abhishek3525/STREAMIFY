import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getrecommendedUsers, getMyFriends ,sendFriendRequest,acceptFriendRequest,getFriendsRequests,getOutgoingFriendReqs} from "../controllers/user.controller.js";
const router=express.Router();
router.use(protectRoute)
router.get("/",getrecommendedUsers);
router.get("/friends",getMyFriends);
router.post("/friend-request/:id" ,sendFriendRequest)
router.put("/friend-request/:id/accept",acceptFriendRequest);
router.get("/friend-requests",getFriendsRequests);
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);

export default router;