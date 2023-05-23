import { FC, ButtonHTMLAttributes } from 'react'
import classes from './button.module.css'

export const ButtonModes = {
  TEXT: 'text',
  OUTLINED: 'outlined',
  CONTAINED: 'contained'
} as const

export type ButtonMode = typeof ButtonModes[keyof typeof ButtonModes]

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode?: ButtonMode
};
const Button: FC<ButtonProps> = ({children, mode, ...props}) => {

  const rootClasses = [classes.btn, props.className]

  if (mode === ButtonModes.TEXT) {
    rootClasses.push(classes.text)
  }

  return (
    <button
      {...props}
      className={rootClasses.join(' ')}
    >
      {children}
    </button>
  )
}

export default Button