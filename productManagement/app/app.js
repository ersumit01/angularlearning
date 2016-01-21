/**
 * Created by v-ssumi on 1/11/2016.
 */
(function() {
    'use strict';
    var app = angular.module('productManagementApp', ['common.services','ui.router','productResourceMock']);
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        // $urlRouterProvider.otherwise("/products");
         $stateProvider
             .state("home",{
                 url:"/",
                 templateUrl:"app/products/welcomeView.html"

             })
             .state("productList",{
                 url:"/products",
                 templateUrl:"app/products/productListView.html",
                 controller:"ProductListController as vm"

             })
             .state("productEdit",{
                 url:"/products/edit/:productId",
                 templateUrl:"app/products/productEditView.html",
                 controller:"ProductEditController as vm"

             })
             .state("productDetail",{
                 url:"/products/:productId",
                 templateUrl:"app/products/productDetailView.html",
                 controller:"ProductDetailCtrl as vm"

             })
    }]
    );
}())