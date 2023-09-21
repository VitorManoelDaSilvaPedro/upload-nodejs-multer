import { Router } from "express";

import upload from "./src/utils/storage";
import { responder } from "./src/services/UploadService";

const router = Router();

router.post("/uploads", upload.single("arquivo"), responder);
export default router;