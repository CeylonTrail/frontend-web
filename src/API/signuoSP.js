import axios from 'axios';

const signup = async (data) => {
    const url = 'http://localhost:8083/api/v1/auth/register-service-provider';

    try {
        const response = await axios.post(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        if (response.status === 200 && response.data.message === 'Registration success') {
            return { status: 'success', message: 'Registration success' };
        } else {
            return { status: 'error', message: 'Something went wrong' };
        }
    } catch (error) {
        if (error.response && error.response.data) {
            const { code, message, data } = error.response.data;

            if (code === 409 && data === "Email is already taken!") {
                return { status: 'error', message: 'Email is already taken' };
            }
            else if (code === 400 && message === "Validation Errors" && data.username[0] === "Username must be between 3 and 50 characters") {
                return { status: 'Validation Errors', message: data.username[0] };
            }
            else {
                return { status: 'error', message: message || 'An unknown error occurred' };
            }
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
}

export default signup;
