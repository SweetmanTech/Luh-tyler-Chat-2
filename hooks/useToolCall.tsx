import { useChatProvider } from "@/providers/ChatProvider";
import { Message } from "ai";
import { useEffect, useState } from "react";

const useToolCall = (message: Message) => {
  const [loading, setLoading] = useState(true);
  const { finalCallback } = useChatProvider();

  useEffect(() => {
    const init = async () => {
      const response = await fetch(`/api/tool_call`, {
        method: "POST",
        body: JSON.stringify({
          context,
          question,
        }),
      });
      const data = await response.json();

      finalCallback({
        role: "assistant",
        content: data.answer,
        id: "",
      });
      setLoading(false);
    };

    const isAssistant = message.role === "assistant";
    const question =
      message?.toolInvocations?.[0].state === "result"
        ? message.toolInvocations[0].result?.question
        : "";
    const context =
      message?.toolInvocations?.[0].state === "result"
        ? message.toolInvocations[0].result?.context
        : "";
    if (!question || !context || !isAssistant) {
      setLoading(false);
      return;
    }
    init();
  }, [message]);

  return {
    loading,
  };
};

export default useToolCall;
