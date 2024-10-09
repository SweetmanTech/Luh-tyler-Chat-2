import { useChatProvider } from "@/providers/ChatProvider";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import Thinking from "./Thinking";

const Chat = () => {
  const { messages, pending } = useChatProvider();

  return (
    <div
      className={`overflow-hidden ${messages.length ? "w-screen px-4 pt-20 mb-[150px] overflow-y-auto h-[calc(100vh-150px)]" : "flex flex-col items-center justify-center h-screen mx-auto max-w-3xl"}`}
    >
      <p className="font-sans font-semibold text-2xl mb-2 text-center">
        {`How is Luh Tyler's 3D Game Performing?`}
      </p>
      <ChatInput />
      <Messages />
      {pending && <Thinking />}
    </div>
  );
};

export default Chat;
