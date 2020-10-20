import React from 'react';

function Calendar () {


    var gapi = window.gapi

    var CLIENT_ID = '175431051534-dmol38g5b0rngdooetllfc3hkca3hohe.apps.googleusercontent.com';
    var CLIENT_ID_2 = '287650802437-jf3rf15ev78in8a3qi0so069vo7ph4n8.apps.googleusercontent.com'
    var CLIENT_SECRET = 'uG3EXj8u8ltm-CyXgTvm-qRa';
    var API_KEY = 'AIzaSyBM2Cqs85RZZ5EryJJxMonIJhg8rMugLoA';
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar";

    const handleClick = () =>{
        gapi.load('client:auth2', () =>{
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID_2,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })
            gapi.client.load('calendar', 'v3', ()=> console.log('bam!'))

            //gapi.auth2.getAuthInstance().signIn()
                var calendarid = 'https://calendar.google.com/calendar/u/0?cid=ZWNhbGkzMDFAZ21haWwuY29t';
            
            
            gapi.client.calendar.events.list({
                'calendarId' : 'primary',
                'timeMin' : (new Date()).toISOString(),
                'showDeleted' : false,
                'singleEvents' : true,
                'maxResults' : 10,
                'orderBy' : 'startTime'
            }).then(response =>{
                const events = response.result.items
                console.log('EVENTS : ', events);
            })
        })
    }


    return(
        <div>
            <button onClick={handleClick}>Add Event</button>
        </div>
    );


}

export default Calendar;

//TODO : https://www.sivadass.in/using-google-calendar-api-with-react-js/