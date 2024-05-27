// src/components/EditSaleOrderModal.js
import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import SaleOrderForm from './SaleOrderForm';

const EditSaleOrderModal = ({ isOpen, onClose, order }) => {
  const handleFormSubmit = (data) => {
    // Handle form submission for editing sale order
    console.log('Edited Data:', data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SaleOrderForm onSubmit={handleFormSubmit} defaultValues={order} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditSaleOrderModal;
