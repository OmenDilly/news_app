import React, { FC, useMemo, SetStateAction } from 'react'
import { Post } from '../../models/Post'
import PostItem from './PostItem';
import classes from './postlist.module.css'
import PostForm from './PostForm';
import { useState } from 'react';
import PostFilter, { Filter } from './PostFilter';

interface PostListProps {
  posts: Post[];
  removePost: (removedPost: Post) => void;
}

const defaultFilter: Filter = {
  sort: '',
  search: ''
}

const PostList: FC<PostListProps> = ({posts, removePost}) => {

  if (!posts.length) {
    return (
      <h2>No posts yet</h2>
    )
  }

  return (
    <div className={classes.postListItems}>
      {
        posts.map((post) => 
          <PostItem 
            post={post}
            key={post.id}
            remove={removePost}
          />
        )
      }
    </div>
  )
}

export default PostList