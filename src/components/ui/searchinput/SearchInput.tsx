import {FC, InputHTMLAttributes} from 'react'
import Input from '../input/Input'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<InputProps> = (props) => {
  return (
    <Input
      {...props}
    />
  )
}

export default SearchInput