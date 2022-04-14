import React from 'react'

function Popular() {
  return (
    <div className='outermost-popular-container'>
      <div className='outer-menu-control-container'>
        <div className="popular-post-header">Popular Posts</div>
        <div className='inner-menu-control'>
          <div className="menu-links">
            {/* will be links */}
            <p>link 1</p>
            <p>link 2</p>
            <p>link 3</p>
          </div>
          <div className="actual-posts-container">
            <div>POSTS WILL GO HERE</div>
            <div>POSTS WILL GO HERE</div>
            <div>POSTS WILL GO HERE</div>
            <div>POSTS WILL GO HERE</div>
            <div>POSTS WILL GO HERE</div>
            <div>POSTS WILL GO HERE</div>
            <div>POSTS WILL GO HERE</div>
            <div>POSTS WILL GO HERE</div>
            <div>POSTS WILL GO HERE</div>
            <div>POSTS WILL GO HERE</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular