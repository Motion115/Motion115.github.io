import React, { useState } from "react";
import { Affix } from "antd";
import type { MenuProps } from "antd";
import { Menu, Alert, Modal } from "antd";
import items from "../drafts/menu";
import { useMenuState } from "../store/menuState";

const HeaderMenu: React.FC = () => {
  const { currentPage, setCurrentPage } = useMenuState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    setCurrentPage(e.key);
    // if (e.key === "CV") {
    //   setIsModalOpen(true);
    // }
  };

  return (
    <>
      <Affix>
        <Menu
          onClick={onClick}
          selectedKeys={[currentPage]}
          mode="horizontal"
          items={items}
          // defaultSelectedKeys={["Home"]}
        />
      </Affix>

      <Modal
        open={isModalOpen}
        footer={null}
        closeIcon={false}
        onCancel={handleCancel}
      >
        <Alert
          message="I try to maintain my webpage up-to-date, feel free to explore it! It is essentially the same as my CV. If you need my CV for some reason, please contact me via Email. "
          type="error"
          showIcon
        />
      </Modal>
    </>
  );
};

export default HeaderMenu;
