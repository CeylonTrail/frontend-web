import axios from "axios";

const url = "http://localhost:8083/api/v1/sp/setup";

export const set_marketplace = async (formData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    console.log("Response:", response);

    return response.data;
  } catch (error) {
    console.error("Error submitting marketplace data", error);
    throw error;
  }
};

export default set_marketplace;
