import React from 'react'
import {GoPrimitiveDot} from 'react-icons/go'
import {Stacked, Button, SparkLine} from '../components'
import {earningData, SparklineAreaData} from '../data/dummy'
import {useStateContext} from '../context/ContextProvider'

const Ecommerce = () => {
  const {currentColor} = useStateContext()
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$65,435.87</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button 
              bgColor={currentColor}
              size="md"
              color="white"
              borderRadius="10px"
              text="Download"/>
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button 
                type='button' 
                style={{color: item.iconColor, backgroundColor: item.iconBg}}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='mt-1 text-sm text-gray-400'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Update</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,500</span>
                  <span className='p-1.5 bg-green-400 rounded-full cursor-pointer hover:drop-shadow-xl text-white'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budgets</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$43,890</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine 
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}/>
              </div>
              <div className='mt-10'>
                <Button 
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"/>
              </div>
            </div>
            <div>
              <Stacked 
                width="320px"
                height="360px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
