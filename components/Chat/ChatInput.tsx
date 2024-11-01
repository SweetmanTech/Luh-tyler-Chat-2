import SubmitButton from "./SubmitButton";
import { useChatProvider } from "@/providers/ChatProvider";
import Suggestions from "./Suggestions";
import { useEffect, useRef } from "react";

const ChatInput: React.FC = () => {
  const { input, handleInputChange, handleSubmit } = useChatProvider();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  // Auto-resize textarea as content changes
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  return (
    <div className="w-full">
      <div className="w-full px-2 z-[10] bg-background">
        <div className="border-gray-700 border-[1px] rounded-md p-2 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="w-full">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask Recoup a question..."
              className="bg-transparent w-full p-2 text-sm !border-none !outline-none rounded-md resize-none min-h-[40px] max-h-[200px] overflow-y-auto"
              aria-label="Chat input"
            />
            <div className="w-full flex justify-end">
              <SubmitButton canSubmit={Boolean(input)} />
            </div>
          </form>
        </div>
      </div>
      <Suggestions />
    </div>
  );
};

export default ChatInput;
