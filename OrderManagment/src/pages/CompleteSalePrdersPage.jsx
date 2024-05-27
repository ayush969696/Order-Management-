// src/pages/CompletedSaleOrdersPage.js
import React from 'react';
import SaleOrderTable from '../components/SaleOrderTable';

const CompletedSaleOrdersPage = () => {
  return (
    <div>
      <SaleOrderTable status="completed" />
    </div>
  );
};

export default CompletedSaleOrdersPage;
