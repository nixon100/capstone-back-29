import express from "express";
import {
//   countByCity,
//   countByType,
  createHotel,
  getProject,
//   deleteHotel,
//   getHotel,
getHotelRooms
//   getHotels,
//   updateHotel,
} from "../controllers/class.js";
// import Hotel from "../models/Hotel.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

// //CREATE
// router.post("/", verifyAdmin, createHotel);

// //UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
// //DELETE
// router.delete("/:id", verifyAdmin, deleteHotel);
// //GET

// router.get("/find/:id", getHotel);
// //GET ALL

router.get("/", getProject);
router.post("/", createHotel);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
router.get("/:id", getHotelRooms);

export default router;
