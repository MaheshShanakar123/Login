import { Fetch_Users, Fetch_Users_Success } from "./dasboardType";

export const fetchusersrequest = () => {
    return {
        type: Fetch_Users,
    }
}


export const fetchAllUsers = (data) => {
    console.log(data);
    return {
        type: Fetch_Users_Success,
        payload: data
    }
}

export function fetchPostsError() {
    return {
      type: "FETCH_ERROR"
    }
  }

const getAlltheDataFromUser = () => {
    var users = [];
    return (dispatch) => {
        dispatch(fetchusersrequest());
        return fetchPosts().then(([response, json]) =>{
            if(response.status === 200){
                console.log(json)
                dispatch(fetchAllUsers(json))
          }
        //   else{
        //     dispatch(fetchPostsError())
        //   }
        })
            // dispatch(fetchAllUsers(users))
    }
}

function fetchPosts() {
    const URL = "http://localhost:3000/login";
    return fetch(URL, { method: 'GET'})
       .then( response => Promise.all([response, response.json()]));
  }

export default getAlltheDataFromUser