import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Main from './Pages/Main';
import New from './Pages/New';
import How from './Pages/How';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<New/> }></Route>
        <Route path='/how' element={<How/> }></Route>
        <Route path='/:customLink' element={<Main/> }></Route>
      </Routes>
      <center><footer><Link to="/">New</Link>&bull; <Link to="/langs">Langs</Link>&bull; <Link to="/how">How</Link></footer></center>
    </Router>
  )
}

export default App
