import React from "react";
import { Icon } from "antd";

const Spinner = () => (
  <div style={{position:"fixed",display:"inline-block",top:"50%",left:"50%",transform: "translate(-50%,-50%)"}}>
    <Icon type="github" style={{ fontSize: 50 }} spin />
  </div>
);
 export default Spinner