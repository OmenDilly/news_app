import React, { FC, useMemo, SetStateAction, useEffect } from 'react'
import { Post } from '../../models/Post'
import PostItem from './PostItem';
import classes from './postlist.module.css'
import PostForm from './PostForm';
import { useState } from 'react';
import PostFilter, { Filter } from './PostFilter';
import PostList from './PostList';
import Modal from '../ui/modal/Modal';
import Button from '../ui/button/Button';
import { usePosts } from '../../hooks/usePosts';
import axios from 'axios';
import cover from '../../assets/IMG_4634.jpg'
import PostService from '../../API/PostService';
import ActivityIndicator from '../ui/activityIndicator/ActivityIndicator';

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

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search)

  const [postsLoading, setPostsLoading] = useState<boolean>(false)

  async function getPosts() {
    setPostsLoading(true)
    setTimeout(async () => {
      const newPosts = await PostService.getAll()
      setPosts(prevPosts => [...prevPosts, ...newPosts])
      setPostsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    getPosts()
  }, [])

  function createPost(newPost: Post) {
    setPosts(prevPosts => [...prevPosts, newPost])
    setModalVisible(false)
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
        visible={modalVisible}
        setVisible={setModalVisible}
      >
        <PostForm
          create={createPost}
        />
      </Modal>
      <div className={classes.postListHeader}>
        <h1>
          Posts
        </h1>
        <Button
          onClick={() => setModalVisible(true)}
        >
          <span className="material-icons md-18">
            add
          </span>
          New Post
        </Button>
      </div>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {
        postsLoading
        ?
        <ActivityIndicator
          loading={postsLoading}
        />
        :
        <PostList
          posts={sortedAndSearchedPosts}
          removePost={removePost}
        />
      }
    </div>
  )
}

export default PostPage