import React, { useContext } from "react";
import MessageScreen from "./MessageScreen.js";
import MsgInput from "./MsgInput.js";
import { ChatContext } from "../context/ChatContext.js";
import { IoFilter } from "react-icons/io5";
import './index.css'
import { Stack } from "@mui/material";
import { main_color } from "../../utils/color.js";
function ChatScreen() {
  // const { data } = useContext(ChatContext);

  return (
    // <div className="home">
    //   <div className="container">
    //     <div className="chatScreen">
    //       <div className="chatInfo">
    //         <span>{"Ibrar"}</span>
    //         <span>
    //           <IoFilter />
    //         </span>
    //       </div>

    //       <MessageScreen />
    //       <MsgInput />
    //     </div>
    //   </div>
    // </div>
    <Stack>
      <Stack className="container">
        <Stack style={{ backgroundColor: main_color, padding: '10px', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', }}>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack style={{ fontSize: '25px', fontWeight: 'bold', color: 'white' }}>Sara</Stack>
            <Stack><IoFilter style={{ fontSize: '25px', color: 'white', cursor: 'pointer' }} /></Stack>
          </Stack>
        </Stack>
        <Stack flex={1} className="chat_or_inp_container">

          <Stack style={{ flex: 2 }}>
            <MessageScreen />
          </Stack>
          <Stack >
            <MsgInput />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ChatScreen;
