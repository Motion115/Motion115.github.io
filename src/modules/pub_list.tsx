import React, { useState } from "react";

import { Space, Typography, Tag } from "antd";
const { Text } = Typography;

interface PubListSpec {
  itemList: JSX.Element[]
}

const PubList: React.FC<PubListSpec> = (props) => {
  const tagsData: string[] = [];
  props.itemList.forEach((pub) => {
    if (!tagsData.includes(pub.props.venueType)) {
      tagsData.push(pub.props.venueType);
    }
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [displayedPub, setDisplayedPub] =
    useState<JSX.Element[]>(props.itemList);
    
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    // console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
    if (nextSelectedTags.length === 0) {
      setDisplayedPub(props.itemList);
    } else {
      let filteredPub: JSX.Element[] = []
      props.itemList.forEach((pub) => {
        // console.log(pub.props.venueType)
        if (nextSelectedTags.includes(pub.props.venueType)) {
          filteredPub.push(pub);
        }
      })
      setDisplayedPub(filteredPub);
      // console.log(filteredPub)
    }
  };

  const isShowSelector = () => {
    if (tagsData.length > 1) {
      return (
        <Space size={[0, 8]} wrap>
          {tagsData.map((tag) => (
            <Tag.CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              <Text>{tag}</Text>
            </Tag.CheckableTag>
          ))}
        </Space>
      );
    }
  }

  return (
    <div>
      <Space direction="vertical">
        {isShowSelector()}
        
        {displayedPub}
      </Space>
    </div>
  );
};

export default PubList;
