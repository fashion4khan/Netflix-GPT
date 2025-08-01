import React from "react";
import Body from "./components/body";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
        <Body />
    </Provider>
  );
}

export default App;
