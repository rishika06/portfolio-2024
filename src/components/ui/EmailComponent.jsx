import { useState } from "react";
import { MdEmail, MdContentCopy } from "react-icons/md";

const EmailComponent = () => {
  const [showCopy, setShowCopy] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "rishika.kjobs@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div
      className="relative text-lg pt-4 max-w-xs leading-tight text-steel-blue-Gray flex items-center"
      onMouseEnter={() => setShowCopy(true)}
      onMouseLeave={() => setShowCopy(false)}
    >
      <div className="flex justify-center items-center">
        <MdEmail />
        <p className="text-lg pl-3 max-w-xs leading-tight text-steel-blue-Gray">
          {email}
        </p>
      </div>

      {showCopy && (
        <button
          onClick={handleCopy}
          className="absolute right-6 top-4 flex items-center bg-slate-600 text-white font-semibold text-xs px-2 py-1 rounded hover:bg-teal-200 hover:text-slate-900"
        >
          {copySuccess ? (
            "Copied!"
          ) : (
            <span className="flex items-center">
              <MdContentCopy className="mr-1" /> Copy
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default EmailComponent;
