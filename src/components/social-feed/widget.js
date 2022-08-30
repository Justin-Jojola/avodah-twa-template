import React from 'react'
import PropTypes from 'prop-types'

const Widget = ({children}) => {
  return (
    <div className="w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
      {children}
    </div>
  )
}

Widget.propTypes = {
  children: PropTypes.any
}
export default Widget
