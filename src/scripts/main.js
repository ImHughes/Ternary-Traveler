import API from "./dbCalls";
import TravelTemplet from "./travelBuilder"

//testing import of dbcalls and calling getAllPlaces
API.getAllPlaces()
    .then(places => {
        console.log(places);
    });
API.getAllInterests()
    .then(interests => {
        console.log(interests)
    })

TravelTemplet.travelBuilder()