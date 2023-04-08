import { Select } from "antd";
import { useState, useEffect } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { BsFillCircleFill } from "react-icons/bs";

const { Option } = Select;

const CustomSelect = ({ arrName, setOrdersArr, ordersArr }) => {
  const [value, setValue] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
    setOpen(true);
  };

  useEffect(() => {
    if (value.length) {
      setOrdersArr(ordersArr.filter((el) => el.name == value));
    }
  }, [value]);

  return (
    <Select
      size="small"
      mode="multiple"
      value={value}
      onFocus={() => setOpen(true)}
      onChange={handleChange}
      style={{
        width: "100%",
      }}
      suffixIcon={
        <CaretDownOutlined style={{ color: "black" }} onClick={toggleOpen} />
      }
      open={open}
      dropdownStyle={{ borderRadius: 0 }}
      menuItemSelectedIcon={
        <BsFillCircleFill
          style={{ color: "black", fontSize: "10px", verticalAlign: "middle" }}
        />
      }
    >
      {arrName.map((name) => (
        <Option
          key={name}
          value={name}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {name}
        </Option>
      ))}
    </Select>
  );
};
export default CustomSelect;
