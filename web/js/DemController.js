var app = angular.module("cisco",['ngSanitize', 'ui.select','angular-loading-bar']);


app.controller("cloneController", ['$scope','$window','$http',function($scope,$window,$http) {
	
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
		
		$scope.showMessage=false;
		$scope.dataLoading = true;
		$scope.acctCloneStatus = '';

	    $scope.userID = {
	      selected: ''
	    };
	    
	    $scope.getIDList = function(search) {
	        var newList = $scope.UserIDs.slice();
	        if (search && newList.indexOf(search) === -1) {
	          newList.unshift(search);
	        }
	        return newList;
	      }
	    
	 
	    
	    
	    $scope.getIDListFromDB = function ()
	    {
	    	  $http({
			        method: 'GET',
			        url: './AccountListServlet',
			        params: {datatype: "ID"}
			        
			      }).success(function (data) 
			       {
			      	$scope.UserIDs=data;
			      	$scope.dataLoading = false;
			      
			        });
	    };
	    
	    $scope.getIDListFromDB();
	    
	    
	    	  
	    	  $scope.resetacctClone = function()
	    	  {
	    		  
	    		  $scope.justification_cl = '';
	    		  $scope.userID.selected = '';
	    		  $scope.acctCloneStatus = '';
	    		  $scope.showMessage = false;
	    	  }
	    	
	    	  $scope.submitAcctClone = function ()
	    	  {
	    		  
	    		  
	    		  
	    		  if(($scope.justification_cl == null || $scope.justification_cl == '') || ($scope.userID.selected == null ||$scope.userID.selected == '' ))
	    			  {
	    			  $window.alert("Justification or Clone User ID cannot be blank");
	    			  return;
	    			  }
	    		  else
	    			  
	    			  {
	    			  
	    			  $scope.showMessage=true;
	    			  
	    			 $http({
	    		      method: 'POST',
	    		      url: './AccountClone',
	    		      headers: {'Content-Type': 'application/json'},
	    		      data: { 
	    		    	  
	    		    	  'justification_cl' : $scope.justification_cl,
	    		    	  'clone_user_id' : $scope.userID.selected
	    		    	  
	    		      }
	    		    }).success(function (data) 
	    		      {
	    		    	$scope.acctCloneStatus=data;
	    		    //	$scope.showMessage = true;
	    		    	//$scope.names = data;
	    		    	
	    		      }); 
	    			  
	    			  }
	    		  
	    	  }

		
	}
	]
	);


