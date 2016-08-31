(function(){
  var app = angular.module('portfolio',[]);

  app.controller('SectionController', function(){
    this.section = heading;
  });

  var heading = {
    name: 'About',
    info: "Josh",
    keyPressed: false
  };
})();
