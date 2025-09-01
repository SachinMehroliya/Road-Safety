import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [form, setForm] = useState({ name: "", contact: "", email: "", requestType: "" });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    formData.append("file", file);

    await axios.post("http://localhost:5000/api/uploads", formData);
    navigate("/results");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Upload Your Data</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="text" placeholder="Contact Number" className="w-full p-3 border rounded" onChange={(e) => setForm({ ...form, contact: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="text" placeholder="What do you want as inputs?" className="w-full p-3 border rounded" onChange={(e) => setForm({ ...form, requestType: e.target.value })} />
        <input type="file" className="w-full p-3 border rounded" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded">Get Results</button>
      </form>
    </div>
  );
}

export default Upload;
