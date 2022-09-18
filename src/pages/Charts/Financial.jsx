import React from 'react'
import {FinancialPrimaryXAxis, FinancialPrimaryYAxis, financialChartData} from '../../data/dummy'
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  HiloOpenCloseSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, ChartTheme,
  Crosshair} from '@syncfusion/ej2-react-charts';
  import { Header } from '../../components'

const Financial = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Financial"/>
      <div className='w-full'>
        <ChartComponent 
          id='charts'  
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{enable: true, shared: true}}
          width='600px'
          legendSettings={{ visible: false }}
          crosshair={{ enable: true, lineType: 'Vertical',  line: { width: 0 }}}>
            <Inject services={[HiloOpenCloseSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]} />
              <SeriesCollectionDirective>
                <SeriesDirective 
                  type='HiloOpenClose'
                  dataSource={financialChartData} 
                  animation={{ enable: true }}
                  bearFillColor='#2ecd71' 
                  bullFillColor='#e74c3d'
                  xName='x' low='low' high='high' open='open' close='close' name='Apple Inc'>
                </SeriesDirective>
              </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      
    </div>
  )
}

export default Financial
