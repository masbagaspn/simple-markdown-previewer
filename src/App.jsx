import { useState } from 'react'
import { marked } from 'marked'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState("# Here's and example on how to use the markdown \n ## Sub Heading \n [Links](https://www.freecodecamp.org) `Inline Code` **Bold Text** \n\n ```\nMulti-line code\n```\n\n > Block Quotes! \n\n Unordered List\n- List\n  - List\n\nOrdered List\n1. List\n1. List\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)")
  
  const raw = marked(markdown, { breaks: true, gfm: true })

  return (
    <main>
      <h1>Markdown Previewer</h1>
      <section id='markdown'>
        <div id='editor-container'>
          <h2 className='container-title'>Editor</h2>
          <textarea 
            id='editor'
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
          />
        </div>
        <div id='previewer-container'>
          <h2 className='container-title'>Previewer</h2>
          <div id='preview' dangerouslySetInnerHTML={{ __html: raw }}/>
        </div>
      </section>
    </main>
  )
}

export default App