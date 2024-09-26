import { Typography } from "antd";
import PubList from "../modules/pub_list";
import PubEntry from "../modules/group_items/pub_entry_spec";

const { Title, Paragraph, Text, Link } = Typography;

const publicationList = [
  <PubEntry
    paperTitle="Designing and Evaluating Sampling Strategies for Multiple-Forecast Visualization (MFV)"
    authors={
      <>
        <b>Ruishi Zou</b>, Siyi Wu, Bingsheng Yao, Dakuo Wang, Lace Padilla
      </>
    }
    venueType="Pending"
    venueShort="TVCG"
    venueFull="(Under Review) IEEE Transactions on Visualization and Computer Graphics"
    preprintLink=""
    paperLink=""
  />,
  <PubEntry
    paperTitle="More Samples or More Prompt Inputs? Exploring Effective In-Context Sampling for LLM Few-Shot Prompt Engineering"
    authors={
      <>
        Bingsheng Yao, Guiming Chen, <b>Ruishi Zou</b>, Yuxuan Lu, Jiachen Li,
        Shao Zhang, Sijia Liu, James Hendler, Dakuo Wang
      </>
    }
    venueType="Conference"
    venueShort="NAACL"
    venueFull="Findings of the Association for Computational Linguistics: NAACL 2024"
    preprintLink="https://arxiv.org/abs/2311.09782"
    paperLink="https://aclanthology.org/2024.findings-naacl.115/"
  />,
  <PubEntry
    paperTitle="Chart2Vec: A Universal Embedding of Context-Aware Visualizations"
    authors={
      <>
        Qing Chen, Ying Chen, <b>Ruishi Zou</b>, Wei Shuai, Yi Guo, Jiazhe Wang,
        Nan Cao
      </>
    }
    venueType="Journal"
    venueShort="TVCG"
    venueFull="IEEE Transactions on Visualization and Computer Graphics (2024)"
    paperLink="https://doi.org/10.1109/TVCG.2024.3383089"
    preprintLink="https://arxiv.org/abs/2306.08304"
    exploreLink="http://chart2vec.idvxlab.com/"
    codeLink="https://github.com/idvxlab/chart2vec"
  />,
  <PubEntry
    paperTitle="iTutor: A Generative Tutorial System for Teaching the Elders to Use
          Smartphone Applications"
    authors={
      <>
        <b>Ruishi Zou</b>, Zi Ye, Chen Ye
      </>
    }
    venueType="Conference"
    venueShort="UIST"
    venueFull="Adjunct Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology (UIST 2023 Posters)"
    paperLink="https://doi.org/10.1145/3586182.3616663"
    exploreLink="https://motion115.github.io/iTutor"
    codeLink="https://github.com/Motion115/iTutor"
    awardName="(iTutor's related project) Third Prize in China Collegiate Computing Contest - HCI Innovation Competition 2023 (top 3%)"
  />,
];

const PublicationDisplayList = () => {
  return <PubList itemList={publicationList} />;
};

export default PublicationDisplayList;