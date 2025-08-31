type UserChatProps = {
  message: string;
};

export function UserChat({ message }: UserChatProps) {
  return (
    <div className="flex justify-end my-1">
      <div className="bg-neutral-700 w-fit py-3 px-4 rounded-xl max-w-[500px]">{message}</div>
    </div>
  );
}
