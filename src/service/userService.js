import axios from 'axios';

const COD_API_BASE_URL = "https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/";

export default {
    getUser: async (user, platform) => {
        const uid = user.replace("#", "%23");
        const url = `${COD_API_BASE_URL + platform}/gamer/${uid}/profile/type/mp`;
        const res = await axios.get(url);
        return res.data;
    }
}