import React from "react";
import { Layout, Divider, Space, Typography, Alert, Carousel } from "antd";

import PublicationDisplayList from "../drafts/publications";
import ProjectDisplayList from "../drafts/projects";
import NewsDisplayList from "../drafts/updates";
import PersonalIntrouction from "../drafts/introduction";
import ProjectList from "../modules/projectList";
import NewProjectDisplayList from "../drafts/newProjects";
import { Link } from "react-router-dom";
import { useMenuState } from "../store/menuState";
import { Link2 } from "lucide-react";
import { LinkOutlined } from "@ant-design/icons";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Homepage: React.FC = () => {
  const { currentPage, setCurrentPage } = useMenuState();
  return (
    <Content id="About">
      {/* <HeaderAnchor></HeaderAnchor> */}
      <br />
      <PersonalIntrouction />
      <Title level={4} id="Updates">
        Updates
      </Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <NewsDisplayList></NewsDisplayList>
      <Title level={4} id="Publications">
        Selected Publications{" "}
        <Text>
        <Link to="/publication" onClick={() => setCurrentPage("Publications")}>
          <LinkOutlined /> [Full List]
        </Link>
        </Text>
      </Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <PublicationDisplayList isSelected />
      <Title level={4} id="Projects">
        Projects
      </Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <NewProjectDisplayList />
    </Content>
  );
};

const HomepageInDom = (
  <div>
    <Homepage />
  </div>
);

export default HomepageInDom;
