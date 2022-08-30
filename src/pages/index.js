import React from 'react'
import SectionTitle from '../components/section-title'
import Widget from '../components/widget'

const Index = () => (
  <>
    <div className='flex flex-wrap'>
    <div className='w-3/4'>
    test
    </div>
    <div className='w-1/4'>
    <Widget title="Page title" description={<span>Page description</span>}>
      <p>This is an empty page</p>
    </Widget>
    </div>
    </div>
  </>
)
export default Index
