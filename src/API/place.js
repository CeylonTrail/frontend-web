import axios from 'axios';

const token= localStorage.getItem("token");

const get_nearby_places = async (location) => {
    const url = `http://localhost:8083/api/v1/traveller/places`;
    
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${token}`,
            },
            params: {
                location: location,
            },
        });
        console.log("api")
        if (response.data.code === 200) {
            return { status: 'success', message: 'Fetching nearby places success', places: response.data.data };
        }else if(response.data.code===401){
            return { status: 'JWTerror', message: 'Session expired. Please login again.' };       
        } else {
            return { status: 'error', message: response.data.message };
        }
    } catch (error) {
        return { status: 'error', message: error.response.message || 'An unknown error occurred' };
        
    }

}

const get_all_places = async () => {
    const url = 'http://localhost:8083/api/v1/traveller/get-all-places';

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization':`Bearer ${token}`,
            },
            params:{
                page : 0
            }
        });
     
        if (response.data.code === 200) {
            return { status: 'success', message: 'Fetching all places success', places: response.data.data };
        }else if(response.data.code===401){
            return { status: 'JWTerror', message: 'Session expired. Please login again.' };  
        } else {
            return { status: 'error', message: response.data.message };
        }
    } catch (error) {
        return { status: 'error', message: error.response.message || 'An unknown error occurred' };
    }

}

export default {
    get_nearby_places,
    get_all_places,
  };