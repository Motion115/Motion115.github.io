import React from "react";
import { Layout, Divider, Space, Typography, Carousel, Alert } from "antd";
import ProjectArchiveList from "../drafts/deprecated/project_archive";
import ProjectDisplayList from "../drafts/projects";
import PrecenseOnWeb from "../drafts/deprecated/web_presence";
import WebLinks from "../drafts/links";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Misc: React.FC = () => (
  <Content id="Misc">
    <Title level={4} id="Projects">
      Selected Projects
    </Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <ProjectDisplayList></ProjectDisplayList>

    <Title level={4}>Selected Archive of Course Projects</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <ProjectArchiveList></ProjectArchiveList>

    {/* <Title level={4}>Presence on the web</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <PrecenseOnWeb></PrecenseOnWeb> */}

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
