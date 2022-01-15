
class Get {
    constructor(access_token,user_id) {
        this.access_token = access_token;
        this.userId = user_id;
    }
    today(){
        var present = new Date();
        let today = present.getFullYear() + '-' + present.getMonth()+1 + '-' + present.getDate();
        return today;
    }
    last_week(){
        var last_week = new Date();
        var last_date = last_week.getDate()-7;

        // If day doesn't have leading zero
        if(last_date < 10) last_date = '0' + last_date;
        let last = last_week.getFullYear() + '-' + last_week.getMonth()+1 + '-' + last_date;
        return last;
    }
    sleep_log(start_date){
        let sleep = 'https://api.fitbit.com/1/user/' + this.userId + '/sleep/list.json?afterDate='+start_date+'&offset=0&limit=07&sort=asc';

        fetch(sleep, {
            method: "GET",
            headers: {"Authorization": "Bearer " + this.access_token}
        })
        .then(response => response.json())
        .then(json => console.log("Sleep Log: ",json.sleep));
    }
    // Need more permissons
    // heart_rate_log(start_date) {
    //     let heart_rate = 'https://api.fitbit.com/1/user/' + this.userId + 'activities/heart/date/' + start_date + '/today.json';
    //     return heart_rate;
    // }

    activity_log(start_date) {
        let activity = 'https://api.fitbit.com/1/user/' + this.userId + '/activities/list.json?afterDate='+start_date+'&offset=0&limit=07&sort=asc'; 
        fetch(activity, {
            method: "GET",
            headers: {"Authorization": "Bearer " + this.access_token}
        })
        .then(response => response.json())
        .then(json => console.log("Activities: ",json.activities));
    }
}
// get the url 
// var url = window.location.href;

// //getting the access token from url 
// var access_token = url.split("#")[1].split("=")[1].split("&")[0]; 

// // get the userid 
// var userId = url.split("#")[1].split("=")[2].split("&")[0]; 

// console.log(access_token); 
// console.log(userId);


// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.fitbit.com/1/user/-/sleep/list.json');
// xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         console.log(xhr.responseText)
//     }
// };
// xhr.send()

// ----- Testing Area -----

let get = new Get(access_token,user_id);
get.sleep_log(get.last_week());
get.activity_log(get.last_week());
