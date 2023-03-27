import axios from "axios";
import "firebase/auth";
const baseUrl = 'https://api.websitesprofessional.com/api/v1/User';

// Function to fetch all users
export const getUsers = async () => {
  const response = await fetch(`${baseUrl}/user`);
  const data = await response.json();
  return data.data;
};

// Function to update user role
export const updateUserRole = async (userEmail, newRole) => {
  const role = JSON.stringify({ role: newRole });

  try {
    const response = await axios.put(`${baseUrl}/${userEmail}/role`, role);

    if (response.data.success) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

// Function to get user orders
export const getUserOrders = async (userEmail) => {
  try {
    const response = await axios.get(`${baseUrl}/${userEmail}/orders`);
    if (response.data.success) {
      console.log(response);
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};

// Function to get user profile
export const getUserProfile = async (userEmail) => {
  try {
    const response = await axios.get(`${baseUrl}/${userEmail}/profile`);

    if (response.data.success) {
      // console.log(response);
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};



// Function to get single user
export const getSingleUser = async (userEmail) => {
  const response = await fetch(`${baseUrl}/${userEmail}`, {
    method: 'GET',
  });
  const data = await response.json();
  return data.data;
};

// Function to delete user
export const deleteUser = async (userEmail) => {
  const response = await fetch(`${baseUrl}/${userEmail}`, {
    method: 'DELETE',
  });
  console.log(response);
  const data = await response.json();
  return data.data;
};


// Function to update user profile
export const updateUserProfile = async (userEmail, userData) => {
  try {
    const response = await axios.put(`${baseUrl}/${userEmail}/profile`, userData);

    if (response.data.success) {
      // console.log(response);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
