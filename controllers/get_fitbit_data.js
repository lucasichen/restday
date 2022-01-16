class Get {
    constructor(access_token,user_id) {
        this.access_token = access_token;
        this.userId = user_id;
    }
    // Present day 
    today(){
        var present = new Date();
        let today = present.getFullYear() + '-' + present.getMonth()+1 + '-' + present.getDate();
        return today;
    }
    // Present day - 7
    last_week(){
        var last_week = new Date();
        var last_date = last_week.getDate()-7;

        // If day doesn't have leading zero
        if(last_date < 10) last_date = '0' + last_date;
        let last = last_week.getFullYear() + '-' + last_week.getMonth()+1 + '-' + last_date;
        return last;
    }

    //Get Sleep log of past 7 days
    async sleep_log() {
        try {
            let url = 'https://api.fitbit.com/1/user/' + this.userId + '/sleep/list.json?afterDate='+get.last_week()+'&offset=0&limit=07&sort=asc';
            const response = await fetch(url,{method: "GET",headers: {"Authorization": "Bearer " + this.access_token}});
            const json = await response.json();
            console.log("Sleep Log:",json.sleep);
            var sleep_time = [];
            for(let i = 0; i<7;i++) {
                sleep_time.push((json.sleep[i].duration)/3600000);
            }
            console.log("To array:",sleep_time);

            // Return array of past 7 days of sleep (day 08- day 15)
            return sleep_time;
        } catch (error) {
            console.error(error);
        }finally{
            this.setState({ isLoading: false });
        }
    }
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

    // Get Activity log of past 7 days
    async activity_log() {
        try {
            let url = 'https://api.fitbit.com/1/user/' + this.userId + '/activities/list.json?afterDate='+get.last_week()+'&offset=0&limit=07&sort=asc';
            const response = await fetch(url,{method: "GET",headers: {"Authorization": "Bearer " + this.access_token}});
            const json = await response.json();
            console.log("Activity Log:",json.activities);
            var activity_dur = [];
            for(let i = 0; i<7;i++) {
                activity_dur.push((json.activities[i].duration)/60000);
            }
            console.log("To array (min):",activity_dur);

            // Return array of past 7 days of activity (day 08- day 15)
            return activity_dur;
        } catch (error) {
            console.error(error);
        }
        finally{
            this.setState({ isLoading: false });
        }
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

// ----- Testing Area -----
let access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzdZSzMiLCJzdWIiOiI5VFA5QjIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCIsImV4cCI6MTY0Mjg5NjM4MCwiaWF0IjoxNjQyMjkxNTgwfQ._ylZArEnIHuocOXKtSz5w1wXWBr03odFknWIxgkub9Y';
let user_id = '9TP9B2';
let get = new Get(access_token,user_id);
let send = new Send(access_token,user_id);

get.sleep_log();
get.activity_log();
// get.heart_rate_log(get.last_week());
// get.recent_activities();
// send.activity_log('05:15',60,get.today());
