function FileUpload({ onFileUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type.includes('image') || file.type === 'application/pdf')) {
      onFileUpload(file);
    } else {
      alert('Please upload an image (PNG/JPG) or PDF file.');
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-secondary mb-2">
        Upload Question Paper (PNG/JPG/PDF)
      </label>
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={handleFileChange}
        className="block w-full text-sm text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-blue-600 transition duration-200"
      />
    </div>
  );
}

export default FileUpload;