/**
 * Created by Jacob on 2017-10-02.
 */
'use strict';

angular.module('confirmClick').
    directive('confirmClick', function () {
        return{
            restrict: "A",
            link: function(scope, element, attr){
                var msg = attr.confirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind("click", function(event){
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    if (window.confirm(msg)){
                        scope.$eval(clickAction)
                       } else {
                            console.log("Cancelled")
                    }
                    });
                }
            }
        });




// angular.module('confirmClick').
//     directive('confirmClick', function ($rootScope, $location) {
//         return{
//             scope: {
//                 message: "@message",
//                 eq: "=eq",
//                 post: "=post",
//             },
//             restrict: "E",
//             template: "<a ng-href='#'>{{ post.title }} {{ post.publishDate }}</a>",
//             link: function(scope, element, attr){
//                 var msg = scope.message || "Are you sure?";
//                 element.bind("click", function(event){
//                     if (window.confirm(msg)){
//                         $rootScope.$apply(function () {
//                             $location.path('/blog/' + scope.post.id)
//                         })
//                     }
//                 })
//                 console.log(scope.message);
//                 // console.log(element);
//                 // console.log(attr.confirmClick);
//                 // console.log(attr.href);
//             }
//         }
//     });

