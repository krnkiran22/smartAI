function ChatbotDisplay({ rawText, answers }) {
  // Ensure answers is an array
  const questionList = Array.isArray(answers) ? answers : [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-primary mb-6">Question Paper Analysis</h2>
      <div className="space-y-6">
        {questionList.length > 0 ? (
          questionList.map((item, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 py-2">
              <p className="font-medium text-secondary">{item.question || 'Unknown question'}</p>
              {item.choices && item.choices.length > 0 ? (
                item.choices.map((choice, idx) => (
                  <p key={idx} className="text-secondary ml-4">{choice}</p>
                ))
              ) : (
                <p className="text-secondary ml-4">No choices available</p>
              )}
              <p className="text-primary font-semibold mt-2">
                Answer: {item.answer || 'No answer provided'}
              </p>
            </div>
          ))
        ) : (
          <div className="text-secondary">
            <p>No questions or answers extracted.</p>
            <p className="mt-2">Raw Text:</p>
            <pre className="text-sm bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">{rawText}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatbotDisplay;