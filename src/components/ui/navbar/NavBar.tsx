import {FC, useState} from 'react'
import Button from '../button/Button'
import classes from './navbar.module.css'
import Input from '../input/Input'
import { Post } from '../../../models/Post'
import usePosts from '../../hooks/usePosts'

interface NavBarProps {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const defaultPost = {
  title: '',
  body: ''
}

type ButtonClick = React.MouseEvent<HTMLButtonElement, MouseEvent>

const NavBar: FC<NavBarProps> = ({setPosts}) => {

  const [post, setPost] = useState<{title: string, body: string}>(defaultPost)

  function addPost(event: ButtonClick) {
    event.preventDefault()
    const newPost = new Post(post.title, post.body, null)
    setPosts(prevPosts => [...prevPosts, newPost])
    setPost(defaultPost)
  }

  return (
    <div
      className={classes.navbar}
    >
      <span>
        logo
      </span>
      <form>
        <Input
          value={post.title}
          onChange={({target}) => setPost(prev => ({...prev, title: target.value}))}
          placeholder='Введите заголовок'
        />
        <Input
          value={post.body}
          onChange={({target}) => setPost(prev => ({...prev, body: target.value}))}
          placeholder='Введите текст'
        />
        <Button
          onClick={addPost}
        >
          New Post
        </Button>  
      </form>
    </div>
  )
}

export default NavBar