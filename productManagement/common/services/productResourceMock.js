/**
 * Created by v-ssumi on 1/11/2016.
 */
(function(){
    'use strict'
    var app = angular
        .module('productResourceMock',
            ['ngMockE2E']);
    app.run(function($httpBackend){
        var products = [
            {
                "productId":1,
                "productName":"Leaf Rake",
                "productCode":"GDN-111",
                "releaseDate":"02/18/2016",
                "costs":9.0,
                "price":9.25,
                "category":"garden",
                "tags":["leaf","tool"],
                "imageUrl":"https://images.jet.com/md5/1d10f88730b0f39aff8faadace371872.1500"
            },
            {
                "productId":5,
                "productName":"Hammer",
                "productCode":"GDN-112",
                "releaseDate":"01/11/2016",
                "costs":19.0,
                "price":19.25,
                "category":"garden",
                "tags":["hammer","tool"],
                "imageUrl":"https://www.dlsweb.rmit.edu.au/toolbox/electrotech/toolbox1204/resources/03workshop/05hand_tools/images/claw_hammer.jpg"
            },
            {
                "productId":11,
                "productName":"PS$",
                "productCode":"GDN-116",
                "releaseDate":"01/12/2014",
                "costs":190.0,
                "price":190.25,
                "category":"games",
                "tags":["games","tool"],
                "imageUrl":"https://www.dlsweb.rmit.edu.au/toolbox/electrotech/toolbox1204/resources/03workshop/05hand_tools/images/claw_hammer.jpg"
            }

        ];
        var productUrl = "/api/products";
        $httpBackend.whenGET(productUrl).respond(products);
        var editingRegx= new RegExp(productUrl+"/[0-9][0-9]*");
        $httpBackend.whenGET(editingRegx).respond(function(method,url,data){
            var product = {"productId":0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];
            if(id>0)
            {
                for(var i=0; i< products.length;i++){
                    if(products[i].productId == id)
                    {
                        product = products[i];
                        break;
                    }
                };
            }
            return [200,product, {}]
        });
        $httpBackend.whenGET(productUrl).respond(function(method,url,data){
            var product = angular.fromJson(data);
            if(!product.productId)
            {
                product.productId = products[products.length -1].productId+1;
                products.push(product)
            }
            else{

            }

            for(var i=0; i< products.length;i++){
                if(products[i].productId == id)
                 {
                     product = products[i];
                     break;
                 }
            };
            return [200,product, {}]
        });
        $httpBackend.whenGET(/app/).passThrough();
    });
}());