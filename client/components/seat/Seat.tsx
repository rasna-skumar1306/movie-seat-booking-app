import Image from "next/image";
import React, { useState } from "react";

import styles from "./Seat.module.scss";
import { images } from "../../utils";

type Props = {};

const style = {
  wrapper: `relative m-2 ${styles.hoverAnimation}`,
  options: `z-[4] absolute -bottom-5 bg-[#e2e2e2] w-[100%] p-1 rounded ${styles.child}`,
  list: `list-none`,
  listItem: `cursor-pointer hover:bg-[#e2e2e277]`,
  icon: `w-4 max-w-fit min-w-[unset]`,
};

const Seat = (props: Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <div
      className={style.wrapper}
      // onMouseLeave={() => setShowOptions(false)}
    >
      <Image
        className={style.icon}
        src={images.EmptySeat}
        // onMouseEnter={() => setShowOptions(true)}
      />

      <div className={style.options}>
        <li className={style.list}>
          <ul className={style.listItem}>Select</ul>
          <ul className={style.listItem}>Disable</ul>
          <ul className={style.listItem}>Booked</ul>
        </li>
      </div>
    </div>
  );
};

export default Seat;
