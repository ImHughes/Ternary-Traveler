import API from "./dbCalls"

const travelTemplet = {
    travelBuilder() {
        let POIBuilder = document.createElement("fieldset");


        let pointOfInterestInput = document.createElement("input");
        setAttributes(pointOfInterestInput, {
            type: "text",
            id: "POI"
        })
        pointOfInterestInput.setAttribute("for", "pointOfInterestName");
        pointOfInterestInput.setAttribute("id", "POI");
        pointOfInterestInput.setAttribute("class", "POIInputBox");
        pointOfInterestInput.setAttribute("name", "POI-name");
        pointOfInterestInput.placeholder = "Input point of interests";
        let body = document.querySelector(".mainPage")


        POIBuilder.appendChild(pointOfInterestInput);
        body.appendChild(POIBuilder)


        let descriptionBuilder = document.createElement("fieldset");


        let descriptionInput = document.createElement("input");
        setAttributes(descriptionInput, {
            type: "text",
            id: "Description"
        })
        descriptionInput.setAttribute("for", "descriptionName");
        descriptionInput.setAttribute("id", "Description");
        descriptionInput.setAttribute("class", "descriptionInputBox");
        descriptionInput.setAttribute("name", "description-name");
        descriptionInput.placeholder = "Input description";
        let descript = document.querySelector(".mainPage")


        descriptionBuilder.appendChild(descriptionInput);
        descript.appendChild(descriptionBuilder)



        let costBuilder = document.createElement("fieldset");


        let costInput = document.createElement("input");
        setAttributes(costInput, {
            type: "text",
            id: "cost"
        })
        costInput.setAttribute("for", "costName");
        costInput.setAttribute("id", "cost");
        costInput.setAttribute("class", "costInputBox");
        costInput.setAttribute("name", "cost-name");
        costInput.placeholder = "cost";
        let costHTML = document.querySelector(".mainPage")


        costBuilder.appendChild(costInput);
        costHTML.appendChild(costBuilder)


        let reviewBuilder = document.createElement("fieldset");

        let review = document.createElement("article");
        let reviewInput = document.createElement("input");
        setAttributes(reviewInput, {
            type: "text",
            id: "review"
        })
        reviewInput.setAttribute("for", "reviewName");
        reviewInput.setAttribute("id", "review");
        reviewInput.setAttribute("class", "reviewInputBox");
        reviewInput.setAttribute("name", "review-name");
        reviewInput.placeholder = "review";
        let reviewHTML = document.querySelector(".mainPage")

        reviewBuilder.appendChild(review);
        reviewBuilder.appendChild(reviewInput);
        reviewHTML.appendChild(reviewBuilder)

    }


}


function setAttributes(domElement, attributeObject) {
    for (const key in attributeObject) {
        if (attributeObject.hasOwnProperty(key)) {
            const value = attributeObject[key];
            domElement.setAttribute(key, value);
        }
    }
}
export default travelTemplet;