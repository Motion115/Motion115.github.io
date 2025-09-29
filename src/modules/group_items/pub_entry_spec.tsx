import React from "react";
import { useState } from "react";
import {
  FilePdfOutlined,
  SearchOutlined,
  GithubOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  TrophyOutlined,
  InfoCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { useMeasure } from "react-use";
import { Image, Space, Typography, Tag, Button, Divider, Flex } from "antd";
import LinkTag from "./link_tag";
import colorProjection from "../constanats/constants";
import "../constanats/constants";
import { Link } from "react-router-dom";
import { colorBg, colorPrimary } from "../../style/globalStyle";
import useScreenStore from "../../store";
const { Text } = Typography;

interface PubEntrySpec {
  paperTitle: string;
  authors: JSX.Element;
  venueType:
    | "Conference"
    | "Journal"
    | "Workshop"
    | "arXiv"
    | "Pending"
    | "Other"
    | "Competition"
    | "Course"
    | "Research";
  venueShort?: string;
  venueFull: string;
  affiliation?: string;
  awardName?: string;
  awardLink?: string;
  paperLink?: string;
  preprintLink?: string;
  exploreLink?: string;
  codeLink?: string;
  videoLink?: string;
  presentationLink?: string;
  materialLink?: string;
  abstractContent?: JSX.Element;
  teaser?: string;
  teaserInteractive?: string
}

const PubEntry: React.FC<PubEntrySpec> = (props: PubEntrySpec) => {
  const { shouldWrap } = useScreenStore();
  const [abstractContentVisible, setAbstractContentVisible] =
    useState<boolean>(false);

  const handleClick = () => {
    setAbstractContentVisible(!abstractContentVisible);
  };

  const extraContentController = () => {
    if (
      props.paperLink ||
      props.preprintLink ||
      props.exploreLink ||
      props.codeLink ||
      props.videoLink ||
      props.presentationLink ||
      props.materialLink ||
      props.abstractContent
    )
      return (
        <>
          <Space size={[0, 8]} wrap>
            <LinkTag
              icon={<FilePdfOutlined />}
              link={props.paperLink ? props.paperLink : ""}
              text="Paper"
            ></LinkTag>
            <LinkTag
              icon={<PaperClipOutlined />}
              link={props.preprintLink ? props.preprintLink : ""}
              text="Preprint"
            ></LinkTag>
            <LinkTag
              icon={<SearchOutlined />}
              link={props.exploreLink ? props.exploreLink : ""}
              text="Explore"
            ></LinkTag>
            <LinkTag
              icon={<GithubOutlined />}
              link={props.codeLink ? props.codeLink : ""}
              text="Code"
            ></LinkTag>
            <LinkTag
              icon={<VideoCameraOutlined />}
              link={props.videoLink ? props.videoLink : ""}
              text="Video"
            ></LinkTag>
            <LinkTag
              icon={<AudioOutlined />}
              link={props.presentationLink ? props.presentationLink : ""}
              text="Presentation"
            ></LinkTag>
            <LinkTag
              icon={<InfoCircleOutlined />}
              link={props.materialLink ? props.materialLink : ""}
              text="Material"
            ></LinkTag>
            {props.abstractContent ? (
              <Button shape="circle" size="small" onClick={handleClick}>
                {abstractContentVisible ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )}
              </Button>
            ) : null}
          </Space>
          {abstractContentVisible ? <div>{props.abstractContent}</div> : null}
        </>
      );
    else return null;
  };

  const [hovered, setHovered] = useState(false);
  const hoverStyle = {
    backgroundColor: hovered ? `${colorPrimary}0A` : colorBg,
    transition: "background-color 0.2s ease",
  };

  const [flexboxRef, { x, y, width, height, top, right, bottom, left }] =
    useMeasure<HTMLElement>();

  return (
    <Flex
      style={{
        ...hoverStyle,
        height: "100%",
      }}
      gap="middle"
      wrap={shouldWrap}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={flexboxRef}
    >
      {props.teaser && (
        <div
          style={{
            maxWidth: "200px",
            // maxHeight: height,
            maxHeight: height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow:
              hovered && props.teaserInteractive
                ? "0 0 10px rgba(0, 0, 0, 0.1)"
                : undefined,
          }}
        >
          <Image
            src={
              hovered && props.teaserInteractive
                ? props.teaserInteractive
                : props.teaser
            }
            style={{
              maxWidth: "95%",
              maxHeight: "95%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            preview={false}
          />
        </div>
      )}
      <div>
        <Text strong={true}>{props.paperTitle}</Text>
        <br />
        {props.affiliation ? (
          <>
            <Text italic={true}>{props.affiliation}</Text>
            <Divider type="vertical" />
          </>
        ) : null}
        <Text>{props.authors}</Text>
        <br />
        <Tag color={colorProjection[props.venueType]}>
          <i>
            <b>{props.venueShort ? props.venueShort : props.venueType}</b>
          </i>
        </Tag>
        <Text italic={true}>{props.venueFull}</Text>
        <br />
        {props.awardName ? (
          <>
            <Text style={{ color: "#B31B1B" }}>
              <TrophyOutlined />{" "}
              {props.awardLink ? (
                <Link
                  to={props.awardLink}
                  style={{ color: "#B31B1B" }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {props.awardName}
                </Link>
              ) : (
                props.awardName
              )}
            </Text>
            <br />
          </>
        ) : null}

        {extraContentController()}
      </div>
    </Flex>
  );
};

export default PubEntry;
