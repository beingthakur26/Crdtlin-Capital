import React, { createContext, useContext, useState } from "react";

const ApplyContext = createContext();

export const ApplyProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
