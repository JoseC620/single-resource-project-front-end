import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {






  return (
    <div className='App'>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snacks" element={<Index />} />
            <Route path="/snacks/:id" element={<Show />} />
            <Route path="/snacks/new" element={<New />} />
            <Route path="/snacks/:id/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
      
    </div>
  )
}

export default App

