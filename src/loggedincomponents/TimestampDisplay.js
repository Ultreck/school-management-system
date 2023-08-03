import moment from 'moment/moment'
import React from 'react'

const TimestampDisplay = ({timestamp}) => {
      const humanReadable = getHumanReadableTimestamp(timestamp)
  return (
    <div>
            {humanReadable}
    </div>
  )
}

const getHumanReadableTimestamp = (timestamp) => {
const now = moment();
const then = moment(timestamp);
const diff = now.diff(then, "second");

if(diff < 60){
      return diff + " seconds ago";
}
else if(diff < 3600){
      return Math.floor(diff / 60) + " minutes ago";
}
else if(diff < 86400){
      return Math.floor(diff / 3600) + " hours ago";
}
else if(diff < 2592000){
      return Math.floor(diff / 86400) + " days ago";
}
else if(diff < 31536000){
      return Math.floor(diff / 2592000) + " months ago";
}
else{
      return Math.floor(diff / 31536000) + " years ago";
}

}

export default TimestampDisplay
