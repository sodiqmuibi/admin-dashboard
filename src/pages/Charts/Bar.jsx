import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, Legend, ColumnSeries, Tooltip, Category } from '@syncfusion/ej2-react-charts'
import {barCustomSeries, barPrimaryXAxis, barPrimaryYAxis} from '../../data/dummy'
import { Header } from '../../components'


const Bar = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Trade in Food Groups"/>
      <div className='w-full'>
        <ChartComponent
          id='chart'
          height='420px'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{border: {width: 0}}}
          tooltip={{ enable: true }}>
          <Inject services={[ColumnSeries, DataLabel, Category, Legend, Tooltip]}/>
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar
