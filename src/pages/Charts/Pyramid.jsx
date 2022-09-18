import React from 'react'
import {PyramidData} from '../../data/dummy'
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection} from '@syncfusion/ej2-react-charts';
import { Header } from '../../components'

const Pyramid = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Average Temperatue Per Month"/>
      <div className='w-full'>
        <AccumulationChartComponent 
          id='pyramid-chart'
          legendSettings={{visible: false}}
          tooltip={{ enable: true, format: '${point.x} : <b>${point.y} cal</b>' }}>
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective name='Food' dataSource={PyramidData} xName='x' yName='y' type='Pyramid' width='45%' height='80%'
                neckWidth='15%' gapRatio={0.03} explode={true} emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                dataLabel={{
                  visible: true, position: 'Inside',
                  name: 'text',
                }}
              >
              </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid
