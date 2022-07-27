import { MenuItem, Select } from '@mui/material'
import {Props} from './types';

const SelectComponent = (props: Props) => {
  const { options, handleChange, value, label='' } = props;
  return (
    <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label={label}
        >
            {options.map((option) => <MenuItem value={option.value}>{option.text}</MenuItem>)}
        </Select>
  )
}

export default SelectComponent;