import { useEffect } from "react";

const Top = () => {
  useEffect(() => {
    window.location.href = "/top/week";
  }, []);
};

export default Top;
