import {ChakraProvider} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}
      >
        <RouterProvider router={router}/>
      </DevSupport>
    </ChakraProvider>
  </React.StrictMode>
);
