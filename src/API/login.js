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

        if (response.status === 200 && response.data.message === 'Login success') {
            return { status: 'success', message: 'Login success', token: data.token[0]};
        } else {
            return { status: 'error', message: 'Login success' };
        }
    } catch (error) {
        if (error.response && error.response.data) {
            const { code, message, data } = error.response.data;

            if (code === 401 && data === "Password is incorrect") {
                return { status: 'error', message: 'Password is incorrect' };
            }
            else if (code === 404 && data === "Email not found" ) {
                return { status: 'Validation Errors', message: "Email not found"};
            }
            else {
                return { status: 'error', message: message || 'An unknown error occurred' };
            }
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
}

export default login;
