# Document-Keyword-Mapper

# How to get the project working?
1. SampleDB.sql contains the SQL scripts to create the backend DB, table and data. Connect to the local SQLExpress and run the script.


2. PromoDocKeyWord is the API project. Please load the PromoDocKeyWord.sln in Visual Studio (2017 - my version). 

    a. In the web.config, please change the connection string appropriately for your database. 
  <connectionStrings>
    <add name="SampleDBModelConnStr" connectionString="data source=**DEV-NT-GRACE\SQLEXPRESS**;initial catalog=SampleDB;user id=sa;password=*********;MultipleActiveResultSets=True;App=EntityFramework;Persist Security Info=True" providerName="System.Data.SqlClient" />
  </connectionStrings>
  
    b. In order to launch the API locally from Visual Studio, click "IISExpress(Google Chrome)" and it would launch in the Chrome browser as http://localhost:56212/
 
 
3. DocKeyWordApp is the Angular project which can be loaded into Visual Studio Code. To run, open a Terminal window and type "ng serve -o" and it will launch in the browser as "http://localhost:4200/"
