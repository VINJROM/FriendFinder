// Import list of friend entries
var friends = require("../data/friends.js");

// Export API routes
module.exports = function(app) {

    // List of all friend entries
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Add new friend entry
    app.post('/api/friends', function(req, res) {
        // Captures user input
        var userInput = req.body;

        var userResponses = userInput.scores;

        // Computes best friend match
        var matchName = "";
        var matchImage = "";
        var totalDiff = Infinity;

        // Examines all friends in list
        for (var i = 0; i < friends.length; i++) {

            // Computes differences from each question
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j])
            }

            // If lowest difference, record match
            if (diff < totalDiff) {

                totalDiff = diff;
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
            }
        }

        // Add new user
        friends.push(userInput);

        // Sends appropriate response
        res.json({ matchName: matchName, matchImage: matchImage });
    });
};