import React from 'react'
import {GridComponent, ColumnDirective, Resize, ColumnsDirective, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids'
import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy'
import { Header } from '../components'
const Orders = () => {
  return (
    <div className='mt-12 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      <GridComponent 
        id='gridcomp' 
        dataSource={ordersData}
        allowPaging
        allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Sort]}/>
      </GridComponent>
    </div>
  )
}

export default Orders
