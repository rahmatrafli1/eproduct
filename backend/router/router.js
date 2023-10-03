import { Router } from "express";
import updateCustomer from "../controller/updateCustomer.js";

const router = Router();
router.put("/updateCustomer/:id", updateCustomer.updateCust);

export default router;
