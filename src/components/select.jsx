import { Select } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';


const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const CustomSelect=()=>{
return(
    <Select
    showSearch
    size='small'
    style={{
      width: 100,
      height: "auto",
    }}
    // placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
    suffixIcon={<CaretDownFilled />}
  />
)
};
export default CustomSelect;