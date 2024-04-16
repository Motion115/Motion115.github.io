import React from "react";
import { Layout, Divider, Space, Typography } from "antd";
import ProjectArchiveList from "../drafts/project_archive";
import PrecenseOnWeb from "../drafts/web_presence";
import WebLinks from "../drafts/links";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Misc: React.FC = () => (
  <Content id="Misc">
    <Title level={4}>Selected Archive of Course Projects</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <ProjectArchiveList></ProjectArchiveList>

    <Title level={4}>Presence on the web</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <PrecenseOnWeb></PrecenseOnWeb>

    <Title level={4}>Information Gallery</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <WebLinks></WebLinks>
  </Content>
);

const MiscInDom = (
  <div>
    <Misc />
  </div>
);

export default MiscInDom;
