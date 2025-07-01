import React from "react";
import "./starBorder.css";

type StarBorderProps = {
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: string;
  thickness?: number;
};

const StarBorder = ({
  className = "",
  color = "#fffbe6",
  speed = "3s",
  thickness = 6,
  children,
}: StarBorderProps) => {
  return (
    <div
      className={`star-border-wrapper ${className}`}
      style={{ padding: thickness }}
    >
      <div
        className="star-border"
        style={{
          "--star-border-color": color,
          "--star-border-speed": speed,
        } as React.CSSProperties}
      />
      <div className="star-border-content">{children}</div>
    </div>
  );
};

export default StarBorder;
