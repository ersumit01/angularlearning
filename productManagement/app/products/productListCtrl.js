/**
 * Created by v-ssumi on 1/11/2016.
 */
(function(){
    'use strict'
    angular
        .module('productManagementApp')
        .controller('ProductListController', ['productResource',ProductListController]);
    function ProductListController(productResource){
        var vm = this;

        productResource.query( function(data){
            vm.products = data;
        } );
        vm.showImage =false;
        vm.toggleImage = function(){
            vm.showImage = !vm.showImage;
        }

    }
}());
