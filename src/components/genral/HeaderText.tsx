import React from "react";

function HeaderText(props: any) {
  return (
    <p className=" text-green-prim text-2xl font-extrabold font-mono">
        {props.text} <span className="text-gray-300">()</span>
      </p>
  );
}

export default HeaderText;
