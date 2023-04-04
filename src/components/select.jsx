import { Select } from "antd";
import { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const { Option } = Select;

const CustomSelect = ({ arrName  }) => {
  const [value, setValue] = useState([]);
  const [open, setOpen] = useState(false);
  
  const toggleOpen = () => {
    setOpen(!open);
  }
  return (
    <Select
      size="small"
      mode="multiple"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      onClick={toggleOpen}
      style={{
        width: "100%",
        
      }}
      suffixIcon={<CaretDownOutlined style={{ color: "black" }} onClick={toggleOpen}/>}
      open={open}
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
