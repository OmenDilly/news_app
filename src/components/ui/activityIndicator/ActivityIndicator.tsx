import {FC} from 'react'
import classes from './activityIndicator.module.css'

interface ActivityIndicatorProps {
  loading: boolean;
}

const ActivityIndicator: FC<ActivityIndicatorProps> = ({loading}) => {
  


  return (
    <div
      className={classes.activityIndicator}
    >
      
    </div>
  )
}

export default ActivityIndicator