import { useState, useEffect} from 'react'
import './App.css'
import BlurText from "../ReactBits/BlurText/BlurText.jsx";
import Input from "../ReactBits/Search-Box/search_box.jsx";
import SearchResult from './component/search_result.jsx';

function App() {

  const [input, setInput] = useState("");

  return (
    <>
      <div className='box-content p-1'>
        <BlurText
          text="Powered by Taste. Driven by ML."
          delay={130}
          animateBy="words"
          direction="top"
          className="text-5xl mb-8"
        />
      </div>
      
      <div className='box-content relative'>
        <Input setInput={setInput}/>
        <SearchResult input={input} />
      </div>
    </>
  )
}

export default App
