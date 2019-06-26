var utils = require('../lib/utils.js');
var ORIENTATION = {north: 'vertical', east: 'horizontal', south: 'vertical', west: 'horizontal'};

var manuelmhtr = {
  info: {
    name: 'Martin',
    style: 2
  },//enemiesstate = array of playerstates of enemies
  //
  ai: function(playerState, enemiesStates, gameEnvironment) {

    function isindanger(enemiesStates,playerState){
      for(var i = 0; i < enemiesStates.length; i++){
        //check if an enemy is in the same row or col as me
        //then move to the safest location ()
        if(enemystates[i].position[0] == playerState.position[0] || enemystates[i].position[1] == playerState.position[1]){
          //there is an enemy in the same row or column as you
          return true;
        }
      }
      return false;
    }
    function findsafestlocation(enemiesStates,playerState){
      //when this method is called, we know that we are in the same row or col as an enemy (they are 0 - 1 steps away from killing me)
      //first, check if it is safe to simply move (without turning (only takes one move)).
      //otherwise,
    
    }

  }
};

module.exports = manuelmhtr;
