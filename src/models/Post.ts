import image from '../assets/IMG_9166.jpg'

export type PostCover = typeof image | null;

export class Post {
  id: number;
  title: string;
  body: string;
  cover: PostCover;
  created: Date;
  edited: Date | null;

  constructor(
    title: string,
    body: string,
    cover: PostCover
  ) {
    this.id = Math.random()
    this.title = title
    this.body = body
    this.cover = cover
    this.created = new Date()
    this.edited = new Date()
  }
}