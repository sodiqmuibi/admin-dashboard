import React from 'react'
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule'
import {scheduleData} from '../data/dummy'
import { Header } from '../components'


const Calendar = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar"/>
      <ScheduleComponent 
        height="650px"
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2021, 0, 10)}>
        <Inject services={[Day, Week, WorkWeek, Agenda, Resize, Month, DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
