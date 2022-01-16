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
    sleep_log(start_date) {
        let url = 'https://api.fitbit.com/1/user/' + this.userId + '/sleep/list.json?afterDate='+start_date+'&offset=0&limit=07&sort=asc';
        fetch(url, {
            method: "GET",
            headers: {"Authorization": "Bearer " + this.access_token}
        })
        .then(response => response.json())
        .then(json => console.log("sleep: ",json));
    }
    // async sleep_log(start_date){
    //     let url = 'https://api.fitbit.com/1/user/' + this.userId + '/sleep/list.json?afterDate='+start_date+'&offset=0&limit=07&sort=asc';
        // fetch(url, {
        //     method: "GET",
        //     headers: {"Authorization": "Bearer " + this.access_token}
        // })
        // .then(function (response) {
        //     return response.json;
        // })
        // .then(function (obj) {
        //     console.log(obj);
        // })
        // .catch(function (error) {
        //     console.log("error");
        // });
        
        // let Data = await fetch(url, {
        //     method: "GET",
        //     headers: {"Authorization": "Bearer " + this.access_token}
        // })
        // .then(response => response.json())
        // .then(json => {
        //     // console.log(Data);
        //     // console.log("Sleep Log: ",json.sleep)
        // });

        // const Data = await fetch(url, {
        //     method: "GET",
        //     headers: {"Authorization": "Bearer " + this.access_token}
        // });
        // ;


        // console.log(Data.json());
        // return Data;
    // }
    
    // async sleep_log1(start_date) {
    //     var Data;
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'https://api.fitbit.com/1/user/' + this.userId + '/sleep/list.json?afterDate='+start_date+'&offset=0&limit=07&sort=asc');
    //     xhr.setRequestHeader("Authorization", 'Bearer ' + this.access_token);
    //     xhr.send();
    //     xhr.onload = await function () {
    //         if (xhr.readyState == 4 && (xhr.status == 200)) {
    //             // console.log("ready to send sleep log");
    //             Data = JSON.parse(xhr.responseText).sleep[0].duration;
    //         }
    //         console.log("called");
    //         return 1;
    //     };
        
    //     return await Data;
    // }
    // Need more permissons
    heart_rate_log(start_date) {
        let heart_rate = 'https://api.fitbit.com/1/user/' + this.userId + '/activities/heart/date/' + start_date + '/today.json';
        fetch(heart_rate, {
            method: "GET",
            headers: {"Authorization": "Bearer " + this.access_token}
        })
        .then(response => response.json())
        .then(json => console.log("Heart Rate log: ",json));
    }

    activity_log(start_date) {
        let activity = 'https://api.fitbit.com/1/user/' + this.userId + '/activities/list.json?afterDate='+start_date+'&offset=0&limit=07&sort=asc'; 
        fetch(activity, {
            method: "GET",
            headers: {"Authorization": "Bearer " + this.access_token}
        })
        .then(response => response.json())
        .then(json => console.log("Activities: ",json.activities));
    }
    recent_activities() {
        let activity = 'https://api.fitbit.com/1/user/'+ this.userId +'/activities/recent.json'
        fetch(activity, {
            method: "GET",
            headers: {"Authorization": "Bearer " + this.access_token}
        })
        .then(response => response.json())
        .then(json => console.log("Activities: ",json));
    }

}
class Send {
    constructor(access_token,user_id) {
        this.access_token = access_token;
        this.userId = user_id;
    }
    activity_log(startTime,duration,date) {
        let activity = 'https://api.fitbit.com/1/user/'+ this.userId +'/activities.json?activityId=91043&startTime='+startTime+'&durationMillis='+(duration*60000)+'&date='+date;
        fetch(activity, {
            method: "POST",
            headers: {"Authorization": "Bearer " + this.access_token}
        })
        .then(response => response.json())
        .then(json => console.log(json));
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
let access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzdZSzMiLCJzdWIiOiI5VFA5QjIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCIsImV4cCI6MTY0Mjg5NjM4MCwiaWF0IjoxNjQyMjkxNTgwfQ._ylZArEnIHuocOXKtSz5w1wXWBr03odFknWIxgkub9Y';
let user_id = '9TP9B2';
let get = new Get(access_token,user_id);
let send = new Send(access_token,user_id);

get.sleep_log(get.last_week());
// let data = get.sleep_log(get.last_week());
// var j;
// data
// .then(response => response.json())
// .then(json => {
//     j = json;
//     console.log(j);
// });
// console.log(j);

// console.log(data);
// get.activity_log(get.last_week());
// get.heart_rate_log(get.last_week());
// get.recent_activities();
// send.activity_log('05:15',60,get.today());
