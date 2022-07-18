import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { ModalProvider } from "react-modal-hook";
import { AppProvider } from "./appContext";

ReactDOM.render(

    <AppProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AppProvider>

  document.getElementById("root")
);
reportWebVitals();
