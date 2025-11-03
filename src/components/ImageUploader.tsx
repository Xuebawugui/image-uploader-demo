import { useState, type ChangeEvent } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Image must be smaller than 2MB");
      return;
    }

    setError("");
    setImage(URL.createObjectURL(file));
  };

  const handleClear = () => {
    setImage(null);
    setError("");
  };

  return (
    <div style={{ width: "300px" }}>
      <input type="file" onChange={handleChange} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {image && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={image}
            alt="preview"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <button onClick={handleClear} style={{ marginTop: "10px" }}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
