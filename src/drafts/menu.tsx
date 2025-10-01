import type { MenuProps } from "antd";


const baseServerAddress = "";

const items: MenuProps["items"] = [
  {
    label: <a href={baseServerAddress + "#"}>Home</a>,
    key: "Home",
  },
  {
    label: <a href={baseServerAddress + "#publication"}>Publication</a>,
    key: "Publications",
  },
  {
    label: <a href={baseServerAddress + "#CV"}>CV</a>,
    key: "CV",
  },
  {
    label: <a href={baseServerAddress + "#misc"}>Misc</a>,
    key: "Misc",
  },
];

export default items;