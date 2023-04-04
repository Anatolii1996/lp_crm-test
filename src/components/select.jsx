import { Select } from "antd";
import { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const { Option } = Select;

const CustomSelect = ({ arrName }) => {
  const [value, setValue] = useState([]);
  return (
    <Select
      size="small"
      mode="multiple"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: "100%",
      }}
      downArrowIcon={<CaretDownOutlined />}
    >
      {arrName.map((name) => (
        <Option key={name} value={name}>
          {name}
        </Option>
      ))}
    </Select>
  );
};
export default CustomSelect;
