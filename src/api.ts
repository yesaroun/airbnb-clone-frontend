import axios from "axios";
import { QueryFunctionContext } from "@tanstack/react-query";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;

  // Skeleton 테스트를 위해 5초 지연
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return instance
    .get(`rooms/${roomPk}`)
    .then((response) => delay(5000).then(() => response.data));
};
