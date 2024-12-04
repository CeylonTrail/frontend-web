import axios from "axios";

export const set_marketplace = async (formData) => {
  const url = "http://localhost:8083/api/v1/sp/setup";

  try {
    const response = await axios.post(url, formData, {
      headers: {
          "Content-Type": "multipart/form-data",
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
    console.error("Error submitting marketplace data", error);
    throw error;
  }
};

export const edit_marketplace = async (id, formData) => {
    const url = `http://localhost:8083/api/v1/sp/${id}`;

    try {
      const response = await axios.put(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
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
      console.error("Error submitting marketplace data", error);
      throw error;
    }
  };

export const get_sp_profile = async () => {
  const url = `http://localhost:8083/api/v1/sp/profile`;

  try {
      const response = await axios.get(url , {
          headers: {
              'Content-Type': 'application/json', 
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      if (response.data.code === 200)
          return { status: 'success', message: response.data.message, data: response.data.data };
      else if (response.data.code === 401)
          return { status: 'unauthorized', message: response.data.message };
      else
          return { status: 'error', message: 'An unknown error occurred' };

  } catch (error) {
      console.error(error);
      if (error.response) {
          return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
      } else {
          return { status: 'error', message: 'An unknown error occurred' };
      }
  }
};

export const create_ad = async (form) => {
  const url = `http://localhost:8083/api/v1/sp/advertisement`;

  try {
      const response = await axios.post(url, form, {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      if (response.data.code === 200)
          return { status: 'success', message: response.data.message, data: response.data.data };
      else if (response.data.code === 401)
          return { status: 'unauthorized', message: response.data.message };
      else
          return { status: 'error', message: 'An unknown error occurred' };

  } catch (error) {
      console.error(error);
      if (error.response) {
          return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
      } else {
          return { status: 'error', message: 'An unknown error occurred' };
      }
  }
};

export const update_ad = async (id, form) => {
  const url = `http://localhost:8083/api/v1/sp/advertisement/${id}`;

  try {
      const response = await axios.put(url, form, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      if (response.data.code === 200)
          return { status: 'success', message: response.data.message, data: response.data.data };
      else if (response.data.code === 401)
          return { status: 'unauthorized', message: response.data.message };
      else
          return { status: 'error', message: 'An unknown error occurred' };

  } catch (error) {
      console.error(error);
      if (error.response) {
          return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
      } else {
          return { status: 'error', message: 'An unknown error occurred' };
      }
  }
};

export const get_ad = async (id) => {
  const url = `http://localhost:8083/api/v1/sp/advertisement/${id}`;

  try {
      const response = await axios.get(url, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      if (response.data.code === 200)
          return { status: 'success', message: response.data.message, data: response.data.data };
      else if (response.data.code === 401)
          return { status: 'unauthorized', message: response.data.message };
      else
          return { status: 'error', message: 'An unknown error occurred' };

  } catch (error) {
      console.error(error);
      if (error.response) {
          return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
      } else {
          return { status: 'error', message: 'An unknown error occurred' };
      }
  }
};

export const remove_ad = async (id) => {
  const url = `http://localhost:8083/api/v1/sp/advertisement/${id}`;

  try {
      const response = await axios.delete(url, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      if (response.data.code === 200)
          return { status: 'success', message: response.data.message, data: response.data.data };
      else if (response.data.code === 401)
          return { status: 'unauthorized', message: response.data.message };
      else
          return { status: 'error', message: 'An unknown error occurred' };

  } catch (error) {
      console.error(error);
      if (error.response) {
          return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
      } else {
          return { status: 'error', message: 'An unknown error occurred' };
      }
  }
};

export const set_active_ad = async (id) => {
  const url = `http://localhost:8083/api/v1/sp/advertisement/set-active/${id}`;

  try {
      const response = await axios.get(url, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      if (response.data.code === 200)
          return { status: 'success', message: response.data.message, data: response.data.data };
      else if (response.data.code === 401)
          return { status: 'unauthorized', message: response.data.message };
      else
          return { status: 'error', message: 'An unknown error occurred' };

  } catch (error) {
      console.error(error);
      if (error.response) {
          return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
      } else {
          return { status: 'error', message: 'An unknown error occurred' };
      }
  }
};

export const set_inactive_ad = async (id) => {
  const url = `http://localhost:8083/api/v1/sp/advertisement/set-inactive/${id}`;

  try {
      const response = await axios.get(url, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      if (response.data.code === 200)
          return { status: 'success', message: response.data.message, data: response.data.data };
      else if (response.data.code === 401)
          return { status: 'unauthorized', message: response.data.message };
      else
          return { status: 'error', message: 'An unknown error occurred' };

  } catch (error) {
      console.error(error);
      if (error.response) {
          return { status: 'error', message: error.response.data.message || 'An unknown error occurred' };
      } else {
          return { status: 'error', message: 'An unknown error occurred' };
      }
  }
};

const api = { 
  set_marketplace,
  get_sp_profile,
  create_ad,
  update_ad,
  get_ad,
  remove_ad,
  set_active_ad,
  set_inactive_ad
 };

export default api;
