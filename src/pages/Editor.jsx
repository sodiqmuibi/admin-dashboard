import React from 'react'
import { HtmlEditor, RichTextEditorComponent, Toolbar, Inject, Link, QuickToolbar, Image } from '@syncfusion/ej2-react-richtexteditor'
import {EditorData} from '../data/dummy'
import { Header } from '../components'
const Editor = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Editor"/>
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[Toolbar, HtmlEditor, Image, Link, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
