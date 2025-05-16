import React from 'react'
import FileUpload from '../components/FileUpload.jsx';
import ChatbotDisplay from '../components/ChatbotDisplay.jsx';

function QuestionPaperAnalyzer() {
  const [rawText, setRawText] = React.useState('');
  const [answers, setAnswers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleFileUpload = async (file) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process file');
      }

      const data = await response.json();
      console.log('API Response:', data); // Debug log
      setRawText(data.rawText || '');
      // Handle nested questions array
      setAnswers(data.answers?.questions || data.answers || []);
    } catch (err) {
      setError(err.message);
      console.error('Upload Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary text-center mb-8 animate-fade-in">
        Question Paper AI Analyzer
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-secondary mb-4">Upload Your Question Paper</h2>
        <FileUpload onFileUpload={handleFileUpload} />
      </div>
      {loading && (
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          <p className="text-secondary mt-2">Processing your question paper...</p>
        </div>
      )}
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center max-w-2xl mx-auto">
          {error}
        </div>
      )}
      {rawText && (
        <div className="animate-fade-in">
          <ChatbotDisplay rawText={rawText} answers={answers} />
        </div>
      )}
    </div>
  );
}

export default QuestionPaperAnalyzer;