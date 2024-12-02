import axios from 'axios';

export const load_dashboard= async () => {
    const url = 'http://localhost:8083/api/v1/admin/dashboard';

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });

        if (response.data.code === 200) {
            return { status: 'success', data: response.data.data};
        } else if (response.data.code === 401 ) {
            return { status: 'unauthorized', message: response.data.message };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }

    } catch (error) {
        console.error(error);
        if (error.response) {
            return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
};

export default load_dashboard;
