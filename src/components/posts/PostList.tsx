import React, { FC } from 'react'
import { Post } from '../../models/Post'
import PostItem from './PostItem';
import classes from './postlist.module.css'

interface PostListProps {
  posts: Post[];
}

const PostList: FC<PostListProps> = ({posts}) => {
  return (
    <div
      className={classes.postList}
    >
      <h1 className={classes.postListHeader}>
        Новости
      </h1>
      <div className={classes.postListItems}>
        {
          posts.map((post) => 
            <PostItem 
              post={post}
              key={post.id}
            />
          )
        }
      </div>
    </div>
  )
}

export default PostList