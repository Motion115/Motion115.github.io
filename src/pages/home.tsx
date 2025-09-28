import React from "react";
import { Layout, Divider, Space, Typography, Alert, Carousel } from "antd";

import PublicationDisplayList from "../drafts/publications";
import ProjectDisplayList from "../drafts/projects";
import NewsDisplayList from "../drafts/updates";
import PersonalIntrouction from "../drafts/introduction";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Homepage: React.FC = () => (
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
      Publications
    </Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <PublicationDisplayList></PublicationDisplayList>
    <Title level={4} id="Conference Misc">
      Conference Misc
    </Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <Carousel>
      <Alert
        style={{
          // width: widthPercentage,
          padding: "auto",
          margin: "0 auto",
          textAlign: "center",
        }}
        message={
          <Text style={{ fontWeight: "bold" }}>
            🔍 Attending CHI'25—let's 'CHI'nnect ☕👋! Presenting my
            first-authored papers at the{" "}
            <a
              href="https://programs.sigchi.org/chi/2025/program/content/188659"
              target="_blank"
              rel="noreferrer"
            >
              Make it visible
            </a>{" "}
            and the{" "}
            <a
              href="https://programs.sigchi.org/chi/2025/program/content/194323"
              target="_blank"
              rel="noreferrer"
            >
              LBW: Human-AI Collaboration
            </a>{" "}
            sessions 🎉. Say hi if you spot me! <br />
            📚{" "}
            <a
              href="https://motion115.github.io/paper-constellations"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Explore CHI'25 papers
            </a>{" "}
            using visual analysis!
          </Text>
        }
      />
    </Carousel>
  </Content>
);

const HomepageInDom = (
  <div>
    <Homepage />
  </div>
);

export default HomepageInDom;
