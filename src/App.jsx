import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import QuestionPaperAnalyzer from './pages/QuestionPaperAnalyzer.jsx';

function App() {
  return (
    <>
      <nav className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Question Paper AI</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <span className="text-gray-300">History (Coming Soon)</span>
            <span className="text-gray-300">About (Coming Soon)</span>
          </div>
        </div>
      </nav>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<QuestionPaperAnalyzer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
