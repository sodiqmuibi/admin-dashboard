import React from 'react'
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';
import {pieChartData} from '../../data/dummy'
import { Header } from '../../components'

const Pie = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Inflation Rate"/>
      <div className='w-full'>
            <AccumulationChartComponent id='pie-chart'
              legendSettings={{ visible: false }}
              enableSmartLabels={true}
              enableAnimation={false}
              center={{x: '50%', y: '50%'}}
              tooltip={{ enable: true, format: '${point.x} : <b>${point.y}%</b>' }}
            >
              <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={pieChartData} name='Browser' xName='x' yName='y'
                  explode={true} explodeOffset='10%' explodeIndex={0}
                  dataLabel={{
                    visible: true,
                    position: 'Inside', name: 'text',
                    font: {
                      fontWeight: '600'
                    }
                  }}
                  radius='70%'
                >
                </AccumulationSeriesDirective>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
      </div>
      
    </div>
  )
}

export default Pie
