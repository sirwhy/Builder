import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Latest from './pages/Latest';
import Series from './pages/Series';
import Reader from './pages/Reader';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/series/:id" element={<Series />} />
            <Route path="/read/:id" element={<Reader />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/user/register" element={<UserRegister />} />
            <Route path="/user/login" element={<UserLogin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
