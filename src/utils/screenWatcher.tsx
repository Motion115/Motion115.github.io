import { useEffect } from "react";
import useScreenStore from "../store";

const ScreenWatcher: React.FC = () => {
  const setSize = useScreenStore((state) => state.setSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setSize]);

  return null;
};

export default ScreenWatcher;
