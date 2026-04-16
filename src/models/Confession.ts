import mongoose, { Schema, model, models } from "mongoose";

const ConfessionSchema = new Schema({
  content: { type: String, required: true },
  category: { type: String, default: "Tất cả" }, // Love, Stress, v.v.
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Confession = models.Confession || model("Confession", ConfessionSchema);
export default Confession;

