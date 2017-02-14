/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//This is an api request without microlibs, all vanilla!

// The function getUserQuery() corresponds with the button element in HTML, on click this function will commence:
function getUserQuery() {
    //all variables are stored in this config object, the userQuery is the value of what the user types in the input with the id 'user-input-field'. The property html is empty because we want the page to start with fresh html on every new search query. In the property url the first part of the url of the  API is stored, the query is added later in xhr.open().
    var config = {
        userQuery : document.getElementById("user-input-field").value,
        html : '',
        url : "https://www.rijksmuseum.nl/api/nl/collection?key=epHseGj4&format=json&q="
    };
 
    var xhr = new XMLHttpRequest(); //makes new xml http request (XHR)
    xhr.open("GET", config.url + config.userQuery, true); //userQuery is added to the url here

    xhr.onload = function() { /*when the xhr is loaded check if it has no error codes*/
            if (xhr.status >= 200 && xhr.status < 400) {
                //success!
                var data = JSON.parse(xhr.responseText); //parse the API through JSON to make it into an object
                
                data.artObjects.map(function(element){ //use the variable data to map (loop through and apply a function) the array artObjects, this is the array that contains all the properties of the API I want to use.

                        console.log(element);
                        config.html += '<div class="media-item"> <h1>' + element.principalOrFirstMaker + '</h1> <p>' + element.title + '</p>'; //add html about the maker of the art object also puts a div around each element so it will be much easier to style.

                        if (element.webImage !== null) { //check if an image is available when webImage is not equal to null it contains a url to the image
                            config.html += '<img src = "' + element.webImage.url + '" alt = ' + element.title + '/> </div>'; //add an image, if one is available.
                        } else {
                            config.html += '<p> Er is helaas geen foto beschikbaar.</p> </div>'; //when no image is available, display this text instead.
                        }
                });
                
                document.getElementById("queryResult").innerHTML = config.html; //this allows me to add html to the element with the id queryResults

            } else {
                console.log("an error occured"); //when the xhr finds gets an error message
            }
        };
    xhr.send(); //makes sure your request is send, whithout this the entire code doesn't work.
    
}
