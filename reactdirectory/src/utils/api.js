import axios from "axios";

export default {
    getRandomPeople: function(){
        return axios.get("https://randomuser.me/api/?results=100&nat=us,dk,fr,gb")
    }
}