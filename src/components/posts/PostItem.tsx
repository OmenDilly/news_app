import {FC} from 'react'
import { Post, PostCover } from '../../models/Post';
import classes from './post.module.css'

interface PostItemProps {
  post: Post;
  onClick?: () => {} | null;
}

const PostItem: FC<PostItemProps> = ({post, onClick}) => {

  const {title, body, cover, created} = post

  return (
    <div
      className={classes.postCard}
      onClick={onClick}
    >
      {
        cover && <img className={classes.postCardCover} src={cover}/>
      }
      <div className={classes.postCardContent}>
        <div className={classes.postCardCeader}>
          <h3 className={classes.postCardTitle}>
            {title}
          </h3>
          <small className={classes.postCardSubtitle}>
            {created.toString()}
          </small>
        </div>
        <div className={classes.postCardBody}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  )
}

export default PostItem