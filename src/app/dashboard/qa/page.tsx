"use client";
import { useState, useEffect } from "react";

export default function QAPage() {
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});

  const fetchQuestions = async () => {
    const res = await fetch("/api/questions");
    const data = await res.json();
    setQuestions(data);
  };

  useEffect(() => { fetchQuestions(); }, []);

  // Hàm Đăng Câu Hỏi
  const handlePostQuestion = async () => {
    if (!title || !content) return alert("Vui lòng nhập đủ thông tin!");
    await fetch("/api/questions", {
      method: "POST",
      body: JSON.stringify({ title, content, tags: ["#tech", "#academic"] }),
    });
    setTitle(""); setContent("");
    fetchQuestions();
  };

  // Hàm Gửi Câu Trả Lời
  const handlePostAnswer = async (qId: string) => {
    if (!replyText[qId]) return;
    await fetch("/api/questions", {
      method: "POST",
      body: JSON.stringify({ questionId: qId, content: replyText[qId] }),
    });
    setReplyText({ ...replyText, [qId]: "" });
    fetchQuestions();
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-20 bg-white dark:bg-slate-50 min-h-screen">
      {/* 1. Header & Input Box */}
      <div className="bg-slate-50 dark:bg-slate-200 p-6 rounded-3xl border border-slate-200">
        <h2 className="text-xl font-bold mb-4">Đặt câu hỏi cho cộng đồng</h2>
        <input 
          placeholder="Tiêu đề câu hỏi..."
          className="w-full p-3 mb-3 rounded-xl border dark:bg-slate-100 outline-none"
          value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="Mô tả chi tiết..."
          className="w-full h-24 p-3 mb-3 rounded-xl border dark:bg-slate-100 outline-none resize-none"
          value={content} onChange={(e) => setContent(e.target.value)}
        />
        <button 
          onClick={handlePostQuestion}
          className="bg-black text-white px-6 py-2 rounded-xl font-bold hover:opacity-80"
        >
          Đăng câu hỏi
        </button>
      </div>

      {/* 2. Danh sách câu hỏi */}
      <div className="space-y-6">
        {questions.map((q: any) => (
          <div key={q._id} className="bg-white dark:bg-slate-600 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex gap-4">
              <div className="text-center font-bold text-slate-100">
                <span className="material-symbols-outlined block">north</span>
                {q.votes}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{q.title}</h3>
                <p className="text-slate-100 mb-4">{q.content}</p>
                
                {/* Danh sách câu trả lời hiện có */}
                <div className="space-y-2 ml-4 border-l-2 border-slate-100 pl-4 mb-4">
                  {q.answers?.map((ans: any, idx: number) => (
                    <div key={idx} className="text-sm bg-slate-50 dark:bg-slate-100 p-2 rounded-lg">
                      <span className="font-bold text-blue-500">{ans.author}:</span> {ans.content}
                    </div>
                  ))}
                </div>

                {/* Ô nhập câu trả lời */}
                <div className="flex gap-2">
                  <input 
                    placeholder="Viết câu trả lời..."
                    className="flex-1 p-2 bg-slate-100 dark:bg-slate-100 rounded-lg outline-none text-sm"
                    value={replyText[q._id] || ""}
                    onChange={(e) => setReplyText({ ...replyText, [q._id]: e.target.value })}
                  />
                  <button 
                    onClick={() => handlePostAnswer(q._id)}
                    className="text-blue-600 font-bold text-sm px-3"
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}