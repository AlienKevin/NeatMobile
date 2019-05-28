import React from "react";
import ReactDOM from "react-dom";
import "mathlive/dist/mathlive.core.css";
import "mathlive/dist/mathlive.css";
import MathLive from "mathlive";
import "./styles.css";

function App() {
  return <div id="mathField" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

MathLive.makeMathField(document.getElementById("mathField"));
