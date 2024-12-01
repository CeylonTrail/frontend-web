import axios from 'axios';

const login = async (data) => {
    const url = 'http://localhost:8083/api/v1/auth/login';

    try {
        const response = await axios.post(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });
        
        if (response.data.code === 200) {
            const token = response.data.data.accessToken;
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            if (response.data.data.role === "SERVICE_PROVIDER") {
                if (response.data.data.setupState) {
                    return { 
                        status: 'success', 
                        message: 'Login success', 
                        token: token,
                        role: response.data.data.role,
                        setupState: true,
                        userName: response.data.data.username,
                        serviceName: response.data.data.serviceName,
                        serviceType: response.data.data.serviceType
                    };
                } else {
                    return { 
                        status: 'success', 
                        message: 'Login success', 
                        token: token,
                        role: response.data.data.role,
                        setupState: false,
                        userName:response.data.data.username,
                        serviceName: response.data.data.serviceName,
                        serviceType: response.data.data.serviceType
                    };
                }
            } else {
                return { 
                    status: 'success', 
                    message: 'Login success', 
                    token: token,
                    role:response.data.data.role,
                    userName:response.data.data.username 
                };
            } 
        } else {
            return { status: 'error', message: response.data.message };
        }
    } catch (error) {
        console.error(error);  // Log the error
        if (error.response && error.response.data) {
            const { code, message, data } = error.response.data;
            return { status: 'error', message: message || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }

}

export default login;
