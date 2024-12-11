****Intro / Project Structure****

Hello Professor. Jasim and Company 
This is my Example Gym Business Project, it is separted into three main sections from the main repo folder.

1. backend - This folder holds our gym.db (which you guys will be utilizing for query testing), as well as our server.js file which will be used for setting up our API for a working frontend :).

2. GymTutorWebsite - This folder holds our frontend React code.

3. test_queries.txt - This file holds our test queries along with the expected outcomes for each.



****How to Setup Local Host for our API testing and Grading****
1. Open a terminal and cd into the project folder

2. cd into our backend folder
  
4. run "node server.js" (Make sure you have node.js installed)
   if done correctly the following output should occur:
   Server is running at http://localhost:3000
   Connected to the SQLite database.
   If error occur based on Operating System "malicious software warning"
    Must go into Security & Privacy Settings/Preferences and Unblock/Allow


6. Open a new terminal and cd the main project folder
   
7.  cd into our GymTutorWebsite folder

8. Here run in terminal "npm install" then "npm run dev"
  if done correctly the following output should occur

  VITE v6.0.1  ready in 231 ms
  Local:   http://localhost:5173/
  Network: use --host to expose
  press h + enter to show help

9. Use Control + [Left click on the link] http://localhost:5173/

10. Congratulations you should now be able to see the home page of the Gym Website and test the API Features from the Report! (if only the front end wihout any data appear recheck the backend server.js intilization)


****How to Run test Queries****

1. cd into our backend folder

2. In terminal run "sqlite3 gym.db"

3. If done correctly one can see the following line.
  SQLite version 3.37.0 2021-12-09 01:34:53
  Enter ".help" for usage hint
  sqlite>

4. Now one may run sql queries to their hearts content.

5. Open the test_queries.txt folder

6. Copy and Paste the Numbered Queries
7. *(Make sure not to copy the Outcomes or unrelated explanation text)*

8. paste into our created terminal area.

9. Congratulations you should now be able to make sql queries directly to the gym database 

****Participation Details****
Frontend, Backend, Database - Hudson Vu
If you have any questions Professor Jasim and Company feel free to email me at hvu26@lsu.edu
