import {FC} from 'react'
import { Post, PostCover } from '../../models/Post';
import classes from './post.module.css'
import Button from '../ui/button/Button';

interface PostItemProps {
  post: Post;
  onClick?: () => {} | null;
  remove: (post: Post) => void;
}

const PostItem: FC<PostItemProps> = ({post, onClick, remove}) => {

  const {title, body, url, created} = post

  return (
    <div
      className={classes.postCard}
      onClick={onClick}
    >
      {
        url && 
          <div className={classes.postCardCover}>
            <img src={url}/>
          </div>
      }
      <div className={classes.postCardContent}>
        <div className={classes.postCardHeader}>
          <div>
            <h3 className={classes.postCardTitle}>
              {title}
            </h3>
            <small className={classes.postCardSubtitle}>
              {created.toString()}
            </small>
          </div>
          <Button
            onClick={() => remove(post)}
          >
            <span className="material-icons md-18">close</span>
          </Button>
        </div>
        <div className={classes.postCardBody}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  )
}

export default PostItem