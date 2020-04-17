import axios from 'axios';

const COD_API_BASE_URL = "https://pacific-badlands-14289.herokuapp.com";

export default {
    getUser: async (user, platform) => {
        const uid = user.replace("#", "%23");
        const url = `${COD_API_BASE_URL}/stats/platform/${platform}/gamer/${uid}/profile`;

        try {
            const res = await axios.get(url);
            return res.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    getFriendsStats: async (user, platform) => {
        const uid = user.replace("#", "%23");
        const url = `${COD_API_BASE_URL}/stats/platform/${platform}/gamer/${uid}/friends`;
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    getRecentMatches: async (user, platform) => {
        const uid = user.replace('#', '%23');
        const url = `${COD_API_BASE_URL}/matches/platform/${platform}/user/${uid}`;
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}