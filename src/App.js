import { useState } from "react"
import Top from "./components/Top"
import Bottom from "./components/Bottom"

function App() {

  const [theme, setTheme] = useState(false)

  const themeHandler = (prevValue) => {
    if(prevValue === false) {
      setTheme(true);
    }
    else {
      setTheme(false)
    }
  }

  return (
    <div>
     <Top send1={theme} />
     <Bottom sendTheme={themeHandler} />
     </div>
  )
  }
export default App;
