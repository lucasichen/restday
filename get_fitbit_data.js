// const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzdZSzMiLCJzdWIiOiI5VFA5QjIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCByd2VpIHJociBycHJvIHJudXQgcnNsZSIsImV4cCI6MTY0MjgyODE4NSwiaWF0IjoxNjQyMjIzMzg1fQ.yEOtbbajAbnpGOjGrdmBagNq1PKrvYtGnGQPWEzBs9Q.eyJhdWQiOiIyMzdZSzMiLCJzdWIiOiI5VFA5QjIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCByd2VpIHJociBybnV0IHJwcm8gcnNsZSIsImV4cCI6MTY0MjgyODAxNCwiaWF0IjoxNjQyMjIzMjE0fQ.HcArw9AyiIu6hCSDefWkYhFS8cQhzkkcPGDddDJtVcI&user_id=9TP9B2.eyJhdWQiOiIyMzdZSzMiLCJzdWIiOiI5VFA5QjIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCByd2VpIHJociBybnV0IHJwcm8gcnNsZSIsImV4cCI6MTY0MjgyMzg0MywiaWF0IjoxNjQyMjE5MDQzfQ.KX8M4p6NAdYTjNWOMzN5SwJiErUyWdFH3AW2DzjOC0M";

// fetch('https://api.fitbit.com/1/user/9TP9B2/profile.json', {
//     method: "GET",
//     headers: {"Authorization": "Bearer " + access_token}
// })
// .then(response => response.json())
// .then(json => console.log(json));
// console.log(json)
class Get {
    constructor(access_token,userId) {
        this.access_token = access_token;
        this.userId = userId;
    }
    today(){
        var present = new Date();
        var today = present.getFullYear() + '-' + present.getMonth() + '-' + present.getDate();
        return today;
    }
    last_week(){
        var last_week = new Date();
        var last = last_week.getFullYear() + '-' + last_week.getMonth() + '-' + last_week.getDate()-7;
        return last;
    }
    sleep_log(){
        let sleep = 'https://api.fitbit.com/1/user/' + this.access_token + '/sleep/list.json';
        return sleep; 
    }

    heart_rate_log(start_date,end_date) {
        let heart_rate = 'https://api.fitbit.com/1/user/' + this.access_token + 'activities/heart/date/' + start_date + '/' + end_date + '.json';
        return heart_rate;
    }

    activity_log(start_date,end_date) {
        let activity = 'https://api.fitbit.com/1/user/' + this.access_token + '/activities/list.json?afterDate=' + start_date + '&beforeDate=' + end_date; 
        return activity;
    }
}
// get the url 
var url = window.location.href;

//getting the access token from url 
var access_token = url.split("#")[1].split("=")[1].split("&")[0]; 

// get the userid 
var userId = url.split("#")[1].split("=")[2].split("&")[0]; 

console.log(access_token); 
console.log(userId);

let get = new Get(access_token,userId);

var xhr = new XMLHttpRequest();
xhr.open('GET', get.sleep_log);
xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(xhr.responseText)
    }
};
xhr.send()