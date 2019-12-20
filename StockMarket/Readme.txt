STOCK MARKET :

URL : http://localhost:4200/

TO RUN THE WORKING SOFTWARE :

1. Run all the microervices in the following order:
	1. eureka-discovery-service
	2. authenticatiom-service
	3. upload-excel-service
	4. zuul-gateway

2. Get into angular project and open a terminal and run with the command
	ng serve --open

3. Login using admin account
	username: admin
	password: pwd
	
	a. After successful login, company list is displayed.
	b. Admin can search for the company. 
	c. Click uploadfile in header to upload stock price details from excel file to stock price database.
	path for excel : C:\Users\Admin\Desktop\MoDProject\samplestockdata3.xlsx
	This will return the upload summary.
	d. Click stockexchange in header to fetch the stock exchange details and add/edit stock exchange details.

4. User can signup with the Signup link in the home page. This sends  a verification email to the registered email of the user. On successful verification user can login.

5. Login using the account:
	username: test
	password: pwd
	
	a. On successful login, user can fetch company details.
	b. User can search for the company.
	c. User can edit user details using editUser option in header.

6. Logout click will redirect to homepage.

FEATURES INCLUDED:

1. Mockito and mockmvc done for authentication-service.

2. Code coverage details and postman endpoint testing sreenshots are included in artefacts folder.

3. Jmeter testing done for company-list.

4. Mockito done for excel-upload-service.


PORT NUMBERS:

	1. eureka-discovery-service : 8761
	2. authenticatiom-service   : 8091
	3. upload-excel-service     : 8092
	4. zuul-gateway             : 8083






	