# React Image Uploader Component

A simple, clean and reusable image upload component built with **React + TypeScript + Vite**.  
Supports image preview, size validation and clearing selected images.

✅ **Live Demo:** https://image-uploader-demo.vercel.app  
✅ **GitHub Repo:** https://github.com/Xuebawugui/image-uploader-demo

---

## ✨ Features
- ✅ Instant image preview  
- ✅ Restricts file type to images  
- ✅ Maximum file size limit (2MB)  
- ✅ Error message display  
- ✅ Clear button to remove selected image  
- ✅ Fully typed with TypeScript  
- ✅ Lightweight and reusable  

---

## 🚀 Tech Stack
- React 18+ / 19  
- TypeScript  
- Vite  

---

## 📦 Usage

```tsx
import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <div>
      <h2>Image Upload Example</h2>
      <ImageUploader />
    </div>
  );
}

