import image from '../assets/IMG_9166.jpg'

export type PostCover = typeof image | string;

export class Post {
  id: number;
  title: string;
  body: string;
  url: PostCover;
  created: Date;
  edited: Date | null;

  constructor(
    title: string,
    body: string,
    url: PostCover
  ) {
    this.id = Math.random()
    this.title = title
    this.body = body
    this.url = url
    this.created = new Date()
    this.edited = new Date()
  }
}