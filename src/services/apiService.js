import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    //submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('userImage', image);
    data.append('role', role);

    return axios.post('api/v1/participant', data);
}

export { postCreateNewUser }