import React from 'react'

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer>
          <div></div>
      <div><p className='centre copyright'>&copy;{date} RILR20</p></div>
    </footer>
  )
}
