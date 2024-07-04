import React from 'react';
import schoolInfo from "../../config/schoolinfo.json";

interface SimpleModalProps {
  onClose: () => void; // Function to close the modal
  isOpen: boolean; // State to manage modal open/close passed from parent
  index?: number; // Optional index prop to fetch specific data
}

const SimpleModal: React.FC<SimpleModalProps> = ({ onClose, isOpen, index }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from parent component
  };

  if (!isOpen) {
    return null; // Return null if isOpen is false to hide the modal
  }

  // Data based on index from schoolinfo.json
  const image = index !== undefined ? schoolInfo.images[index] : '';
  const gpa = index !== undefined ? schoolInfo.GPAS[index] : '';
  const name = index !== undefined ? schoolInfo.Names[index] : '';
  const course = index !== undefined ? schoolInfo.Courses[index] : '';
  const grad = index !== undefined ? schoolInfo.Grad[index] : '';

  // Example: Fetch data based on index if provided
  const modalTitle = `Modal Title ${index !== undefined ? `for ${name}` : ''}`;
  const modalContent = `
    <div>
      <img src="${image}" alt="${name}" class="max-w-full h-auto mb-4" />
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>GPA:</strong> ${gpa}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Graduation:</strong> ${grad}</p>
    </div>
  `;

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={handleClose}></div>

        <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto">
          <span className="absolute top-0 right-0 p-4 cursor-pointer" onClick={handleClose}>
            &times;
          </span>

          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">{modalTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} className="text-gray-700" />
          </div>

          <div className="text-right p-4">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;
