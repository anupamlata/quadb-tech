import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Summary from "./Summary";
import BookTicket from './BookTicket';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="summary/:id" element={<Summary />} />
        <Route path="book-ticket/:id" element={<BookTicket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
