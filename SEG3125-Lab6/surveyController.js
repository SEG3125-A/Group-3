// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

// read the data file
function readData(fileName){
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName){
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}


// update the data file, I use "name" to be equal to the same file names as the data
// I assume we always just add 1 to a single item
function add_data(name, value){
    // console.log(value);
    info = readData(name);
     // will be useful for text entry, since the item typed in might not be in the list
	
	
	

	
    var found = 0;
    for (var i=0; i<info.length; i++){
		
        if (info[i][name] == value){
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0){
        info.push({[name] : value, count: 1});
    }
    writeData(info, name);
	
}

module.exports = function(app){


	// when a user goes to localhost:3000/analysis
    // serve a template (ejs file) which will include the data from the data files
    app.get('/analysis', function(req, res){
        var cornThoughts = readData("cornThoughts");
        var websiteColor = readData("websiteColor");
        var likeWebsite = readData("likeWebsite");
		var cornCooked = readData("cornCooked");
		var dislikeWebsite = readData("dislikeWebsite");
		var elementsWebsite = readData("elementsWebsite");
		var comments = readData("comments");
        res.render('showResults', {results: [cornThoughts, websiteColor, likeWebsite,cornCooked,dislikeWebsite,elementsWebsite,comments]});
        //console.log([color, fruit, animal]);
    });

	 // when a user clicks SUBMIT in localhost:3000/ 
    // the action.js code will POST, and what is sent in the POST
    // will be recuperated here, parsed and used to update the data files
    app.post('/', urlencodedParser, function(req, res){
        //console.log(req.body);
	
        var json = req.body;
        for (var key in json){
            console.log(key + ": " + json[key]);
			if (json[key].constructor===Array){
				
                for (var item in json[key]){
                    add_data(key, json[key][item]);
                }
            }
			else{
				add_data(key, json[key]);
			}
        }
		
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        res.sendFile(__dirname + "/views/index.html");
    });

	// when a user goes to localhost:3000/niceSurvey
	// serve a static html (the survey itself to fill in)
	app.get('/', function(req, res){
		res.sendFile(__dirname+'/views/index.html');
	});
	
	

	
}