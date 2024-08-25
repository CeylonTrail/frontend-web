import axios from "axios";

const url = "http://localhost:8083/api/v1/marketplace/set-marketplace";

export const set_marketplace = async (formData) => {
  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
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
