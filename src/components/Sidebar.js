import React from 'react'

const Sidebar = () => {

  const sidebarItems = ["Home", "Shorts", "Subscriptions"]
  const sidebarItems2 = ["Library", "History", "Your Videos", "Watch Later", "Liked Videos", "Show More"]

  return (
    <div className='col-span-1 text-left m-2 p-2'>
      <ul className='my-4'>
        {
          sidebarItems.map((sidebarItem) => <li className='p-2'>{sidebarItem}</li>)
        }
      </ul>
      <hr></hr>
      <ul className='my-4'>
        {
          sidebarItems2.map((sidebarItem) => <li className='p-2'>{sidebarItem}</li>)
        }
      </ul>
      <hr></hr>
    </div>
  )
}

export default Sidebar;