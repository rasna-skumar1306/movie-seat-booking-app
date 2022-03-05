import React, { ChangeEvent, useCallback, useState } from "react";
import Seat from "../seat/Seat";

type Props = {};

const style = {
  wrapper: `flex flex-col justify-center align-items w-screen`,
  input: `border-[1px] border-[#000000] rounded mt-3 w-1/4`,
  button: `w-[100px] h-[48px] text-center bg-[#000000] text-white mt-5 rounded-lg`,
  row: `flex flex-row`,
};

const ScreenGenerator = (props: Props) => {
  const [screenData, setscreenData] = useState<{ rows: number; cols: number }>({
    rows: 0,
    cols: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setscreenData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { rows, cols } = screenData;

  const renderScreen = useCallback(() => {
    let arr: JSX.Element[][] = [];
    for (let i = 0; i < rows; i++) {
      let innerArr: JSX.Element[] = [];
      for (let j = 0; j < cols; j++) {
        innerArr.push(<Seat />);
      }
      arr.push(innerArr);
    }
    return arr;
  }, [screenData]);

  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        name="rows"
        onChange={(e) => handleChange(e)}
      />
      <input
        className={style.input}
        name="cols"
        onChange={(e) => handleChange(e)}
      />
      <button className={style.button} onClick={() => console.log(screenData)}>
        Generate
      </button>
      {renderScreen().map((row) => (
        <p className={style.row}>{row.map((col) => col)}</p>
      ))}
    </div>
  );
};

export default ScreenGenerator;
