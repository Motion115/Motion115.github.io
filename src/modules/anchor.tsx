import { Anchor, Typography } from "antd";
const { Text, Title } = Typography;

const HeaderAnchor: React.FC = () => (
  <>
    <div>
      <Anchor
      affix={false}
        style={{ background: "#ffffff" }}
        items={[
          {
            key: "About",
            href: "#About",
            title: <div style={{ fontSize: "18px" }}>About</div>,
          },
          {
            key: "Updates",
            href: "#Updates",
            title: <div style={{ fontSize: "18px" }}>Updates</div>,
          },
          {
            key: "Publications",
            href: "#Publications",
            title: <div style={{ fontSize: "18px" }}>Publications</div>,
          },
          {
            key: "Projects",
            href: "#Projects",
            title: <div style={{ fontSize: "18px" }}>Projects</div>,
          }
        ]}
      />
    </div>
  </>
);

export default HeaderAnchor;
