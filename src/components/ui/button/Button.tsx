import { FC, ButtonHTMLAttributes } from 'react'
import classes from './button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button
      {...props}
      className={[classes.btn, props.className].join(' ')}
    >
      {children}
    </button>
  )
}

export default Button