const app = angular.module('myApp', []);

app.controller('navCtrl', [function(){
  this.showNav = false;
  this.src = 'https://www.newfangled.com/wp-content/uploads/2014/08/stuffcontentmgrfiles2ac67e44c30a21635f8a9d498f832bc1cmisc_resized80_313_257_hamenu.png';
  this.clickNav = function(){
    this.showNav = !this.showNav;
    this.src = 'https://thecliparts.com/wp-content/uploads/2016/07/back-x-clip-art.png';
  }
}]);
