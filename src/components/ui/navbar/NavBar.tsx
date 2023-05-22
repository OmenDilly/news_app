import {FC, useState} from 'react'
import Button from '../button/Button'
import classes from './navbar.module.css'
import Input from '../input/Input'
import { Post } from '../../../models/Post'
import usePosts from '../../hooks/usePosts'
import PostForm from '../../posts/PostForm'

interface NavBarProps {
  // createPost: (newPost: Post) => void;
}

const NavBar: FC<NavBarProps> = () => {


  return (
    <div
      className={classes.navbar}
    >
      <span>
        logo
      </span>
      {/* <PostForm create={createPost}/> */}
    </div>
  )
}

export default NavBar