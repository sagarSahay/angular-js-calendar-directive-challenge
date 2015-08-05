var app = angular.module('calendarDemoApp', []);

app.controller("calendarController",function($scope){
    var vm=this;
});

app.directive("dateControl", function ($sce) {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'date-control.html',
        controllerAs: 'ctrl',
        controller: function ($scope, $element, $attrs) {
            var vm = this;
            vm.years=[];
            vm.currentMonth=undefined;
            vm.currentYear=undefined;
            vm.dateRangeResult=undefined;
            vm.months=[{month:"January",value:1},
                {month:"February",value:2},
                {month:"March",value:3},
                {month:"April",value:4},
                {month:"May",value:5},
                {month:"June", value:6},
                {month:"July", value:7},
                {month:"August",  value:8} ,
                {month:"September",  value:9},
                {month:"October",  value:10},
                {month:"November",  value:11},
                {month:"December", value:12}];

            for(i=1900;i<=2020;i++){
                vm.years.push(i);
            }

            vm.changeMonth=function(month){
                vm.currentMonth=month;
                console.log("month ->"+month);
                changeDisplay();
            };

            vm.changeYear=function(year){
                vm.currentYear=year;
              console.log("year -> "+year);
                changeDisplay();
            };

            function changeDisplay(){
                var date=new Date(vm.currentYear,vm.currentMonth,1,1,1,1,1);
                vm.dateRangeResult= CalendarRange.getMonthlyRange(date);
            };

        },
        link: function (scope, element, attrs) {

        },
    };
});


// your controller and directive code go here