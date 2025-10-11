import React from "react";
import { Layout, Divider, Space, Typography } from "antd";
import ProjectArchiveList from "../drafts/deprecated/project_archive";
import ProjectDisplayList from "../drafts/projects";
import WebLinks from "../drafts/links";
import PublicationDisplayList from "../drafts/publications";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Publication: React.FC = () => (
  <Content id="Publications">
    <Title level={4} id="Publications">
      Publications
    </Title>
    <PublicationDisplayList isSelected={false} />
  </Content>
);

const PublicationInDom = (
  <div>
    <Publication />
  </div>
);

export default PublicationInDom;
