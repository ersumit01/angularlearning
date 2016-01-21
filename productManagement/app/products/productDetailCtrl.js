/**
 * Created by v-ssumi on 1/11/2016.
 */
(function(){
    'use strict'
    angular
        .module('productManagementApp')
        .controller('ProductDetailCtrl', ProductDetailController);
    function ProductDetailController(){
        var vm = this;
        vm.product = product;
        vm.title = "Product Detail: "+ vm.product.productName;
        if(vm.product.tags)
        {
            vm.product.tagList = vm.product.tags.toString();
        }

    }
}());
