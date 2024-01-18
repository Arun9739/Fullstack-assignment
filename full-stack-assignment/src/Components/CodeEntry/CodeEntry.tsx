
"use client";
import { useState } from 'react';
// import the css file
import "./CodeEntry.css";

const CodeEntry: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [enteredCode, setEnteredCode] = useState<string>('');
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const generateCode = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/codes');
      console.log('Response:', response);
      const data = await response.json();
      setGeneratedCode(data.code);
      console.log('Generated code:', data.code)
    } catch (error) {
      console.error('Error generating code:', error);
    }
  };

  const verifyCode = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/codes/use', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: enteredCode }),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Error verifying code');
      }
  
      const data = await response.json();
      setVerificationResult(data.message);
    } catch (error) {
      console.error('Error verifying code:', error);
      setVerificationResult((error as Error).message || 'Error verifying code');
    }
  };

  return (
    <div className="grid justify-center items-center max-w-md mx-auto mt-8 p-6 bg-[#354f52] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Code Verification</h1>

      <button
        className="transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generateCode}
      >
        Generate Code
      </button>
      {generatedCode !== null && <p className="mt-2">Generated Code: {generatedCode}</p>}


      <label className="block mt-10">
        Enter Code:
        <input
          type="text"
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.target.value)}
          className="form-input mt-1 block text-black w-full border border-gray-300 rounded-md p-2"
        />
      </label>
      <button
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={verifyCode}
      >
        Verify Code
      </button>

      {verificationResult && (
        <p className="mt-2 text-white-700 font-semibold">{verificationResult}</p>
      )}
    </div>
  );
};

export default CodeEntry;
