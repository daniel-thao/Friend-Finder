const express = require("express");

const router = express.Router();

const friend = require("../models/friend.js");



// Homepage layout
router.get("/", function(req, res) {
    res.render("./partials/homepage");
})



// THIS creates the page that displays the json version of all the friends in the table
router.get("/api/friends", function (req, res) {
    friend.all(function (data) {
        const hbsObject = {
            makeFriends: data
        };
        // Atleast this guy is working
        return res.json(data);
    });
});

router.get("/selfInput", function(req, res) {
    res.render("./partials/friend")
})

router.get("/matches", function(req, res) {
    res.render("./partials/matches")
})



// router.put("/api/cats/:id", function (req, res) {
//     const condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     friend.update({
//         sleepy: req.body.sleepy
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });



// Export routes for server.js to use.
module.exports = router;
