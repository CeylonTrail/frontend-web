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
        console.log(response.data);  // Log the entire response data
        // console.log(typeof response.data.code);  // Log the type of code
        if (response.data.message === "Login success") {
            return { status: 'success', message: 'Login success', token: response.data.data.accessToken,role:response.data.data.role };
        } else {
            return { status: 'error', message: 'Login success' };
        }
    } catch (error) {
        console.error(error);  // Log the error
        if (error.response && error.response.data) {
            const { code, message, data } = error.response.data;
            if (code === 401 && data === "Password is incorrect") {
                return { status: 'error', message: 'Password is incorrect' };
            } else if (code === 404 && data === "Email not found") {
                return { status: 'Validation Errors', message: "Email not found" };
            } else {
                return { status: 'error', message: message || 'An unknown error occurred' };
            }
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }

}

export default login;
