import {useMemo} from 'react'
import { Post } from '../models/Post'

export const useSortedPosts = (posts: Post[], sort: string): Post[] => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return (
        [...posts]
          .sort((a: Post, b: Post) => {
            const propA = a[sort as keyof Post];
            const propB = b[sort as keyof Post];
        
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
  }, [sort, posts])

  return sortedPosts
}

export const usePosts = (posts: Post[], sort: string, search: string): Post[] => {

  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => 
      post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }, [search, sortedPosts])

  return sortedAndSearchedPosts
}