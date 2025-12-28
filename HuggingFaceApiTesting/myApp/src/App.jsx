import React, { useState } from "react";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

const generateImage = async () => {
  try {
    const response = await axios.post("http://localhost:5000/generate", { prompt });
    setImageUrl(response.data.imageUrl);
    console.log("Cloudinary image URL:", response.data.imageUrl);
  } catch (error) {
    console.error("Error generating image:", error);
  }
};


  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Image Generator</h1>
      <input
        type="text"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "300px", marginRight: "10px" }}
      />
      <button onClick={generateImage}>Generate</button>

      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <img src={imageUrl} alt="AI Generated" width="400" />
        </div>
      )}
    </div>
  );
}

export default App;
