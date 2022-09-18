import React from 'react'
import {rangeColorMapping, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, colorMappingData} from '../../data/dummy'
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  ColumnSeries, Category, Highlight, DataLabel, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective
} from '@syncfusion/ej2-react-charts';
import { Header } from '../../components'

const ColorMapping = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Average Temperatue Per Month"/>
      <div className='w-full'>
        <ChartComponent 
          id='charts'
          highlightMode='Point'
          highlightPattern='DiagonalForward'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          width='700px'
          legendSettings= {{
            mode: 'Range',
						visible: true,
						toggleVisibility: false}}>
            <Inject services={[ColumnSeries, Highlight, DataLabel, Tooltip, Category, Legend]} />
            <SeriesCollectionDirective>
              <SeriesDirective 
                dataSource={colorMappingData[0]} 
                name='USA' xName='x' yName='y' type= 'Column' 
                animation= {{ enable: false }} 
                cornerRadius={{topLeft: 10, topRight: 10}} 
                marker={{dataLabel: { visible: true, position: "Outer" }}}>
              </SeriesDirective>
            </SeriesCollectionDirective>
            <RangeColorSettingsDirective>
              {rangeColorMapping.map((item, index) => (
                <RangeColorSettingDirective key={index} {...item}/>
              ))}      
            </RangeColorSettingsDirective>
        </ChartComponent>
      </div> 
    </div>
  )
}

export default ColorMapping
