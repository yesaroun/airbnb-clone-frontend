import axios from "axios";
import { QueryFunctionContext } from "@tanstack/react-query";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;

  /** Skeleton 테스트를 위해 5초 지연 */
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return instance
    .get(`rooms/${roomPk}`)
    .then((response) => delay(5000).then(() => response.data));
};

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance
    .get(`rooms/${roomPk}/reviews`)
    .then((response) => response.data);
};

export const getMe = () =>
  instance.get("users/me").then((response) => response.data);

export const logOut = () =>
  instance
    .post(`users/log-out`, null, {
      headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    })
    .then((response) => response.data);

export interface IUsernameLoginVariables {
  username: string;
  password: string;
}
export interface IUsernameLoginSuccess {
  ok: string;
}
export interface IUsernameLoginError {
  error: string;
}

export const usernameLogIn = ({
  username,
  password,
}: IUsernameLoginVariables) =>
  instance.post(
    `users/log-in`,
    { username, password },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    }
  );

export const getAmenities = () =>
  instance.get(`rooms/amenities`).then((response) => response.data);

export const getCategories = () =>
  instance.get(`categories`).then((response) => response.data);

export interface IUploadRoomVariables {
  name: string;
  country: string;
  city: string;
  price: number;
  rooms: number;
  toilets: number;
  description: string;
  address: string;
  pet_friendly: boolean;
  kind: string;
  amenities: number[];
  category: number;
}

export const uploadRoom = (variables: IUploadRoomVariables) =>
  instance
    .post(`rooms/`, variables, {
      headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    })
    .then((response) => response.data);
