import React, {FC, useState} from 'react'
import Input from '../ui/input/Input'
import Button from '../ui/button/Button'
import { Post } from '../../models/Post';
import classes from './postform.module.css'

interface PostFormProps {
  create: (newPost: Post) => void;
}

const defaultPost = {
  title: '',
  body: ''
}

type ButtonClick = React.MouseEvent<HTMLButtonElement, MouseEvent>

const PostForm: FC<PostFormProps> = ({create}) => {

  const [post, setPost] = useState<{title: string, body: string}>(defaultPost)

  function addPost(event: ButtonClick) {
    event.preventDefault()
    const newPost = new Post(post.title, post.body, null)
    create(newPost)
    setPost(defaultPost)
  }

  return (
    <form
      className={classes.postForm}
    >
      <Input
        value={post.title}
        onChange={({target}) => setPost(prev => ({...prev, title: target.value}))}
        placeholder='Enter title'
      />
      <Input
        value={post.body}
        onChange={({target}) => setPost(prev => ({...prev, body: target.value}))}
        placeholder='Enter body'
      />
      <Button
        onClick={addPost}
      >
        New Post
      </Button>  
    </form>
  )
}

export default PostForm