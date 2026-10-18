const express = require('express');
const router = express.Router();
const asyncerror = require('../middlewares/catchasyncerror.js');
const ErrorHandler = require('../middlewares/errorhandler');
const Chat = require('../model/chat.js')
const { verifyToken, isadmin } = require('../middlewares/verifyauth.js')
const cloudinary = require('cloudinary')

router.post('/startchat', verifyToken, asyncerror(async (req, res, next) => {
  if (req.body.document) {
    const result = await cloudinary.v2.uploader.upload(req.body.document, {
      folder: "documents",
      resource_type: "raw"
    })
    req.body.documentpublic_id = result.public_id;
    req.body.documenturl = result.url;
  }
  req.body.user = req.id
  const createdChat = await Chat.create(req.body);

  res.status(200).json({ success: true, createdChat });
}))
router.get('/allchats', verifyToken, asyncerror(async (req, res) => {
  Chat.find({ user: req.id })
    .populate("user", "name email")
    .sort({ updatedAt: -1 })
    .then(async (chats) => {
      res.status(200).send({ success: true, chats });
    });
}))

module.exports = router