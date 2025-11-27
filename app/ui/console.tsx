"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket | undefined;
const socketInitializer = async () => {
  socket = io("https://api.supply-corp.com");
};

interface LogData {
  timestamp: string;
  pageId: number;
  url: string;
  message: string;
  isAlert: boolean;
}

export const ConsoleUI = () => {
  const [logs, setLogs] = useState<LogData[]>([]);

  useEffect(() => {
    socketInitializer();

    if (socket) {
      socket.on("connect", () => {
        console.log("Conectado al servidor de monitoreo.");
      });

      socket.on("dominio_status", (data: LogData) => {
        console.log(data);
        setLogs((prevLogs) => [data, ...prevLogs]);
      });

      socket.on("disconnect", () => {
        console.log("Desconectado del servidor.");
      });
    }

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return (
    <div className="w-full p-2 bg-[#1e1e1e] text-[#d4d4d4] rounded-lg h-[350px] overflow-y-scroll flex flex-col">
      {logs.map((item, i) => (
        <Link
          target="_blank"
          href={item.url}
          key={i}
          className="whitespace-pre-wrap border-b border-b-[#333] py-3 text-sm"
        >
          {item.message}
        </Link>
      ))}
    </div>
  );
};
