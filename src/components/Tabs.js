import React from "react";

const Tabs = ({ props, onClick }) => {
  //   const [props, setTabs] = props;
  //   console.log(setTabs);
  return (
    <div>
      <ul>
        {props.map((item, indx) => (
          <li key={indx} onClick={() => onClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
