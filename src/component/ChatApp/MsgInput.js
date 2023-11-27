import { ImAttachment } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";
import { useContext, useState } from "react";
import {
    Timestamp,
    arrayUnion,
    doc,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "../fireBase.js";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { AuthContext } from "../context/AuthContext.js";
import { ChatContext } from "../context/ChatContext.js";
import './index.css'
import { Button, TextField } from "@mui/material";

function MsgInput() {


    return (
        <div className="input-container">
            {/* <TextField
                label="Type a message"
                variant="outlined"
                fullWidth
            // value={newMessage}
            // onChange={(e) => setNewMessage(e.target.value)}
            /> */}
            {/* <Button variant="contained" color="primary"
            //  onClick={handleSendMessage}
            >
                Send
            </Button> */}

            <div class="chat-input-container">

                <input type="text" class="message-input" placeholder="Type your message..."
                />
                <div class="attachment-icon">
                    <div className="send">
                        <input
                            type="file"
                            name=""
                            id="imgAttachment"
                            style={{ display: "none" }}
                        // onChange={(e) => setImg(e.target.files[0])}
                        // onKeyDown={handleKey}
                        />
                        <label htmlFor="imgAttachment" className="imgAttachment">
                            <ImAttachment size={20} />
                        </label>
                    </div>
                </div>
            </div>


            <button className="send_btn"
            // onClick={handleSend}
            >
                <AiOutlineSend size={25} />
            </button>
        </div>
    );
}

export default MsgInput;