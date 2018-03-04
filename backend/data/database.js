var users = [
    {
        "id": "1",
        "name": "Dana Banana",
        "projects": [1]
    },
     {
        "id": "2",
        "name": "Tom Harvel",
        "projects": [1]
    },
     {
        "id": "3",
        "name": "John Smith",
        "projects": [2]
    },
     {
        "id": "4",
        "name": "Mot Levis",
        "projects": [2, 3]
    }
];
var projects = [
    {
        id:1,
        name: "Data Service"
    },
    {
        id:2,
        name: "Casir Client"
    },
    {
        id:3,
        name: "ShotaPro"
    }
];
exports.getProjects = function(userid){
    return users[userid-1].projects.map(function(pid){
        return projects[pid-1];
    });
}
exports.users = users;