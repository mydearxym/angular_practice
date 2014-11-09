(function() {
    
    "use strict";
    
    angular.module('demo.dragdrop', [
        'common.dragdrop'
    ])

    .controller('DemoDragDropCtrl', ['$scope', 'DragDropHandler', function($scope, DragDropHandler) {
        $scope.items = {
            list1 : [
                {
                    id: 13,
                    name:'L1 Item 1'
                },
                {
                    id: 14,
                    name:'L1 Item 2'
                },
                {
                    id: 15,
                    name:'L1 Item 3'
                },
                {
                    id: 16,
                    name:'L1 Item 4'
                }
            ],
            list2 : [
                {
                    id: 23,
                    name:'L2 Item 1'
                },
                {
                    id: 24,
                    name:'L2 Item 2'
                },
                {
                    id: 25,
                    name:'L2 Item 3'
                },
                {
                    id: 26,
                    name:'L2 Item 4'
                }
            ]
        };
              
        $scope.objects = [
            {
                id: 1,
                name: 'New Item 1'
            },
            {
                id: 2,
                name: 'New Item 2'
            }
        ];

        $scope.codeExample = "<ul>\n" +
            "   <li\n" +
            "       ng-repeat='object in objects'\n" +
            "       draggable='object'\n" +
            "       draggable-target='#sortable'>\n" +
            "       {{ object.name }}\n" +
            "   </li>\n" +
            "</ul>\n\n" +

            "<ul\n" +
            "   droppable='items.list1'\n" +
            "   ng-move='moveObject(from, to, fromList, toList)'\n" +
            "   ng-create='createObject(object, to)'\n" +
            "   id='list1' class='sortable'>\n" +
            "   <li ng-repeat='item in items.list1 track by item.id'>\n"+
            "       {{ item.name }}\n" +
            "   </li>\n" +
        "</ul>";
        
        $scope.moveObject = function(from, to, fromList, toList) {
            var item = $scope.items[fromList][from];
            DragDropHandler.addObject(item, $scope.items[toList], to);
            $scope.items[fromList].splice(from, 1);
        }

        $scope.createObject = function(object, to) {
            var newItem = angular.copy(object);
            newItem.id = Math.ceil(Math.random() * 1000);
            DragDropHandler.addObject(newItem, $scope.items, to);
        };
        
        $scope.deleteItem = function(itemId) {
          for (var list in $scope.items) {
            if ($scope.items.hasOwnProperty(list)) {
              $scope.items[list] = _.reject($scope.items[list], function(item) {
                return item.id == itemId; 
              });
            }
          }
        };
    }])
    
;})();
