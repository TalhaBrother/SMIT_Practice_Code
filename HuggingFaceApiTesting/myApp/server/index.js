import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

const app = express();
app.use(cors());
app.use(express.json());

// 1️⃣ Hugging Face model & key
const HF_API_URL =
  "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2";
const HF_API_KEY = "YOUR_HUGGING_FACE_API_KEY";

// 2️⃣ Cloudinary configuration
cloudinary.config({
  cloud_name: "dbi1eno3a",
  api_key: "111421572177235",
  api_secret: "cgcou5Ve_OrWnmPB7hf3tO3aTcQ",
});

// 3️⃣ Endpoint
app.post("/generate", async (req, res) => {
  try {
    console.log("➡️ Received prompt:", req.body.prompt);

    // Step A: request image from Hugging Face
    const hfResponse = await fetch(HF_API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${HF_API_KEY}` },
      body: JSON.stringify({ inputs: req.body.prompt }),
    });

    if (!hfResponse.ok) {
      const text = await hfResponse.text();
      console.error("❌ Hugging Face error:", text);
      return res.status(500).json({ error: "Hugging Face request failed", details: text });
    }

    console.log("✅ Got response from Hugging Face");

    const arrayBuffer = await hfResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Step B: upload to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "ai-images", resource_type: "image" },
      (error, result) => {
        if (error) {
          console.error("❌ Cloudinary upload failed:", error);
          return res.status(500).json({ error: "Cloudinary upload failed", details: error });
        }
        console.log("✅ Uploaded to Cloudinary:", result.secure_url);
        res.json({ imageUrl: result.secure_url });
      }
    );

    uploadStream.end(buffer);
  } catch (err) {
    console.error("🔥 Unexpected error:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
});


app.listen(5000, () => console.log("✅ Server running on port 5000"));
