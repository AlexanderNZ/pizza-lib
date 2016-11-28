(function() {
    'use strict';

    angular
        .module('pizzaLabApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('order', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/orderForm/orderForm.html',
                    controller: 'orderFormController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
