import React from 'react'
import Colors from './colors'
import Toggle from './toggle'
import Sidebar from './sidebar'
import Demos from './demos'
import {useSelector, shallowEqual} from 'react-redux'
import '../../css/components/right-sidebar.css'

const RightSidebar = () => {
  const colors = [
    {bg: 'bg-white', text: 'text-white', name: 'light'},
    {bg: 'bg-grey-900', text: 'text-grey-900', name: 'dark'}
  ]
  const items = [
    {title: 'Background', key: 'background'},
    {title: 'Navbar', key: 'navbar'},
    {title: 'Left sidebar', key: 'leftSidebar'}
  ]
  const {config} = useSelector(
    state => ({
      config: state.config,
    }),
    shallowEqual
  )
  let {rightSidebar} = {...config}

  return (
    <div
      className={`right-sidebar right-sidebar-1 ${rightSidebar ? 'open' : ''}`}>
      <div>
        <div>
          <div className="flex flex-col">
            <div className="px-4 h-16 flex flex-row items-center justify-between bg-blue-500 text-white">
              <div className="uppercase text-sm font-bold tracking-wider">
                Look at me!
              </div>
              <Toggle />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="p-4">
            We can put stuff here
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
