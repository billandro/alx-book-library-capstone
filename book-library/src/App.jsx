import './index.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import BookCard from './components/BookCard';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import BookDetails from './components/BookDetails';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import { useState } from 'react';
import SearchResultsPage from './components/SearchResultsPage';
import BookDetailsPage from './components/BookDetailsPage';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to manage overlay visibility

  const handleLoginClick = () => {
    setIsLoginOpen(true); // Open the login overlay
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false); // Close the login overlay
  };

  return (
    <Router>
      <Header onLoginClick={handleLoginClick}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookCard" element={<BookCard />} />
        <Route path="/BookDetails/:id" element={<BookDetails />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/Login/ForgotPassword" element={<ForgotPassword />} /> */}
        <Route path="/search/:query" element={<SearchResultsPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer />
        {isLoginOpen && <Login handleClose={handleCloseLogin} />}
    </Router>
  );
}

export default App