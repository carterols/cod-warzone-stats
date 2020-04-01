import axios from 'axios';

const COD_API_BASE_URL = "https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/";
const COD_LOGIN = "https://profile.callofduty.com/cod/login";

export default {
    getUser: async (user, platform) => {
        const uid = user.replace("#", "%23");
        const url = `${COD_API_BASE_URL + platform}/gamer/${uid}/profile/type/mp`;
        const res = await axios.get(url);

        if (res.data.status !== 'error') {
            return res.data;
        } else {
            return null;
        }
    },
    getFriendsStats: async (user, platform) => {
        const uid = user.replace("#", "%23");
        const url = `${COD_API_BASE_URL + platform}/gamer/${uid}/profile/friends/type/mp`;
        const res = await axios.get(url);

        if (res.data.status !== 'error') {
            return res.data;
        } else {
            return null;
        }
    }
}