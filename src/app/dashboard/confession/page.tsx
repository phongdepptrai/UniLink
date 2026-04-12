"use client";
import { useState, useEffect } from "react";

export default function ConfessionPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Love");
  const [list, setList] = useState([]);

  // Hàm lấy dữ liệu về
  const fetchConfessions = async () => {
    const res = await fetch("/api/confessions");
    const data = await res.json();
    setList(data);
  };

  useEffect(() => { fetchConfessions(); }, []);

  // Hàm gửi bài
  const handleSubmit = async () => {
    if (!content) return alert("Vui lòng nhập nội dung!");
    await fetch("/api/confessions", {
      method: "POST",
      body: JSON.stringify({ content, category }),
    });
    setIsOpen(false);
    setContent("");
    fetchConfessions(); // Load lại danh sách ngay lập tức
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
    <div className="flex justify-between items-start mb-8"> 
    <div className="space-y-2">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-[#5e3afe] tracking-tight">
        Confession
      </h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        Chia sẻ tâm sự ẩn danh
      </p>
    </div>

    <button 
      onClick={() => setIsOpen(true)}
      className="bg-[#031635] dark:bg-[#3afee7] text-white dark:text-slate-900 px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg ml-6"
    >
      Viết confession
    </button>
  </div>

      {/* Modal nhập nội dung */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-200 p-6 rounded-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-[#4030f5]">Tâm sự ẩn danh</h2>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 mb-4 border rounded-lg dark:bg-slate-200"
            >
              <option value="Love">Love</option>
              <option value="Stress">Stress</option>
              <option value="Friendship">Friendship</option>
            </select>
            <textarea
              className="w-full h-32 p-3 border rounded-xl mb-4 dark:bg-slate-200"
              placeholder="Bạn đang nghĩ gì..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex gap-2 justify-end">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 text-gray-500">Hủy</button>
              <button onClick={handleSubmit} className="px-6 py-2 bg-blue-600 text-white rounded-lg">Đăng bài</button>
            </div>
          </div>
        </div>
      )}

      {/* Danh sách bài đăng */}
      <div className="space-y-4">
        {list.map((item: any) => (
          <div key={item._id} className="bg-white dark:bg-slate-200 p-5 rounded-2xl border border-gray-100 shadow-sm">
            <p className="mb-3">{item.content}</p>
            <div className="flex items-center gap-3">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold">{item.category}</span>
              <span className="text-gray-400 text-xs">Vừa xong</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}