import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries} from '@syncfusion/ej2-react-charts'
import {areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis} from '../../data/dummy'
import { Header } from '../../components'

const Area = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Inflation Rate"/>
      <div className='w-full'>
        <ChartComponent
        id='area-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{border: {width: 0}}}>
        <Inject services={[DateTime, SplineAreaSeries, Legend]}/>
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item}/>
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
      </div>
    </div>
  )
}

export default Area
