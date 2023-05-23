import { FC, TextareaHTMLAttributes } from 'react'
import classes from './input.module.css'

type RichInputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const RichInput: FC<RichInputProps> = (props) => {
  return (
    <textarea
      {...props}
      className={[classes.richInput, props.className].join(' ')}
    />
  )
}

export default RichInput