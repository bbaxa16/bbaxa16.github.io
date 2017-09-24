const app = angular.module('baxaPortfolio', []);

app.controller('projectCtrl', [function(){
  this.message = poop;
  this.modal = false;
  this.toggleModal = function(){
    this.modal = !this.modal;
  }
}]);
