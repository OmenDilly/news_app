import { FC, InputHTMLAttributes } from 'react'
import classes from './input.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({children, ...props}) => {
  return (
    <input
      {...props}
      className={[classes.input, props.className].join(' ')}
    />
  )
}

export default Input