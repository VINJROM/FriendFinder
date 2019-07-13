app.post("/api/friends", function(req, res) {
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: Infinity
    };
    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference;

    for (var i = 0; i < friends.length; i++) {
        var currentFriend = friends.length[i];
        totalDifference = 0;
        console.log(currentFriend.name);


    }
})