import React from "react";
import { WebView } from "react-native-webview";

function App(): JSX.Element {
  return (
    <WebView source={{ uri: "https://stackoverflow.com"}} style={{ flex: 1 }} />
  );
}

export default App;
