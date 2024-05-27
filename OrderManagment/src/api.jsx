// src/api.js

export const fetchSaleOrders = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, customerName: 'John Doe', amount: 150.0 },
          { id: 2, customerName: 'Jane Smith', amount: 200.5 },
          { id: 3, customerName: 'Mike Johnson', amount: 99.99 },
          // Add more mock data as needed
        ]);
      }, 500); // Simulate a network delay of 500ms
    });
  };
  