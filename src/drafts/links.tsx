import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
import { LinkOutlined } from "@ant-design/icons";

const webLink = [
  <TimeEntry
    content={
      <a
        href="https://shellywhen.github.io/misc/advice/paper-polish"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Submission Checklist
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://hci.prof/blog/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Prof. Chen's Blog
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://web.archive.org/web/20221205110506/https://antv.vision/en/docs/specification/language/palette/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Expressive Color Schema (Archived Ver.)
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://colorbrewer2.org/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Visualization Color Palette
      </a>
    }
  />,
  <TimeEntry
    content={
      <a href="https://lawsofux.com/" target="_blank" rel="noreferrer noopener">
        <LinkOutlined /> Laws of UX
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://www.asimovinstitute.org/neural-network-zoo/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Neural Network Zoo (2016)
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://zhuanlan.zhihu.com/p/90281637"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Git Commit Messages Guide (Chinese Ver.)
      </a>
    }
  />,
];

const WebLinks = () => {
  return <TimedPubList itemList={webLink} displayLength={10} />;
};

export default WebLinks;
