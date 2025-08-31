import { API_ROUTE } from "../constant";

export class ChatService {
  static chat = async (question: string):  Promise<string> => {
    const res = await fetch(`${API_ROUTE}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: question }),
    });

    const data : {
      message: string
    } = await res.json();

    return data.message;
  };
}
