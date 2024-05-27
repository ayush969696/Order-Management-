// src/components/SaleOrderTable.jsx

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSaleOrders } from '../api';

const SaleOrderTable = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['saleOrders'],
    queryFn: fetchSaleOrders,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customerName}</td>
            <td>{order.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SaleOrderTable;
