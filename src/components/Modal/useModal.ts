import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleValue = () => {
    setShowModal(!showModal);
  }
  return {showModal, toggleValue};
};

export default useModal;