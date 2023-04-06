import React from "react";
import StyleSheet from "./StyleSheet";
import InlineStyling from "./InlineStyling";
import "./CssStyleModule.css"
import Style from "./CssStyle.module.css"

const StylingAndCssBasics = () => {
  return (
    <div>
      <StyleSheet primary={true} />
      <InlineStyling />
      <h3 className="error">Error</h3>
      <h3 className={Style.success}>Success</h3>
    </div>
  )
};

export default StylingAndCssBasics;
