import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "../api";

const RoomDetail = () => {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["rooms", roomPk],
    queryFn: getRoom,
  });
  return <div>hi</div>;
};

export default RoomDetail;
