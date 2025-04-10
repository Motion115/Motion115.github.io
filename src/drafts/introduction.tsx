import { Space, Typography, Image, Divider, Layout, Alert } from "antd";
import OuterLink from "../modules/outlinks";
import PersonalInfo from "../modules/info";
import Selfie from "../assets/selfie2.png";
import { createRef, useEffect, useState } from "react";
const { Text, Paragraph, Title } = Typography;

const PersonalIntrouction = () => {
  const [widthPercentage, setWidthPercentage] = useState("60%");
  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidthPercentage(window.innerWidth < 600 ? "100%" : "60%");
    };
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <PersonalInfo
      portrait={Selfie}
      name="Ruishi (Ray) Zou"
      affiliation="University of California, San Diego"
      location="La Jolla, CA, USA"
      googleScholar="https://scholar.google.com/citations?user=fHRnWkUAAAAJ"
      github="https://github.com/Motion115"
      linkedin="https://www.linkedin.com/in/ruzou"
      email="mailto:ruishi.ray.zou@gmail.com"
      orcid="https://orcid.org/0009-0001-3798-6833"
      twitter="https://twitter.com/_ray_zou"
      personalStatement={
        <>
          <Alert
            style={{
              width: widthPercentage,
              padding: "auto",
              margin: "0 auto",
              textAlign: "center",
            }}
            message={
              <Text style={{ fontWeight: "bold" }}>
                I will attend CHI'25 in person! Let's 'CHI'nnect☕👋!{" "}
                <a
                  href="https://motion115.github.io/chi2025papers"
                  target="_blank"
                >
                  Explore CHI'25 papers
                </a>{" "}
                📚 with visual analysis!
              </Text>
            }
            showIcon
          />
          <Paragraph />
          <Alert
            style={{
              width: widthPercentage,
              padding: "auto",
              margin: "0 auto",
              textAlign: "center",
            }}
            type="warning"
            message={
              <Text>
                🌟 I am actively seeking Ph.D. opportunities (Spring/Fall 2026
                cycle). If you see me as a potential fit for your agenda, please
                message me!
              </Text>
            }
          />
          <Paragraph></Paragraph>
          <Paragraph>
            My research interests lie in human-computer interaction (HCI) and
            visualization. I view myself as a system-HCI researcher: I am
            interested in investigating{" "}
            <b>
              how humans interact with
              (user-facing/expert-facing/sociotechnical) systems
            </b>
            . In my past works, I have prototyped, engineered, and evaluated
            systems supporting various cognitive tasks, including
            reading/writing, sensemaking, and decision-making. Through those
            works, I have gathered a broad spectrum of skills and research
            methods -- from training AI models to building interactive systems,
            from quantitative to qualitative research.
          </Paragraph>
          <Paragraph>
            Fun facts about me: 1) before deep diving into new knowledge, I love
            to approach it with first-order intuitions, hence my love for
            narrating insights with visualizations; 2) I usually prefer my
            interface to be direct manipulation, even in the age of chatbots; 3) besides research, I am a
            car/aviation enthusiast: I watch motorsport races and sim race F1/WRC machines.{" "}
          </Paragraph>
          <Paragraph>
            I am now a master's student in Computer Science at UC San Diego.
            Before, I graduated with honors from Tongji University, majoring in
            Computer Science and Technology. I have broad experience in HCI and
            AI topics from research and industry. Previously, I worked closely
            with
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
            />{" "}
            at Ant Group. I hosted (and am now hosting) several undergraduate
            (interest-driven) research projects about HCI at Tongji University
            with support from
            <OuterLink
              link="https://see.tongji.edu.cn/info/1398/11358.htm"
              text="Prof. Chen Ye"
            />
            , resulting in award-winning projects and publications. I am also a
            research assistant at the Human-Centered AI Lab at Northeastern
            University, working on projects advised by
            <OuterLink
              link="https://www.dakuowang.com/"
              text="Prof. Dakuo Wang"
            />{" "}
            and
            <OuterLink
              link="http://www.lacepadilla.com/"
              text="Prof. Lace Padilla"
            />
            . More recently, I have extended my extremities towards more
            system-HCI-related topics, including the domains of programming
            language, social media, and health.
          </Paragraph>
        </>
      }
    ></PersonalInfo>
  );
};

export default PersonalIntrouction;
