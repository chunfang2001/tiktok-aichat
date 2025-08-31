import { AssistantChat } from "@/components/widget/chat/assistant-chat";
import { UserChat } from "@/components/widget/chat/user-chat";
import { RoleEnum } from "@/lib/constant";
import { ChatService } from "@/lib/services/chat_service";
import { Divide, SendHorizontal } from "lucide-react";
import { useState } from "react";

const messagesInitList: Chat[] = [
  { role: "assistant", message: "Hi, how can I help you"},
];

export default function ChatPage() {
  const [busy, setBusy] = useState(false);
  const [question, setQuestion] = useState("");
  const [messageList, setMessageList] = useState(messagesInitList);

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let questionTemp: string = question;
    let chat: Chat = {role: RoleEnum.User, message: question};
    setMessageList([...messageList, chat]);
    setQuestion("")
    
    const answer: string = await ChatService.chat(questionTemp);

    setMessageList((prev) => [...prev, {role: RoleEnum.Assistant, message: answer}]);    
  };

  return (
    <section className="px-4">
      <div className="w-full flex justify-center">
        <div className="max-w-[800px] w-full">
          {messageList.map((message) => {
            if (message.role === RoleEnum.Assistant){
              return <AssistantChat message={message.message}></AssistantChat>
            }else if (message.role === RoleEnum.User){
              return <UserChat message={message.message}></UserChat>
            }
            return <></>;
          })}
          <form
            onSubmit={submit}
            className="fixed bottom-10 border border-gray-600 max-w-[800px] w-[95%] rounded-2xl py-3 px-4 bg-neutral-900"
          >
            <div className="px-2 flex justify-between gap-1">
              <input
                type="text"
                value={question}
                className="w-full outline-0"
                placeholder="Ask something"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setQuestion(e.target.value)
                }
              ></input>
              <button
                type="submit"
                className="p-1 hover:bg-neutral-500 hover:rounded-2xl cursor-pointer"
              >
                <SendHorizontal />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
