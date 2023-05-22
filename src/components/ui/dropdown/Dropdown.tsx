import {FC} from 'react'

interface DropdownProps {
  options: {value: string, title: string}[];
  defaultOption: string;
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({options, defaultOption, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value=''>{defaultOption}</option>
      {
        options.map((option, index) => 
          <option 
            key={index}
            value={option.value}
          >
            {option.title}
          </option>
        )
      }
    </select>
  )
}

export default Dropdown