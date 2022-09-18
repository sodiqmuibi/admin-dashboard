import React from 'react'
import { Header, Stacked } from '../../components'

const StackedChart = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Budget and Expenses"/>
      <div className='w-full'>
        <Stacked 
          width="700px"
          height="420px"/>
      </div>
    </div>
  )
}

export default StackedChart
