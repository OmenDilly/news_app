import React, { FC, useMemo, SetStateAction } from 'react'
import { Post } from '../../models/Post'
import PostItem from './PostItem';
import classes from './postlist.module.css'
import PostForm from './PostForm';
import { useState } from 'react';
import PostFilter, { Filter } from './PostFilter';
import PostList from './PostList';
import Modal from '../ui/modal/Modal';

interface PostPageProps {
  posts: Post[];
  setPosts: React.Dispatch<SetStateAction<Post[]>>;
}

const defaultFilter: Filter = {
  sort: '',
  search: ''
}

const PostPage: FC<PostPageProps> = ({posts, setPosts}) => {

  const [filter, setFilter] = useState<Filter>(defaultFilter)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return (
        [...posts]
          .sort((a: Post, b: Post) => {
            const propA = a[filter.sort as keyof Post];
            const propB = b[filter.sort as keyof Post];
        
            if (typeof propA === "string" && typeof propB === "string") {
              return propA.localeCompare(propB);
            }
        
            if (propA && propB) {
              return propA < propB ? -1 : propA > propB ? 1 : 0;
            }
        
            return 0
          })
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()))
  }, [filter.search, sortedPosts])

  function createPost(newPost: Post) {
    setPosts(prevPosts => [...prevPosts, newPost])
  }

  function removePost(removedPost: Post) {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== removedPost.id))
  }

  return (
    <div
      className={classes.postList}
    >
      <Modal
        title='New post'
      >
        <PostForm
          create={createPost}
        />
      </Modal>
      <div className={classes.postListHeader}>
        <h1>
          Posts
        </h1>

      </div>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList
        posts={sortedAndSearchedPosts}
        removePost={removePost}
      />
    </div>
  )
}

export default PostPage