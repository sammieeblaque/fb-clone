import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

export default function SidebarRow({ title, src, Icon }) {
  return (
    <div className="sidebar-row">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}
