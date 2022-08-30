import React from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import Loader from '../../components/loader'
import LeftSidebar1 from '../../components/left-sidebar-1'
import RightSidebar1 from '../../components/right-sidebar-1'
import Navbar1 from '../../components/navbar-1'
import Hotkeys from '../../components/hotkeys'
import Backdrop from '../../components/backdrop'
import {NotificationContainer} from 'react-notifications'
import '../../css/layouts/layout-1.css'

const Layout1 = ({children}) => {
  const {config, palettes} = useSelector(
    (state) => ({
      config: state.config,
      palettes: state.palettes
    }),
    shallowEqual
  )
  const {layout, collapsed} = {...config}
  let {background, navbar, logo, leftSidebar, rightSidebar} = {
    ...palettes
  }
  let key = `${[
    layout,
    collapsed,
    background,
    navbar,
    logo,
    leftSidebar,
    rightSidebar
  ].join('-')}`

  return (
    <div
      data-layout={layout}
      data-collapsed={collapsed}
      data-background={background}
      data-navbar={navbar}
      data-logo={logo}
      data-left-sidebar={leftSidebar}
      data-right-sidebar={rightSidebar}
      className={`${background === 'dark' ? 'dark-mode' : 'default-mode'}`}>
      <Loader />
      <Backdrop />
      <NotificationContainer />
      <Hotkeys key={key} />
      <RightSidebar1 />
      <div className="wrapper">
        <LeftSidebar1 />
        <div className="main w-full bg-grey-50 text-grey-900 dark:bg-grey-900 dark:text-white">
          <Navbar1 />
          <div className="min-h-screen w-full p-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
export default Layout1
