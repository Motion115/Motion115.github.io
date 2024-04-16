import { Typography } from "antd";
import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
const { Title, Paragraph, Text, Link } = Typography;

const updatesList = [
  <TimeEntry
    startTime="March 30, 2024"
    content={
      <>
        One paper <b>Chart2Vec</b> was accepted to IEEE TVCG!
      </>
    }
  />,
  <TimeEntry
    startTime="March 14, 2024"
    content={
      <>
        One paper about <b>In-Context Sampling for LLMs</b> was accepted to
        NAACL 2024 Findings!
      </>
    }
  />,
  <TimeEntry
    startTime="Oct 29, 2023"
    endTime="Nov 1, 2023"
    content={
      <>
        Attended{" "}
        <a
          href="https://uist.acm.org/2023/"
          target="blank"
          rel="noreferrer noopener"
        >
          UIST 23
        </a>{" "}
        in person and reported our work at{" "}
        <a
          href="https://programs.sigchi.org/uist/2023/program/content/127396"
          target="blank"
          rel="noreferrer noopener"
        >
          Poster Session B
        </a>
        . (San Francisco, CA, USA)
      </>
    }
  />,
  <TimeEntry
    startTime="Oct 20, 2023"
    endTime="Oct 22, 2023"
    content={
      <>
        Received Third Price in{" "}
        <a
          href="https://mp.weixin.qq.com/s/SAuI2_mpkTafEXgbB3l2Dg"
          target="_blank"
          rel="noreferrer noopener"
        >
          C4-HCI 2023 finals
        </a>
        . (Hangzhou, China)
      </>
    }
  />,
  <TimeEntry
    startTime="Aug 26, 2023"
    content={
      <>
        Met new friends at training session for{" "}
        <a
          href="http://hci.oppo.com/EventDynamics/info.aspx?itemid=74091"
          target="_blank"
          rel="noreferrer noopener"
        >
          C4-HCI 2023
        </a>{" "}
        finalists. (Shenzhen, China)
      </>
    }
  />,
  <TimeEntry
    startTime="Aug 17, 2023"
    content={
      <>
        One extended abstract (<b>iTutor</b>) has been accepted to UIST 2023
        poster track!
      </>
    }
  />,
  <TimeEntry
    startTime="Dec 06, 2022"
    content={
      <>
        <b>Forest Orchestra</b> project won the "Award in Creativity" in{" "}
        <a
          href="http://hci.oppo.com/EventDynamics/info.aspx?itemid=37455"
          target="_blank"
          rel="noreferrer noopener"
        >
          C4-HCI 2022
        </a>
        !
      </>
    }
  />,
];

const NewsDisplayList = () => {
  return <TimedPubList itemList={updatesList} displayLength={2}/>;
};

export default NewsDisplayList;
