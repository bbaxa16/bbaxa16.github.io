const app = angular.module('baxaPortfolio', []);

app.controller('ProjectCtrl', [function(){
  this.modal = false;
  this.toggleModal = function(){
    this.modal = !this.modal;
  }
}]);
