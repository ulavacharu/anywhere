import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Main from './Pages/Main';
import New from './Pages/New';
import How from './Pages/How';
import Edit from './Pages/Edit';
import Langs from './Pages/Langs';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<New/> }></Route>
        <Route path='/how' element={<How/> }></Route>
        <Route path='/:customLink' element={<Main/> }></Route>
        <Route path='/:customLink/edit' element={<Edit/>}></Route>
        <Route path='/langs' element={<Langs/>}></Route>
      </Routes>
      <center><footer ><Link to="/">New</Link>&bull; <Link to="/langs">Langs</Link>&bull; <Link to="/how">How</Link></footer></center>
    </Router>
  )
}

export default App


//only type unique custom urls ----done
//no spaces in both the input fields  done
//need to make the website responsive done
//^[^-\s]*$
