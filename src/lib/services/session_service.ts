export class SessionService {
  static async getSocketNumber(): Promise<number> {
    const res = await fetch("api/session", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json(); // assuming your API returns { size: number }
    return data.socketNumber as number;

  }

  static async connect(key: string) {
    const res = await fetch("api/session/connect", {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify({ key: key }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async disconnect(key: string) {
    const res = await fetch("api/session/disconnect", {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify({ key: key }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
