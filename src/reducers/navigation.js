import React from 'react'
import {
  
  FiMessageSquare,
} from 'react-icons/fi'

const initialState = [
  {
    
    items: [
      {
        url: '/',
        icon: <FiMessageSquare size={20} />,
        title: 'Sessions',
        items: []
      },
      
    ]
  }
]

export default function navigation(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
