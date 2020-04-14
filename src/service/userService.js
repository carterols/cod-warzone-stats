import axios from 'axios';

const COD_API_BASE_URL = "https://pacific-badlands-14289.herokuapp.com";

export default {
    getUser: async (user, platform) => {
        const uid = user.replace("#", "%23");
        const url = `${COD_API_BASE_URL}/stats/platform/${platform}/gamer/${uid}/profile`;
        const res = await axios.get(url);

        if (res.data.status !== 'error') {
            return res.data;
        } else {
            return null;
        }
    },
    getFriendsStats: async (user, platform) => {
        const uid = user.replace("#", "%23");
        const url = `${COD_API_BASE_URL}/stats/platform/${platform}/gamer/${uid}/friends`;
        const res = await axios.get(url);

        if (res.data.status !== 'error') {
            return res.data;
        } else {
            return null;
        }
    },
    getRecentMatches: async (user, platform) => {
        const uid = user.replace('#', '%23');
        const res = await axios.get(`${COD_API_BASE_URL}/matches/platform/${platform}/user/${uid}`);
        return res.data;
    }
}