/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

function getUserQuery() {
//    value of searchfield is put into var userQuery
    var config = {
        userQuery : document.getElementById("user-input-field").value,
        _apiUrl :'https://www.rijksmuseum.nl/api/nl/collection?key=epHseGj4&format=json&q='
    }
    
    
    
    //request json data
    aja()
        .url(config._apiUrl + config.userQuery)
        .on('success', function(obj){
            console.log(obj);
            console.log("api is loaded");
            var _html = '';
            obj.artObjects.map(function(element){
                _html += '<div class="media-item"> <h1>' +element.principalOrFirstMaker + '</h1> <p>' + element.title + '</p>';

                if (element.webImage !== null) {
                    _html += '<img src = "' + element.webImage.url + '" alt = ' + element.title + '/> </div>'
                } else {
                    _html += '<p> Er is helaas geen foto beschikbaar.</p> </div>'
                }
                });
            document.getElementById("queryResult").innerHTML = _html;
        })
        .go();
}
 