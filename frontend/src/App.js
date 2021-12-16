import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Users from './views/Users/Users';
import AddUsers from './views/AddUsers/AddUsers';
import OneUser from './views/OneUser/OneUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>} />
        <Route path='/:slug' element={<OneUser/>} />
        <Route path='/add' element={<AddUsers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
