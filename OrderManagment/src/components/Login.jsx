import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

function Login({ onLogin }) {
  const { handleSubmit, register } = useForm();
//   handleSubmit: A function to handle form submission.
// register: A function to register form inputs and track their values

  const onSubmit = (data) => {
    if (data.username === "user" && data.password === "password") {
      onLogin();
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <Box maxW="sm" mx="auto" mt="10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input {...register("username")} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input {...register("password")} />
        </FormControl>
        <Button mt="4" colorScheme="teal" type="submit">Login</Button>
      </form>
    </Box>
  );
}

export default Login;
