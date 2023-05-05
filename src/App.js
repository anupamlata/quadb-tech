import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Summary from "./Summary/Summary";
import BookTicket from './BookTicket/BookTicket';

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
