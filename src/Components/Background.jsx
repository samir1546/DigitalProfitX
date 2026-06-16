import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,black_1px,transparent_1px)] bg-[size:70px_100%] opacity-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:100%_70px] opacity-10" />
      </div>
    </div>
  );
};

export default Background;
