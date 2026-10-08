import { useState } from 'react';

function Resume() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="resume-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>📄 My Resume</h1>
        <p>Upload and manage your resume for AI-powered analysis.</p>
      </div>

      {/* Upload Resume Card */}
      <div className="resume-upload-card">

        <h2>Upload Your Resume</h2>

        <p>
          Upload your resume in PDF, DOC, or DOCX format.
        </p>

        <div className="upload-area">

          <div className="upload-icon">
            📄
          </div>

          <h3>Choose your resume</h3>

          <p>
            Drag and drop your file here or click the button below.
          </p>

          <label className="upload-button">
            Choose Resume
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              hidden
            />
          </label>

        </div>

        {/* Selected File */}
        {file && (
          <div className="selected-file">

            <div>
              <strong>Selected Resume</strong>
              <p>{file.name}</p>
            </div>

            <span>✓</span>

          </div>
        )}

        {/* Analyze Button */}
        <button
          className="analyze-button"
          disabled={!file}
        >
          🤖 Analyze Resume
        </button>

      </div>

      {/* Resume Information */}
      <div className="resume-info-card">

        <h2>💡 How Resume Analysis Works</h2>

        <div className="resume-steps">

          <div>
            <span>1</span>
            <h3>Upload</h3>
            <p>Upload your latest resume.</p>
          </div>

          <div>
            <span>2</span>
            <h3>Analyze</h3>
            <p>AI analyzes your skills and experience.</p>
          </div>

          <div>
            <span>3</span>
            <h3>Improve</h3>
            <p>Get suggestions to improve your resume.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Resume;