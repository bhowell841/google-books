import axios from "axios";
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q='
const APIKEY = "&key=AIzaSyC24lKC4eaSu80H280a3KevNjSjo_eu5Ao"
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};