!(function(){
	app = angular.module("main",[]);

	app.filter("change", function(){
        return function(items, skip, limit){
          return items.slice(skip,limit);
        };
	});

	app.controller('PaginationController',  function(){
		var self = this;
		self.TotalPages = 6;
		self.ToLimit = 6;
		self.Skip  = 0;
		self.Items = ListItems;
		self.Pagination = [];

		self.ChangePage = function(page)
		{
			self.ToLimit = self.TotalPages * page;	
			self.Skip = self.ToLimit - self.TotalPages;
		}
		self.Init = function()
		{
			for (var i = 1 ; i <= Math.ceil(ListItems.length / self.TotalPages); i++) {
                 self.Pagination.push(i);
			};
		}
		self.Init();
	});
	var ListItems = [{id:1,item:"@cricarba"},{id:2,item:"@cricarba"},{id:3,item:"loreum ipsu"},{id:4,item:"loreum ipsu"},{id:5,item:"loreum ipsu"},
					 {id:6,item:"loreum ipsu"},{id:7,item:"loreum ipsu"},{id:8,item:"loreum ipsu"},{id:9,item:"loreum ipsu"},{id:10,item:"loreum ipsu"},
					 {id:11,item:"loreum ipsu"},{id:12,item:"loreum ipsu"},{id:13,item:"loreum ipsu"},{id:14,item:"loreum ipsu"},{id:15,item:"loreum ipsu"},
					 {id:16,item:"loreum ipsu"},{id:17,item:"loreum ipsu"},{id:18,item:"loreum ipsu"},{id:19,item:"loreum ipsu"},{id:20,item:"loreum ipsu"},
					 {id:21,item:"loreum ipsu"},{id:22,item:"loreum ipsu"},{id:23,item:"loreum ipsu"},{id:24,item:"loreum ipsu"},{id:25,item:"loreum ipsu"},
					 ];
})();
