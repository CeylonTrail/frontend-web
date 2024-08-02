import axios from 'axios';

const add_comment = async (data) => {
    const url = 'http://localhost:8083/api/v1/comment';

    try {
        const response = await axios.post(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });
        console.log(response.data);
        if (response.data.message === "Comment added successfully") {
            return { status: 'success', message: response.data.message};
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    } catch (error) {
        console.error(error);
        if (error.response) {
            return { status: 'error', message: error.response.data.data || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
}

const update_comment = async (data) => {
    const url = 'http://localhost:8083/api/v1/comment';

    try {
        const response = await axios.put(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });
        console.log(response.data);
        if (response.data.message === "Post updated successfully") {
            return { status: 'success', message: response.data.message};
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    } catch (error) {
        console.error(error);
        if (error.response) {
            return { status: 'error', message: error.response.data.data || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
}

const remove_comment = async (data) => {
    const url = 'http://localhost:8083/api/v1/comment';

    try {
        const response = await axios.delete(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });
        console.log(response.data);
        if (response.data.message === "Comment deleted successfully") {
            return { status: 'success', message: response.data.message};
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    } catch (error) {
        console.error(error);
        if (error.response) {
            return { status: 'error', message: error.response.data.data || 'An unknown error occurred' };
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }
}


export default {
    add_comment,
    update_comment,
    remove_comment
}