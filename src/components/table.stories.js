import React, { useState } from "react";
import Table from "../components/table";
import "../App.scss"

export default {
  title: 'Table',
  component: Table,
  args: {
    ordersArr: [],
    setAnySelectRow: () => { },
    isHover: false
  }
}

const TableWithHoks = (args) => {
  const [isHover, setIsHover] = useState(false);

  const mouseOver = () => {
    setIsHover(true)
  }
  const mouseOut = () => {
    setIsHover(false)
  }
  return <Table hover={isHover} onMouseOver={mouseOver} onMouseOut={mouseOut} />
}

export const Default = {
  render: (args) => <TableWithHoks {...args} />
};
// export default {
//   title: 'Table',
//   component: Table,


//   decorators: [
//     (Story, { args }) => {
//       const [isHover, setIsHover] = useState(args.isHover);
//       return (
//         <div
//           className={`table_wrap ${isHover ? "" : "table_offset"}`}
//           // onMouseOver={() => {
//           //   setIsHover(true);
//           // }}
//           // onMouseOut={() => {
//           //   setIsHover(false);
//           // }}

//         >
//           <Story ordersArr={args.ordersArr} setAnySelectRow={args.setAnySelectRow} />
//         </div>
//       );
//     }
//   ]
// }
// const Template = (args) => <Table {...args} />
// export const Default = Template.bind({});
// Default.args = {
//   ordersArr: [],
//   setAnySelectRow: () => { },
//   isHover: false
// }
// export const Hover = Template.bind({});
// Hover.args = {
//   ordersArr: [],
//   setAnySelectRow: () => { },
//   isHover: true
// }


