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

const saved_trips = async () => {
    const url = 'http://localhost:8083/api/v1/traveller/saved-trips';

    try {
        const response = await axios.get(url,  {
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
            return { status: 'error', message: error.message||'An unknown error occurred' };
        
    }

}

const save_trip = async (trip_id) => {
    const url = `http://localhost:8083/api/v1/traveller/save-trip/${trip_id}`;

    try {
        const response = await axios.get(url,  {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        });
        
        if (response.data.code === 200)
            return { status: 'success', message: response.data.message};
        else if (response.data.code === 401)
            return { status: 'unauthorized', message: response.data.message };
        else
            return { status: 'error', message: 'An unknown error occurred' };

    } catch (error) {
            return { status: 'error', message: error.message||'An unknown error occurred' };
        
    }

}

const get_trip = async (trip_id) => {
    const url = `http://localhost:8083/api/v1/traveller/get-trip/${trip_id}`;

    try {
        const response = await axios.get(url,  {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        });
        
        if (response.data.code === 200)
            return { status: 'success', message: response.data.message ,data:response.data.data};
        else if (response.data.code === 401)
            return { status: 'unauthorized', message: response.data.message };
        else
            return { status: 'error', message: 'An unknown error occurred' };

    } catch (error) {
            return { status: 'error', message: error.message||'An unknown error occurred' };
        
    }

}

const all_trip = async () => {
    const url = 'http://localhost:8083/api/v1/traveller/all-trip';

    try {
        const response = await axios.get(url,  {
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
            return { status: 'error', message: error.message||'An unknown error occurred' };
        
    }

}

const delete_trip = async (trip_id) => {
    const url = `http://localhost:8083/api/v1/traveller/delete-trip/${trip_id}`;

    try {
        const response = await axios.delete(url,  {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        });
        
        if (response.data.code === 200)
            return { status: 'success', message: response.data.message};
        else if (response.data.code === 401)
            return { status: 'unauthorized', message: response.data.message };
        else
            return { status: 'error', message: 'An unknown error occurred' };

    } catch (error) {
            return { status: 'error', message: error.message||'An unknown error occurred' };
        
    }

}
export default {
    plan_trip,
    save_trip,
    saved_trips,
    get_trip,
    all_trip,
    delete_trip
}