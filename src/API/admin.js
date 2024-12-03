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

        if (response.data.code === 200)
            return { status: 'success', message: response.data.message, data: response.data.data };
        else if (response.data.code === 401)
            return { status: 'unauthorized', message: response.data.message };
        else
            return { status: 'error', message: 'An unknown error occurred' };

    } catch (error) {
        console.error(error);
        if (error.response) {
            return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
};

export const load_travellers = async () => {
    const url = 'http://localhost:8083/api/v1/admin/user/traveller';

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
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
            return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
};

export const load_sps = async () => {
    const url = 'http://localhost:8083/api/v1/admin/user/sp';

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
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
            return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
};

export const delete_traveller = async (id) => {
    const url = `http://localhost:8083/api/v1/admin/user/traveller/${id}`;

    try {
        const response = await axios.delete(url, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
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
            return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
};

export const delete_sp = async (id) => {
    const url = `http://localhost:8083/api/v1/admin/user/traveller/${id}`;

    try {
        const response = await axios.delete(url, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
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
            return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
};

export const get_sp = async (id) => {
    const url = `http://localhost:8083/api/v1/admin/user/sp/${id}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
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
            return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
};

export const load_pending_sps = async () => {
    const url = 'http://localhost:8083/api/v1/admin/user/sp/pending-verification';

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        console.log(response);

        if (response.data.code === 200)
            return { status: 'success', message: response.data.message, data: response.data.data };
        else if (response.data.code === 401)
            return { status: 'unauthorized', message: response.data.message };
        else
            return { status: 'error', message: 'An unknown error occurred' };

    } catch (error) {
        console.error(error);
        if (error.response) {
            return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
};

export const get_pending_sp = async (id) => {
    const url = `http://localhost:8083/api/v1/admin/user/sp/pending-verification/${id}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
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
            return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
};

const api = { load_dashboard, load_travellers, load_sps, delete_traveller, delete_sp, get_sp, load_pending_sps, get_pending_sp };
export default api;
