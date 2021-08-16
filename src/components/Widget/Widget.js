import React from "react";

export default function Widget() {
  return (
    <div className="widget">
      <iframe
        title="Js Weekly"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FJSWeekly%2F%3Feid%3DARDhDFcLy4z3QXgkC7EKW0ApRA5LAnszHpwhpPlWcFmJVLHoXiTvsbZuqfezUVva5nzqS-j3UIITwvSs&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        style={{ border: "none", overflow: "hidden" }}
      ></iframe>
    </div>
  );
}
