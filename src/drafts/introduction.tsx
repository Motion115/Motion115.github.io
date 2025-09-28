import { Typography, Alert, Divider } from "antd";
import OuterLink from "../modules/outlinks";
import PersonalInfo from "../modules/info";
import Selfie from "@/assets/selfie2.png";
import { useEffect, useState } from "react";
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
              fontWeight: "bold",
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
            interested in exploring{" "}
            <b>
              how to build intelligent interfaces/tools to support cognitive
              tasks
            </b>
            . In my past works, I have prototyped, engineered, and evaluated
            systems for reading/writing, sensemaking, and decision-making.
            Through those works, I have gathered a broad spectrum of skills and
            research methods -- from training AI models to building interactive
            systems, from quantitative to qualitative research.
          </Paragraph>
        </>
      }
      morePersonalStatement={
        <>
          <Paragraph>
            I am now a master's student in Computer Science at UC San Diego.
            Before, I graduated with honors from Tongji University, majoring in
            Computer Science and Technology. I have broad experience in HCI and
            applied AI topics from research and industry. I strive to build
            long-term, collaborative relationships with my mentors, learning
            from their expertise while contributing my own capability to shared
            goals:
            <ul>
              <li>
                {" "}
                I worked closely with{" "}
                <OuterLink
                  link="https://tjdi.tongji.edu.cn/TeacherDetail.do?id=5056&lang=en"
                  text="Prof. Qing Chen"
                />{" "}
                at the
                <OuterLink
                  link="https://idvxlab.com/"
                  text="Intelligent Big Data Visualization Lab (iDVx Lab)"
                />
                , during which I co-authored an IEEE TVCG paper and was granted
                the opportunity to intern at the
                <OuterLink
                  link="https://ava.antv.antgroup.com/en/"
                  text="AVA team"
                />{" "}
                from Ant Group.{" "}
              </li>
              <li>
                {" "}
                Supported by{" "}
                <OuterLink
                  link="https://see.tongji.edu.cn/info/1398/11358.htm"
                  text="Prof. Chen Ye"
                />
                , I run (and am still running) an HCI interest group at Tongji
                University. Using my knowledge, I tutor and collaborate with
                undergraduate students on interest-driven research projects on
                HCI. Such efforts have resulted in award-winning publications at
                the ACM CHI conference.
              </li>
              <li>
                I have also been a remote visiting student at the{" "}
                <OuterLink
                  link="https://hailab.io/"
                  text="Human-Centered AI Lab"
                />{" "}
                at Northeastern University, advised by
                <OuterLink
                  link="https://www.dakuowang.com/"
                  text="Prof. Dakuo Wang"
                />
                ,{" "}
                <OuterLink
                  link="https://www.bingshengyao.com/"
                  text="Dr. Bingsheng (Arthur) Yao"
                />
                , and
                <OuterLink
                  link="http://www.lacepadilla.com/"
                  text="Prof. Lace Padilla"
                />
                . I worked on projects spanning from HCI to NLP, with papers
                accepted or targeting top conferences such as ACL, NAACL, VIS,
                and CHI.
              </li>
              <li>
                I am currently visiting the{" "}
                <OuterLink link="https://sea-lab.space/" text="SEA Lab" /> at Columbia University
                advised by{" "}
                <OuterLink
                  link="https://orsonxu.com/"
                  text="Prof. Xuhai (Orson) Xu"
                />, working on projects at the intersection of HCI,
                AI, and health.
              </li>
            </ul>
            <Paragraph>
              Fun facts: 1) before deep diving into new knowledge, I love to
              approach it with first-order intuitions, hence my love for
              narrating insights with visualizations; 2) I usually prefer my
              interface to be direct manipulation, even in the age of chatbots;
              3) besides research, I am a car/aviation enthusiast: I watch
              motorsport races and sim race F1/WRC machines.{" "}
            </Paragraph>
            A side note for this summer: please feel free to contact me if you
            will be in the New York Metropolitan Area! Love to chat with like-minded people about research and life!
          </Paragraph>
        </>
      }
    ></PersonalInfo>
  );
};

export default PersonalIntrouction;
