import axios from 'axios';

const get_user_profile = async () => {
    const url = 'http://localhost:8083/api/v1/user/profile';

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'multipart/form-data', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        });
        
        if (response.data.code === 200)
            return { status: 'success', message: response.data.message, data: response.data.data };
        else if (response.data.code === 401)
            return { status: 'unauthorized', message: response.data.message };
        else
            return { status: 'error', message: 'An unknown error occurred' };

    } catch (error) {
        console.error(error);
        if (error.response) {
            const {code, message} = error.response.data;
            if (code === 400) {
                return { status: 'error', message: 'Image upload fail' };
            } else {
                return { status: 'error', message: message || 'An unknown error occurred' };
            }
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
}


const api = {
    get_user_profile
};

export default api;
