import React from "react";
import styles from "./style.module.css";
import Icon from "../../../common/Icon";
import MenuItem from "./MenuItem";
import Button from "../../../common/Button";

const Menu = ({ toggleMenu, isOpen }) => {
  return (
    <>
      <div className={styles.menu__header}>
        <Icon
          name={"apps"}
          onClick={() => {
            toggleMenu();
          }}
        />
        <span className={styles.menu__title}>Your Menu</span>
      </div>
      <div className={styles.menu__container}>
        <MenuItem closed={isOpen} icon={"add"} big link={"create-blog"}>
          <div>
            <div className={styles.item__title}>Create your first blog</div>
            <div className={styles.item__text}>It's easy we'll help you</div>
            <Button color="secondary" filled>
              <span className={styles.button__text}>Create Blog</span>
            </Button>
          </div>
        </MenuItem>
        <MenuItem closed={isOpen} icon={"favorite"} link={"liked-blogs"}>
          <div className={styles.item__title}>Liked Blogs</div>
        </MenuItem>
        <MenuItem closed={isOpen} icon={"bookmark"} link={"saved-blogs"}>
          <div className={styles.item__title}>Saved Blogs</div>
        </MenuItem>
        <MenuItem closed={isOpen} icon={"library_books"} link={"your-blogs"}>
          <div className={styles.item__title}>Your Blogs</div>
        </MenuItem>
      </div>
    </>
  );
};

export default Menu;
