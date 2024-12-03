import axios from "axios"

const plan_trip = async (data) => {
    const url = 'http://localhost:8083/api/v1/traveller/plan-trip';

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json', 
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
        
            return { status: 'error', message: error.message||'An unknown error occurred' };
        
    }

}

export default {plan_trip}