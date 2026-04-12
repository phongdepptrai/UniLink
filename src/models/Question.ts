import mongoose, { Schema, model, models } from "mongoose";

const AnswerSchema = new Schema({
  content: { type: String, required: true },
  author: { type: String, default: "Người dùng" },
  createdAt: { type: Date, default: Date.now },
});

const QuestionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: "Đức Anh" },
  tags: [{ type: String }],
  votes: { type: Number, default: 0 },
  answers: [AnswerSchema], // Mảng chứa các câu trả lời
  createdAt: { type: Date, default: Date.now },
});

const Question = models.Question || model("Question", QuestionSchema);
export default Question;