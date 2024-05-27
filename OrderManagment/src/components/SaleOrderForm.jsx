// src/components/SaleOrderForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, Select, NumberInput, NumberInputField } from '@chakra-ui/react';
import { MultiSelect } from 'chakra-multiselect';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
  // Mimic an API call to fetch products
  return await new Promise((resolve) => setTimeout(() => resolve([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ]), 1000));
};

const SaleOrderForm = ({ onSubmit }) => {
  const { handleSubmit, register, control } = useForm();
  const { data: products, isLoading: productsLoading } = useQuery('products', fetchProducts);

  if (productsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Customer ID</FormLabel>
          <Input {...register('customer_id')} />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Products</FormLabel>
          <MultiSelect {...register('products')} options={products.map(p => ({ label: p.name, value: p.id }))} />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Price</FormLabel>
          <NumberInput>
            <NumberInputField {...register('price')} />
          </NumberInput>
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Quantity</FormLabel>
          <NumberInput>
            <NumberInputField {...register('quantity')} />
          </NumberInput>
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Invoice Date</FormLabel>
          <Input type="date" {...register('invoice_date')} />
        </FormControl>
        <Button mt="4" colorScheme="teal" type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default SaleOrderForm;
