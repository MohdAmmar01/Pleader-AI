const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref:"user",
    required:true
  },
  documenturl:{
    type:String,
  },
  documentpublic_id:{
    type:String,
  },
  documentname:{
    type:String,
  }
},
{ timestamps: true });

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat