import axios from 'axios';

const create_post = async (data) => {
    const url = 'http://localhost:8083/api/v1/post';

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data', 
                'Accept': 'application/json'
            },
        });
        console.log(response.data);
        if (response.data.code === 200) {
            return { status: 'success', message: response.data.message};
        } else {
            return { status: 'error', message: 'An unknown error occurred1' };
        }
    } catch (error) {
        console.error(error);
        if (error.response) {
            const {code, message} = error.response.data;
            if (code === 400) {
                return { status: 'error', message: 'Image upload fail' };
            } else {
                return { status: 'error', message: message || 'An unknown error occurred' };
            }
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    }

}

const update_post = async (data) => {
    const url = 'http://localhost:8083/api/v1/post';

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

const delete_post = async (data) => {
    const url = 'http://localhost:8083/api/v1/post';

    try {
        const response = await axios.delete(url, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });
        console.log(response.data);
        if (response.data.message === "Post deleted successfully") {
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

const add_like_post = async (postID) => {
    const url = `http://localhost:8083/api/v1/post/add-like/${postID}`;

    try {
        const response = await axios.put(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });
        if (response.data.code==200) {
            return { status: 'success', message: response.data.message};
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    } catch (error) {
        return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
    }  

}

const remove_like_post = async (postID) => {
    const url = `http://localhost:8083/api/v1/post/remove-like/${postID}`;

    try {
        const response = await axios.put(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });
        console.log(response.data);
        if (response.data.code==200) {
            return { status: 'success', message: response.data.message};
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    } catch (error) {
        return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
    }    
    

}

const get_post_by_postId = async (data) => {
    const url = `http://localhost:8083/api/v1/post/${data.postId}`;

    try {
        const response = await axios.get(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        console.log(response.data);
        if (response.data.message === "Post fetched successfully") {
            return { status: 'success', message: response.data.message, data: response.data.data };
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

const get_user_post = async () => {
    const url = `http://localhost:8083/api/v1/post`;

    try {
        const response = await axios.get(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        console.log(response.data);
        if (response.data.message === "Posts fetched successfully") {
            return { status: 'success', message: response.data.message, data: response.data.data };
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

const get_community_post= async () => {
    const url = `http://localhost:8083/api/v1/post/community-feed`;

    try {
        const response = await axios.get(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        console.log(response.data);
        if (response.data.message === "Posts fetched successfully") {
            return { status: 'success', message: response.data.message, data: response.data.data };
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

const get_public_community_post = async () => {
    const url = `http://localhost:8083/api/v1/post/community-feed/public`;
    console.log("api")
    try {
        const response = await axios.get(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });
        if (response.data.message === "Posts fetched successfully") {
            return { status: 'success', message: response.data.message, data: response.data.data };
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

const report_post=async(postId,reason)=>{
    const url = `http://localhost:8083/api/v1/post/report/${postId}`;

    try {
        const response = await axios.post(url, reason, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
        });
        if (response.data.code === 200) {
            return { status: 'success', message: response.data.message};
        } else {
            return { status: 'error', message: 'An unknown error occurred' };
        }
    } catch (error) {      
        return { status: 'error', message: error.message || 'An unknown error occurred' };  
    }
}


export default {
    create_post,
    update_post,
    delete_post,
    add_like_post,
    remove_like_post,
    get_post_by_postId,
    get_user_post,
    get_community_post,
    get_public_community_post,
    report_post
}
