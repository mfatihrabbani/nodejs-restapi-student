import express from "express";
import {
    postStudent,
    updateStudent,
    getStudent,
    deleteStudent,
    listStudent
} from "../Controllers/studentController.js"

const router = express.Router();

router.get("/", listStudent);
router.post("/", postStudent);
router.get("/:id", getStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;