package org.com.ebay;


import java.io.FileInputStream;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;
import java.util.logging.LogManager;

import javax.naming.InitialContext;
import javax.sql.DataSource;


/**
 *   This class is responsible for loading the database driver, giving connections
 *   upon request from the pool and also for returning these connections to the pool.
 **/

public class ConnectionClass
{
    final static private String _driver = "oracle.jdbc.driver.OracleDriver";
   
    public static String _url_demantra_Prod = "";
    public static String _url_demantra_Dev = "";
    public static String _url_demantra_Stage = "";
    public static String userId_dp = "";
    public static String password_dp = "";
  
    public static String connection_pool = "";
    public static boolean isLoaded = false;
    

    public ConnectionClass()
    {
     try{

//        Class.forName(_driver);

        isLoaded = true;
      
        }
        catch (Exception e) {
            e.printStackTrace();

        }
    }

 

    public Connection getConnectionDem()
    {
        try{
        Class.forName (_driver);
        if(!isLoaded)
        {
             System.out.println("Initialize the Driver load");
        }
        
        Connection dc = null;
      
        
      
        
        //TS3CG1
        userId_dp = "dp";
        password_dp ="Yj9M1r1C";
        
        //TS2CG1
        userId_dp = "dp";
        password_dp ="Yj9M1r1C";
        
        
        Properties prop = new Properties ();
        prop.put ("user",userId_dp);
        prop.put ("password", password_dp);
        // 5 minutes, 5 * 60 * 1000
        prop.put ("oracle.jdbc.ReadTimeout", "300000");
        
        
      String envVariable = "dev";
      System.out.println("Environment variable value: "+envVariable);
      
if ("dev".equalsIgnoreCase(envVariable)) {
	//TS3CG1
	 userId_dp = "dp";
     password_dp ="Yj9M1r1C";
     
  
     
     prop.put ("user",userId_dp);
     prop.put ("password", password_dp);
     // 5 minutes, 5 * 60 * 1000
     prop.put ("oracle.jdbc.ReadTimeout", "300000");
	
     System.out.println("TS3CG1");
	_url_demantra_Dev = "jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(LOAD_BALANCE=ON)(FAILOVER=OFF)(ADDRESS=(PROTOCOL=TCP)(HOST=lnxdbcj-pts-505-vip.cisco.com)(PORT=1804))(ADDRESS=(PROTOCOL=TCP)(HOST=lnxdbcj-pts-505-vip.cisco.com)(PORT=1804)))(CONNECT_DATA=(SERVICE_NAME=TS3CG1_SRVC_OTH.cisco.com)(SERVER=DEDICATED)))";
     dc = DriverManager.getConnection(_url_demantra_Dev , prop);

}

else if ("stage".equalsIgnoreCase(envVariable)) { 
	//TS1CG1
		 userId_dp = "dp";
	     password_dp ="Yj9M1r1C";
	
	     System.out.println("TS1CG1");
	     
	_url_demantra_Stage = "jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(LOAD_BALANCE=ON)(FAILOVER=ON)(ADDRESS=(PROTOCOL=TCP)(HOST=173.38.21.148)(PORT=1841))(ADDRESS=(PROTOCOL=TCP)(HOST=173.38.21.198)(PORT=1841))(ADDRESS=(PROTOCOL=TCP)(HOST=173.38.21.149)(PORT=1841))(ADDRESS=(PROTOCOL=TCP)(HOST=173.38.21.199)(PORT=1841))(ADDRESS=(PROTOCOL=TCP)(HOST=173.38.21.150)(PORT=1841))(ADDRESS=(PROTOCOL=TCP)(HOST=173.38.21.200)(PORT=1841)))(CONNECT_DATA=(SERVICE_NAME=TS1CG1.cisco.com)(SERVER=DEDICATED)))";
	
	dc = DriverManager.getConnection(_url_demantra_Stage, prop);
	
}  

else if ("prod".equalsIgnoreCase(envVariable)) {   
	//CG1PRD
	userId_dp = "dp";
    password_dp ="dpprd123";

    prop.put ("user",userId_dp);
    prop.put ("password", password_dp);
    prop.put ("oracle.jdbc.ReadTimeout", "300000");
    System.out.println("CG1PRD");
    _url_demantra_Prod ="jdbc:oracle:thin:@(DESCRIPTION=(CONNECT_TIMEOUT=5)(TRANSPORT_CONNECT_TIMEOUT=3)(RETRY_COUNT=1)(ADDRESS_LIST=(FAILOVER=YES)(LOAD_BALANCE=ON)(ADDRESS=(PROTOCOL=tcp)(HOST=173.37.235.156)(PORT=1841))(ADDRESS=(PROTOCOL=tcp)(HOST=173.36.36.153)(PORT=1841))(ADDRESS=(PROTOCOL=tcp)(HOST=173.37.235.157)(PORT=1841))(ADDRESS=(PROTOCOL=tcp)(HOST=173.36.36.154)(PORT=1841))(ADDRESS=(PROTOCOL=tcp)(HOST=173.37.235.158)(PORT=1841))(ADDRESS=(PROTOCOL=tcp)(HOST=173.36.36.155)(PORT=1841)))(CONNECT_DATA=(SERVICE_NAME=CG1PRD.cisco.com)))";
    
     dc = DriverManager.getConnection(_url_demantra_Prod, prop);
}else
{
	 userId_dp = "dp";
     password_dp ="Yj9M1r1C";
	 prop.put ("user",userId_dp);
	    prop.put ("password", password_dp);
	    prop.put ("oracle.jdbc.ReadTimeout", "300000");
	    System.out.println("TS3CG1");
	_url_demantra_Stage = "jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(LOAD_BALANCE=ON)(FAILOVER=OFF)(ADDRESS=(PROTOCOL=TCP)(HOST=lnxdbcj-pts-505-vip.cisco.com)(PORT=1804))(ADDRESS=(PROTOCOL=TCP)(HOST=lnxdbcj-pts-505-vip.cisco.com)(PORT=1804)))(CONNECT_DATA=(SERVICE_NAME=TS3CG1_SRVC_OTH.cisco.com)(SERVER=DEDICATED)))";
	
	dc = DriverManager.getConnection(_url_demantra_Stage, prop);	

}return dc;
          } catch (Exception e) {
             e.printStackTrace();
             return null;
          }
    }



   public void closeConnection(Connection conn)
   {
      try{
            conn.close();
         
            System.out.println("***** POOL :  Connection closed for BRM CONNECT::: ");
        }catch (Exception e)
        {
         e.printStackTrace();
         System.exit(1);
        }

   }
   
}



