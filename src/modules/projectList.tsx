import React, { useState } from "react";

import { Space, Typography, Tag, Flex } from "antd";
import useScreenStore from "../store";
const { Text } = Typography;

interface ProjectListSpec {
  itemList: JSX.Element[];
}

const ProjectList: React.FC<ProjectListSpec> = (props) => {
  const [displayedPub, setDisplayedPub] = useState<JSX.Element[]>(
    props.itemList
  );

  const { shouldWrap } = useScreenStore();

  const style = shouldWrap ? { flex: "1 1 100%" } : { flex: "0 1 48%" };

  return (
    <div>
      <Flex gap="middle" wrap>
        {displayedPub.map((el, idx) => (
          <div
            key={idx}
            style={style}
          >
            {el}
          </div>
        ))}
      </Flex>
    </div>
  );
};


export default ProjectList;
