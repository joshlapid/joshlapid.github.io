(function(){
  var app = angular.module('portfolio',[]);

  app.controller('ShowAllController', function(){
    this.showAll = false;

    this.changeShow = function(changeValue){
      this.showAll = changeValue;
    };
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tabValue){
      this.tab = tabValue;
    };

    this.isSet = function(checkTab){
      return this.tab === checkTab
    };
  });

})();
