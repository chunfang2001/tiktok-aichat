import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SessionService } from "@/lib/services/session_service";
import { useEffect, useState } from "react";

export default function SessionPage() {
  const [isConnect, setIsConnect] = useState(false);
  const [socketNumber, setSocketNumber] = useState(0);
  const [key, setKey] = useState<string>("");

  const connectSocket = async () => {
    await SessionService.connect(key);
    setIsConnect(true);
    await getSocketNumber()
  };

  const disconnectSocket = async () => {
    await SessionService.disconnect(key);
    setIsConnect(false)
    await getSocketNumber()
  };

  const getSocketNumber = async () => {
    const s = await SessionService.getSocketNumber()
    setSocketNumber(s)
  }

  useEffect(() => {
    getSocketNumber()
    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <div className="max-w-[800px] flex flex-col">
      <div>Total Socket Number: {socketNumber}</div>
      {isConnect && <div>Connected</div>}
      <div className="h-8"></div>
      <div className="flex justify-center items-center gap-2">
        <Input
          type="text"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
        {!isConnect && <Button onClick={connectSocket}>connect</Button>}
        {isConnect && <Button onClick={disconnectSocket}>disconnect</Button>}
      </div>
    </div>
  );
}
