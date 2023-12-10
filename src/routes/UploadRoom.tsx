import React from "react";
import ProtectedPage from "../components/ProtectedPage";
import useHostOnlyPage from "../components/HostOnlyPage";

const UploadRoom = () => {
  useHostOnlyPage();
  return (
    <ProtectedPage>
      <h1>Upload room</h1>
    </ProtectedPage>
  );
};

export default UploadRoom;
