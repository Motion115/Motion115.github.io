import { Space, Typography, Image, Divider, Layout } from "antd";

import PersonalInfo from "../modules/info";
import Selfie from "../assets/selfie1.jpg";
const { Text, Paragraph, Title } = Typography;

const OuterLink = (props: { text: string; link: string }) => {
  return (
    <>
      {" "}
      <a href={props.link} target="_blank" rel="noreferrer noopener">
        {props.text}
      </a>
    </>
  );
};

const PersonalIntrouction = () => {
  return (
    <PersonalInfo
      portrait={Selfie}
      name="Ruishi Zou"
      affiliation="Tongji University"
      location="Shanghai, China"
      googleScholar="https://scholar.google.com/citations?user=RPQrY5AAAAAJ"
      github="https://github.com/Motion115"
      linkedin="https://www.linkedin.com/in/motion115"
      email="mailto:ruishi.ray.zou@gmail.com"
      orcid="https://orcid.org/0009-0001-3798-6833"
      twitter="https://twitter.com/_ray_zou"
      personalStatement={
        <>
          <Paragraph>
            My research interests broadly lie in human-computer interaction
            (HCI), specifically <b>human-AI interaction</b>. I am interested in
            engineering systems and toolkits that enhance human (lay users and
            domain experts) capabilities through interacting with AI
            technologies (NLP, CV, etc.). I aspire to approach human-AI
            interaction by exploring the design of information-based interfaces
            powered by AI's knowledge representation capabilities. I hope to
            make technical and empirical contributions to fields such as{" "}
            <b>visualization</b> and{" "}
            <b>user interface software and technology</b>.
          </Paragraph>
          <Paragraph>
            I am now a senior student pursuing a bachelor's degree in Computer
            Science at Tongji University and an incoming master's student
            majoring in Computer Science at UC San Deigo. I have previous
            experience in both research and industry with topics related to HCI
            + AI research. Previously, I worked closely with
            <OuterLink
              link="https://tjdi.tongji.edu.cn/TeacherDetail.do?id=5056&lang=en"
              text="Prof. Qing Chen"
            />{" "}
            at the
            <OuterLink
              link="https://idvxlab.com/"
              text="Intelligent Big Data Visualization Lab (iDVx Lab)"
            />{" "}
            and interned with the
            <OuterLink
              link="https://ava.antv.antgroup.com/en/"
              text="AVA team"
            />
            at Ant Group. I have also hosted several undergraduate research
            projects about HCI at Tongji University with support from
            <OuterLink
              link="https://see.tongji.edu.cn/info/1398/11358.htm"
              text="Prof. Chen Ye"
            />{" "}
            . More recently, I am a research assistant at the Human-Centered AI
            Lab at Northeastern University, working on projects advised by
            <OuterLink
              link="https://www.dakuowang.com/"
              text="Prof. Dakuo Wang"
            />{" "}
            and
            <OuterLink
              link="http://www.lacepadilla.com/"
              text="Prof. Lace Padilla"
            />
            .
          </Paragraph>
          <Paragraph>
            Looking forward, I hope to become an HCI researcher. I will be
            actively seeking a Ph.D. position starting Fall of 2025 and beyond.
            {" "}
            <b>
              If you see me as a potential fit to your agenda, please feel free
              to drop me a message
            </b>
            !
          </Paragraph>
        </>
      }
    ></PersonalInfo>
  );
};

export default PersonalIntrouction;
