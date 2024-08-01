import axios from 'axios';

const sendEmail = async (data) => {
    const url = 'http://localhost:8083/api/v1/auth/forget-password';

    try {
        const response = await axios.post(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });
      
        if (response.data.message === "Otp sent successfully") {
            return { status: 'success', message: 'Otp sent successfully'};
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    } catch (error) {
        console.error(error);  // Log the error
        if (error.response && error.response.data) {
            const { code, message, data } = error.response.data;
            if (data === "Email not found") {
                return { status: 'error', message: 'Email not found' };
            } else {
                return { status: 'error', message: message || 'An unknown error occurred' };
            }
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }

}

const validateOTP = async (data) => {
    const url = 'http://localhost:8083/api/v1/auth/validate-otp';

    try {
        const response = await axios.post(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        if (response.data.message === "Otp validated successfully") {
            return { status: 'success', message: 'Otp validated successfully' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    } catch (error) {
        console.error(error);  // Log the error
        if (error.response && error.response.data) {
            const { code, message, data } = error.response.data;
            if (data === "Otp not found") {
                return { status: 'error', message: 'Otp not found' };
            } else {
                return { status: 'error', message: message || 'An unknown error occurred' };
            }
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }

}

const resetPw = async (data) => {
    const url = 'http://localhost:8083/api/v1/auth/reset-password';

    try {
        const response = await axios.post(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        if (response.data.message === "Password reset successfully") {
            return { status: 'success', message: 'Password reset successfully' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    } catch (error) {
        console.error(error);  // Log the error
        if (error.response && error.response.data) {
            const { code, message, data } = error.response.data;
            if (data === "Email not found") {
                return { status: 'error', message: 'Email not found' };
            }
            else if (data === "Otp not found") {
                return { status: 'error', message: 'Otp not found' };
             }
            else {
                return { status: 'error', message: message || 'An unknown error occurred' };
            }
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }

}

export {sendEmail, validateOTP,resetPw};
