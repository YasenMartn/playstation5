import React from 'react'

const Loading = () => {

  const COUNTER = 6;
  const FeedSkeleton = () => (
      <div className='loadingContainer'>
          <div className='imageContainer'></div>
          <div className="infoContainer"></div>
      </div>
  )
  return Array(COUNTER).fill(<FeedSkeleton />);
}

export default Loading