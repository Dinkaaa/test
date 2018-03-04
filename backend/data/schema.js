var graphql = require('graphql');
var data = require('./database');

var projectsType = new graphql.GraphQLObjectType({
    name:'Project',
    fields:{
        id:{
            type: graphql.GraphQLInt
        },
        name:{
            type: graphql.GraphQLString
        }
    }
        
});

var userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: function () {
        return {
                    name: {
                    type: graphql.GraphQLString
                    },
                    id: {
                        type: graphql.GraphQLString
                    },
                    projects:{
                        type: new graphql.GraphQLList(projectsType),
                        resolve: function(root, args){
                            return data.getProjects(root.id);
                        }
                    }
               }
        
    }
});


//var queryType = new graphql.GraphQLObjectType({
//    name: 'Query',
//    fields: {
//        user: {
//            type: userType,
//            args: {
//                id: {
//                    type: graphql.GraphQLString
//                }
//            },
//            resolve: function (root, args) {
//                return data.users[args.id];
//            }
//        }
//    }
//});
//var queryType = new graphql.GraphQLObjectType({
//    name: 'Query',
//    fields: function() {
//        return {
//             users: {
//                type: new graphql.GraphQLList(userType),
//                resolve: function(){
//                    console.log(data.users);
//                return data.users;
//                
//            }
//        }
//    }
//       
//    }
//});
//var queryType = new graphql.GraphQLObjectType({
//    name: 'Query',
//    fields: function() {
//        return {
//             users: {
//                type: new graphql.GraphQLList(userType),
//                resolve: function(){
//                    console.log(data.users);
//                return data.users;
//                
//            }
//        }
//    }
//       
//    }
//});

const queryType = new graphql.GraphQLObjectType({
  name: 'TodoMutation',
  fields: {
    users: {
      type: new graphql.GraphQLList(userType),
                resolve: function(){
                    return data.users;
                
            }
    },
    getUser: {
      type: userType,
        args: {
            id: {
                type: graphql.GraphQLString
            }
        },
        resolve: function (root, args) {
            return data.users[args.id-1];
        }
    }
  }
})
var schema = new graphql.GraphQLSchema({
    query: queryType
});

module.exports = schema;