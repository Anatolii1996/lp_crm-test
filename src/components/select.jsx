import { Select } from 'antd';
import {  useState } from 'react';

const { Option } = Select;

const CustomSelect=({arrName})=>{
    const [value, setValue] = useState([]);
return(
    <Select
  size='small'
    mode="multiple"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    style={{
      width: '100%',
    }}
  >
    {arrName.map((name) => (
      <Option key={name} value={name}>
        {name}
      </Option>
    ))}
  </Select>
)
};
export default CustomSelect;