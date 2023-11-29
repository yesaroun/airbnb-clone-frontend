import axios from "axios";
import { IRoom } from "./routes/Home";
import { QueryFunctionContext } from "@tanstack/react-query";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const getRooms = (): Promise<IRoom[]> =>
  instance.get<IRoom[]>("rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
};
