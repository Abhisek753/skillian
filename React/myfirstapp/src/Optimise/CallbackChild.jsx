import React, {memo}from 'react'

const CallbackChild = React.memo(({handleClick}) => {
    console.log("child is rendering");

  return (
    <div>
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    </div>
  )
});

export default CallbackChild
