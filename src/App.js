import React from "react";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import styles from "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
