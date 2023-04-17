import { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateMessage } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import {ReactComponent as Next} from "../utils/img/next.svg";

const Livechat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    console.log("Livechat");
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateMessage(),
        })
      );
    }, 2000);

    console.log(messages);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        {messages.map((message) => {
          return <ChatMessage name={message.name} message={message.message} />;
        })}
      </div>
      <div>
        <input
          className="p-1 w-10/12 rounded"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="p-1"
          onClick={() => {
            dispatch(
              addMessage({
                name: "Vanshika",
                message: liveMessage,
              })
            );
          }}
        >
          <Next/>
        </button>
      </div>
    </div>
  );
};

export default Livechat;
