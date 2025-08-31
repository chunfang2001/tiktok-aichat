type AssistantChatProps = {
  message: string;
};

export function AssistantChat({ message }: AssistantChatProps) {
    return <div className="flex justify-start">
      <div className="w-fit py-3  max-w-[600px]">{message}</div>
    </div>
}