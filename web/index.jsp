<%-- 
    Document   : index
    Created on : Jan 19, 2018, 7:13:03 PM
    Author     : sbuddhal
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="javax.servlet.*"%>
<%@page import="java.lang.*"%>
<%@page import="java.util.*"%>
<%@page import = "java.net.*" %>

<!DOCTYPE html>
<html ng-app='cisco'>

<title>Shipping Calculator</title>
   <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"></script>
  
    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js"></script>
	
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
  <link rel="stylesheet" href = "css/FormStyle.css">
 
  <link rel="stylesheet" href = "css/checkboxstyles.css">
  
     <link rel="stylesheet" href="css/bootstrap.min.css"  type="text/css">
  
      <link rel="stylesheet" href="css/styles.css"> 
  
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/3.4.5/select2.css">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.8.5/css/selectize.default.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-touch/1.6.8/angular-touch.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.0/angular-animate.min.js"></script>
    
    <!-- UI grid import -->
    
    <script src="http://ui-grid.info/docs/grunt-scripts/csv.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/pdfmake.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/vfs_fonts.js"></script>
        <script src="http://ui-grid.info/docs/grunt-scripts/lodash.min.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/jszip.min.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/excel-builder.dist.js"></script>
    
    <script src="http://ui-grid.info/release/ui-grid-unstable.js"></script>
    <link rel="stylesheet" href="http://ui-grid.info/release/ui-grid-unstable.css" type="text/css">
    <script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.13.0.js"></script> 
    
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>
   
<script src = "js/ngDialog.min.js"></script> 
  
    <script src = "js/ngDialog.js"></script> 
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-sanitize.js"></script>
	<script src = "js/select.js"></script>
	
	<script src = "js/loading-bar.js"></script>
	<script src = "js/loading-bar.min.js"></script>
	
	
    
      <link rel="stylesheet" href="css/ngDialog.css">
<link rel="stylesheet" href="css/ngDialog-theme-default.css">
<link rel="stylesheet" href="css/ngDialog-theme-plain.css">

<link rel="stylesheet" href="css/ngDialog-theme-default.min.css">
<link rel="stylesheet" href="css/ngDialog-theme-plain.min.css">
	
	<link rel="stylesheet" href = "css/loading-bar.css">
  <link rel="stylesheet" href = "css/loading-bar.min.css">
  
  <script src = "js/shippingController.js"> </script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.35.4/js/bootstrap-dialog.js"></script>
		
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">


<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/i18n/defaults-*.min.js"></script>
	
	<link rel="stylesheet" href="css/select.css">
		<link rel="stylesheet" href="css/checkboxstyles.css">
		
		<script src = "js/angular-idle.min.js"></script>
		<script src = "js/angular-cookies.min.js"></script>
    
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	

  
<body ng-controller="shipcostController">

<div class="container">

<header>
   <div class="appheader">
    <div class="logo">
        <img src="images/ebay_logo.png" width="110" alt="ebay Logo" />
    </div>
    <div class="apptitle">SHIPPING CALCULATOR</div>
    <div class="userinfo">
        <div class="contgray">
             Welcome <%= request.getHeader("AUTH_USER") %> 
        
            <br>
            <div style = "text-align:left">
            <a href = "Logout"> Logout </a>
            </div>
        </div>
    </div>
    <div class="hdrbottomborder"></div>
</div>
</header>
  
<nav>

</nav>

<div class="shipping_calc">
  
  
   	    
<div id="accessform">
   
   
  <form method = "post" id="shippingcalc" name = "shippingcalc" action="calculateShippingCost">
  
  &nbsp;
   
      <p class="alert alert-info" align = "left" >*Enter your shipping details</p> 
  
 <label>Package Details:</label>
 
 <div id="packageDetails" class = "container" style="border:1px solid #cecece;">
 
  <label for="Package Type" style="padding:10px;">Type:</label> 
  
  		<div class = "typeSelect">
		 <select class="form-control" id="packageType" ng-model="packageType.selected">
   		 	<option value = "Letter">Letter</option>
    		<option value="Large Envelope">Large Envelope</option>
    		<option value = "Package">Package</option>
    		<option value = "Large Package">Large Package</option>
  		</select>
     	</div>
     
     <label for="dimension" style="padding:10px;">Dimensions:</label>
     	
    <div class = "container" id="dimensions">
		<label>Length:</label>
		<input type = "text" id="length" ng-model="length" style="width:50px;">
		<label style="width:80px;">in.</label>
		
		<label>Width:</label>
		<input type = "text" id="width" ng-model="width" style="width:50px;">
		<label style="width:80px;">in.</label>
		
		<label>Height:</label>
		<input type = "text" id="height" ng-model = "height" style="width:50px;">
		<label style="width:80px;">in.</label>
     </div>
     	
     <div>
     	
     	 <label for="weight" style="padding:10px;">Weight:</label>
     	<br>
   
		
		<input type = "text" id="weight" ng-model="weight" ng-required = true style="width:50px;">
		&nbsp;
		<label>lbs</label>
		<br>
		
     </div>
     	
     	<br> 
   
 </div>
 
 <br>
 
  <label>Your Details:</label>
 
 <div id="userDetails" class = "container" style="border:1px solid #cecece;">
 
  
  <label for="zip code" style="padding:10px;">Your ZIP Code:</label> 
  
  		<div style="padding:10px;">
  		     
      	<input type = "text" id="zipCode" ng-required=true ng-model="src_zipCode" style="width:100px;">
      	
      	</div>
 	
  </div>
     	
     	<br> 
     	
     	  <label>Destination Details:</label>
 
 <div id="destDetails" class = "container" style="border:1px solid #cecece;">
 
  <label for="zip code" style="padding:10px;">Your Destination Location Details:</label> 
  
  		<div style="padding:10px;">
  		     
     	<div class = "cityselect">
     		<label style = "text-align:center">Select Major City</label>
			<select class = "form-control" ng-model="cityList.selected" ng-options="city for city in cities">
			</select>
     
      	  	<label style = "text-align:center">Or</label>
       		<br>
        	
        	<label style = "text-align:center">Zip Code</label>
       		<br>
        	
			<input type = "text" id="dest_zip_code" ng-model="dest_zip_code" style="width:100px;">
      	  
        </div>
        
        </div>
        
      
      	
      	</div>
      	
      	
 	
  </div>
 
 <br>
  
   <button type="submit" ng-model="submit" class="btn btn-primary" ng-click = "validateForm(this)">Calculate Shipping</button>
   <button ng-model="reset" class="btn btn-primary" ng-click = "Reset()">Reset</button>
   
   
 </div>
 
 
</form>

</div>
			

<footer>

<div class="contcopyright">
		Copyright &copy; 2017 Cisco Systems Inc.  All rights reeserved.
	</div>

	<div class="contcopyright centertext">
		<a href="mailto:gsqs-plan-it-support@cisco.com">Contacts</a>&nbsp;&nbsp;|&nbsp;&nbsp;Glossary&nbsp;&nbsp;|&nbsp;&nbsp;About&nbsp;Us
	</div>

</footer>

</div>


 
</body>
</html>