'use strict';

angular.module('zenTasksApp')
  .factory('Groups', function ($firebase, FIREBASE_URL, User) {
    /*
     * Firebase Ref
    */
      var ref = new Firebase(FIREBASE_URL + 'groups');

      var groups = $firebase(ref);

      var Group = {
        all: groups,

        create: function(group){
          if( User.signedIn()){
            var user = User.getCurrent();
            group.owner = user.username;
            return groups.$add(group).then(function(ref){
              var groupId = ref.name();
              groups.$child(groupId).$child('members').$add(user.username).then(function(ref){
                user.$child('groups').$child(groupId).$set(ref.name());
                return groupId;
              });
            });  
          }
         
        },
        find: function(groupId){
          return groups.$child(groupId);
        },

        delete: function(groupId){

          if (User.signedIn()){
            var group = Group.find(groupId);

            group.$on('loaded', function(){

              var user = User.findByUsername(group.owner);

              return groups.$remove(groupId).then(function(){
                user.$child('groups').$remove(groupId);
              });
            });
          }
        },

        join: function(groupId){
          if(User.signedIn()){
              var user = User.getCurrent();
              groups.$child(groupId).$child('members').$add(user.username).then(function(ref){
                  user.$child('groups').$child(groupId).$set(ref.name());
                  return groupId;
              });
          }
        },
        findMember: function(groupId, username){
          var user = User.findByUsername(username);
          return groups.$child(groupId).$child('members').$child(uer);
        },
        leave: function(groupId, username){
            var user = User.findByUsername(username);
            var refId = user.$child('groups').$child(groupId).$value;
            return groups.$child(groupId).$child('members').$remove(refId).then(function(){
                  user.$child('groups').$remove(groupId);
                  return groupId;
              });
        }
      };

      return Group;
  });
