import { useState } from "react";
import { MdEmail, MdContentCopy } from "react-icons/md";

const EmailComponent = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "rishika.kjobs@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="relative text-lg pt-4 max-w-xs leading-tight text-steel-blue-Gray flex items-center">
      <div className="flex justify-center items-center">
        <MdEmail />
        <p className="text-lg pl-3 max-w-xs leading-tight text-steel-blue-Gray">
          {email}
        </p>
      </div>

      <button
        onClick={handleCopy}
        className="absolute left-60 top-6 pb-4 text-white font-semibold text-xs opacity-70 hover:scale-125 transition duration-300 hover:text-teal-400"
      >
        {copySuccess ? "Copied!" : <MdContentCopy className="mr-1" />}
      </button>
    </div>
  );
};

export default EmailComponent;
