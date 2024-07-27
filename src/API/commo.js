import axios from 'axios';

// Example function to fetch data from an API
export const fetchData = async () => {
    try {
        const response = await axios.get('/api/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Example function to send data to an API
export const sendData = async (data) => {
    try {
        const response = await axios.post('/api/data', data);
        return response.data;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

// Example function to update data in an API
export const updateData = async (id, data) => {
    try {
        const response = await axios.put(`/api/data/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

// Example function to delete data from an API
export const deleteData = async (id) => {
    try {
        const response = await axios.delete(`/api/data/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};
