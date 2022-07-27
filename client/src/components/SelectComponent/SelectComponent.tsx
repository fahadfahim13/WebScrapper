import { MenuItem, Select } from '@mui/material'
import { Props, Option} from './types';

const SelectComponent = (props: Props) => {
  const { options, handleChange, label='' } = props;

  return (
    <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          defaultValue='0'
          onChange={handleChange}
          label={label}
        >
            {options.map(({id, text}: Option) => <MenuItem key={id} value={id}>{text}</MenuItem>)}
        </Select>
  )
}

export default SelectComponent;