app.controller("demcontroller", ['$scope','$window','$http',function($scope,$window,$http) {
	
	  
		
	  $scope.accessType = {
		      selected: ''
		    };
	  
	  $scope.dataLoading = false;
	
	 $scope.TG_CHECKED = false;
	 $scope.BU_CHECKED = false;
	 $scope.PF_CHECKED = false;
	 
	 $scope.acct = {};
	 
	  $scope.multipleTG = {};
	  $scope.multipleBU = {};
	 $scope.multiplePF = {};
	 $scope.validationMessage = '';

	 $scope.TG_RO = false;
	 $scope.TG_RW = false;
	 
	 $scope.BU_RO = false;
	 $scope.BU_RW = false;
	 
	 $scope.byUserID = false;
	 $scope.byUserName = false;
	 
	 $scope.PF_RO = false;
	 $scope.PF_RW = false;
	 
	 $scope.TG_Access_Type = '';
	 $scope.BU_Access_Type = '';
	 $scope.PF_Access_Type = '';
	 
	 
		/* $scope.accessTypeList = [
			          				{id: '1', name: 'SELECT'},
			          			     {id: 'ww_access', name: 'WW ACCESS'},
			          			      {id: 'hier_access', name: 'TG/BU ACCESS'}
			          			    ]; */
		
			          			    
		  
	 $scope.accessTypeList = ["NO SELECTION" , "WW ACCESS","TG/BU ACCESS"];
	 
	 
	 $scope.getAccessTypeList = function(search) {
	
			 
	        var newList = $scope.accessTypeList.slice();
	        if (search && newList.indexOf(search) === -1) {
	          newList.unshift(search);
	        }
	        return newList;
	      }
	    
	 
	
	 $scope.Reset = function(event) {
		 
		   event.multipleTG.TG = '';
		event.multipleBU.BU = '';
		event.multiplePF.PF = '';
		
		event.data.selectedType.id = '1';
		 
		 }
	 
	
	 
	 $scope.validateForm = function(event) {
			
			var ProcessRequest = 0;
		 
		  if(event.accessType.selected == "NO SELECTION") {
		
		  $window.alert("Select Access Type");
		  ProcessRequest = 0;
		  
		  }
		 
		  else if(event.accessType.selected == "WW ACCESS") {
				
			  if(event.justification == '' || event.justification == null)
				{	
				$window.alert("Please enter justification comments");	
				ProcessRequest = 0;
				}
				
				else{
				ProcessRequest = 1;
				
				}
			  
			
			  
			  }
		
		  
		  else {
		  
			if(!(event.TG_CHECKED || event.BU_CHECKED || event.PF_CHECKED))
			{
			$window.alert("Select at least one of\n"+"1. TG\n"+"2. BU\n"+"3. PF\n");
			ProcessRequest = 0;
			}
			if(event.TG_CHECKED) 
			{
			    if(event.multipleTG.TG == ''){
			
				$window.alert("Select at least one Technology Group");
				ProcessRequest = 0;
				}
			
			   else{
				
				if(event.justification == '' || event.justification == null)
				{	
				$window.alert("Please enter justification comments");	
				ProcessRequest = 0;
				}
				
				else{
				ProcessRequest = 1;
				
				}
			    
			    }
			    
			}
			
			if(event.BU_CHECKED) 
			{
			    if(event.multipleBU.BU == ''){
			
				$window.alert("Select at least one Business Unit");
				ProcessRequest = 0;
				}
			
			    else{
				
				if(event.justification == '' || event.justification == null)
				{
				
				$window.alert("Please enter justification comments");
				ProcessRequest = 0;
				}
				
				else{
				ProcessRequest = 1;
				
				}
			    
			    }
			}
			
			if(event.PF_CHECKED) 
			{
			    if(event.multiplePF.PF == ''){
			
				$window.alert("Select at least one Product Family");
				ProcessRequest = 0;
				}
			
				else{
				
				if(event.justification == '' || event.justification == null)
				{
				
				$window.alert("Please enter justification comments");
				ProcessRequest = 0;
				
				}
				
				else{
				ProcessRequest = 1;
				
				}
			    
			    }
			    
			}
		 }
		 
		 //check if call to a servlet can be made or not based on processRequest value
		 
		 if(ProcessRequest == 1)
		 {
		         $window.alert("Process Request value is 1. So calling servlet");
		          
		     
		          $scope.callServlet();
		 }
		
		 };
		 
		 
		 $scope.callServlet = function() {
			 
			
			 
			  if($scope.TG_RO || $scope.TG_RW )
				  {
				  
				  //$window.alert("Either TG RO or RW is checked");
				    if($scope.TG_RO) {
				    	
				    	$scope.TG_Access_Type = "RO";
				    	
				    	// $window.alert("TG type is RO");
				    }
				    if($scope.TG_RW) {
				    	$scope.TG_Access_Type = "RW";
				    //	$window.alert("TG type is RW");
				    }
				  
				  }
			  
			  if($scope.BU_RO || $scope.BU_RW)
			  {
			  
			    if($scope.BU_RO) {
			    	
			    	$scope.BU_Access_Type = "RO";
			    }
			    if($scope.BU_RW) {
			    	$scope.BU_Access_Type = "RW";
			    }
			  
			  }
			  
			  if($scope.PF_RO || $scope.PF_RW)
			  {
			  
			    if($scope.PF_RO) {
			    	
			    	$scope.PF_Access_Type = "RO";
			    }
			    if($scope.PF_RW) {
			    	$scope.PF_Access_Type = "RW";
			    }
			  
			  }
			  
		
			
			  
			  $http({
		      method: 'POST',
		      url: './RequestAccess',
		      headers: {'Content-Type': 'application/json'},
		      data: { 
		    	  
		    	  'justification' : $scope.justification,
		    	  'userid' : $scope.username,
		    	  'access_type'  : $scope.data.selectedType.id,
		    	  'TG_Access_Type' : $scope.TG_Access_Type,
	    		  'BU_Access_Type'  : $scope.BU_Access_Type,
   			      'PF_Access_Type': $scope.PF_Access_Type,
  				  'TG_TEXT': $scope.multipleTG.TG,
  				  'BU_TEXT'	 : $scope.multipleBU.BU,
		    	  'PF_TEXT' : $scope.multiplePF.PF				  
		    	  
		      }
		    }).success(function (data) 
		      {
		    	$scope.status=data;
		    	//$scope.names = data;
		      }); 
			 
			
			
			 
		 };
	 	 
		
	
	   $scope.getAllTG = function() {
		   
		   $scope.dataLoading = true;
	    	
			  $http({
			        method: 'GET',
			        url: './HierarchyList',
			        params: {datatype: "TG"}
			        
			      }).success(function (data) 
			       {
			      	$scope.availableTGs=data;
			      	$scope.dataLoading = false;
			        });
			    
			    $scope.availableTGs = data;

	    };
		
		 $scope.getAllBU = function() {
			 
			 $scope.dataLoading = true;
	    	
			 $http({
			        method: 'GET',
			        url: './HierarchyList',
			        params: {datatype: "BU"}
			        
			      }).success(function (data) 
			       {
			      	$scope.availableBUs=data;
			      	$scope.dataLoading = false;
			        });
			    
			    $scope.availableBUs = data;

	    };
		
		 $scope.getAllPF = function() {
	    	
			 $scope.dataLoading = true;
			 $http({
			        method: 'GET',
			        url: './HierarchyList',
			        params: {datatype: "PF"}
			        
			      }).success(function (data) 
			       {
			      	$scope.availablePFs=data;
			      	$scope.dataLoading = false;
			        });
			    
			    $scope.availablePFs = data;

	    };

		

	    
	    $scope.TGReset = function(event) {
			   
	          if(!event.TG_CHECKED) {
			       event.multipleTG.TG = '';
			  }
	   
	   };
	   
	    $scope.BUReset = function(event) {
	   
	          if(!event.BU_CHECKED) {
			       event.multipleBU.BU = '';
			  }
	   
	   };
	   
	    $scope.PFReset = function(event) {
	   
	          if(!event.PF_CHECKED) {
			       event.multiplePF.PF = '';
			  }
	   
	   };
	
	$scope.changeAccessType = function(event) {
	
	event.TG_CHECKED=false;
	event.BU_CHECKED = false;
	event.PF_CHECKED = false;
	event.multipleTG.TG = '';
	event.multipleBU.BU = '';
	event.multiplePF.PF = '';
	


		};
	

	//vm.availableTGs = ['SPVTG','ECTG','ABTG','DCDETG','RTG','WEBTG','DTG','ETG'];
	
	//vm.availableBUs = ['ECBU','CORBU','SAVBU','TBU','TBABU','EABU','RBU','WEBEXBU'];
	
	//vm.availablePFs = ['ASR1000','ASR2000','ASR3000','ASR4K','ASR5K','ASR6K','ASR7K','ASR9K'];
	
}]);