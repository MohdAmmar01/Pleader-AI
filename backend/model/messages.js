const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    from: { type: String, required:true },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" }
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;