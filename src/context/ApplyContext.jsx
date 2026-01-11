import React, { createContext, useContext, useState, useEffect } from "react";

const ApplyContext = createContext();

export const ApplyProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ApplyContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ApplyContext.Provider>
  );
};

export const useApply = () => {
  const context = useContext(ApplyContext);
  if (!context) {
    throw new Error("useApply must be used within an ApplyProvider");
  }
  return context;
};
