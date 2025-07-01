import React from "react";
import { FaTimes } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DesignModal = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0d1117]/95">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between p-4 bg-[#161b22] border-b border-[#30363d]">
        <span className="text-white font-semibold text-lg">Design Preview</span>
        <button
          onClick={onClose}
          className="text-white text-xl hover:text-red-400 transition"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>
      </div>

      {/* Zoomable Images Section */}
      <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="bg-[#0d1117] p-2 rounded-xl shadow-lg border border-[#30363d]"
          >
            <Zoom
              zoomMargin={50}
              overlayBgColorEnd="rgba(0,0,0,0.95)"
              transitionDuration={300}
            >
              <img
                src={src}
                alt={`Design Preview ${idx + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg cursor-zoom-in"
                draggable={false}
              />
            </Zoom>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignModal;
