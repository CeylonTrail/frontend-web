import axios from 'axios';

export default (data) => {
    const url = 'http://localhost:8083/api/v1/auth/register';
 

    axios.post(url, data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    })
        .then((response) => {
            if (response.status === 200 && response.message === 'Registration success') {
                return "success";
            } else {
                return "something went wrong";
            }
        })
        .catch(error => {
            if (error.response && error.response.data) {
                const { code, message, data } = error.response.data;
                if (code === 409 && data === "Email is already taken!") {
                    console.log("Email Taken signup");
                    return "Email Taken";
                } else {
                    return `Error: ${message}`;
                }
            } else {
                return 'An unknown error occurred';
            }
        });
}
