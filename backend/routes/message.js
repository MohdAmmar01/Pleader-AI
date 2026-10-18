const express = require('express');
const router = express.Router();
const asyncerror = require('../middlewares/catchasyncerror.js');
const ErrorHandler = require('../middlewares/errorhandler');
const User = require('../model/user.js');
const Message = require('../model/messages.js');
const Chat = require('../model/chat.js');
const { verifyToken, isadmin } = require('../middlewares/verifyauth.js');
const axios = require('axios');

router.post('/allmsgs', verifyToken, asyncerror(async (req, res, next) => {
    try {
        let verifychat = await Chat.findById(req.body.chatId);
        if (verifychat.user.toString() !== req.id.toString()) {
            return next(new ErrorHandler("This chat does not belong to you"));
        }
        const messages = await Message.find({ chat: req.body.chatId }).populate("chat");
        res.json({ success: true, messages });
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
}));

router.post('/sendmsg', verifyToken, asyncerror(async (req, res, next) => {
    const { content, chatId } = req.body;

    if (!content || !chatId) {
        console.log("Invalid data passed into request");
        return res.status(405).json({ success: false, message: "Invalid data passed into request" });
    }

    var newMessage = {
        from: "user",
        content: content,
        chat: chatId,
    };

    var message = await Message.create(newMessage);

    try {
        console.log("Connecting to Python API...");
        const response = await axios.post(`${process.env.PYTHON_API}/ask`, {
            user_id: message.chat._id,
            query: message.content
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
                "Content-Type": "application/json"
            }
        });

        if (response.status === 200) {
            console.log("Connected to Python API successfully.");
            const json = response.data;

            var botresponsebody = {
                from: "bot",
                content: json.response,
                chat: chatId,
            };

            var botresponse = await Message.create(botresponsebody);

            res.status(200).json({ success: true, message, botresponse });
        } else {
            console.log("Failed to connect to Python API.");
            return next(new ErrorHandler(response.statusText, 500));
        }
    } catch (error) {
        console.log("An error occurred while fetching the response from the Python API.");
        return next(new ErrorHandler("An error occurred while fetching the response", 500));
    }
}));

module.exports = router;
