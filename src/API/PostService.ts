import { Post } from "../models/Post"
import axios from 'axios'

export default class PostService {
  static async getAll() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    const newPosts = response.data.map((item: Post) => new Post(item.title, item.title, item.url))
    return newPosts
  }
}