Description
For Project 3, we were put into groups of three. We decided we wanted to build a site that would be useful to our cohort once we finished the course so we created a job board, we decided to use both an external API and to make it fully CRUD.

We spent a full day planning, we created a Trello board, Excalidraw plan, and ERD on LucidChart. We planned all aspects of styling before we began any coding and made a list of any stretches that we would like to complete should we hit the basic requirements, this set us up well for the project and meant that we were able to style as we went along. We split the tasks up every morning by each team member would state what they would most like to work that day.
 
Excalidraw:
![i1](https://github.com/sdg877/InTechFrontend/assets/149600602/11ff64df-cfba-47b6-8d7a-d6ebe1d24e1e)


LucidChart:
![i2](https://github.com/sdg877/InTechFrontend/assets/149600602/ed7ae4b5-97e5-4bb2-8b9e-6a3550ff362d)


Deployment Links
Backend: https://intechbackend.netlify.app/
Frontend: https://intechjobs.netlify.app/
GitHub BE: https://github.com/sdg877/InTechBackend
GitHub FE: https://github.com/sdg877/InTechFrontend

Timeframe
We were given seven days to complete this including planning. The first day was spent researching and planning. We also fully planned the styling before we began coding which helped us get everything done within the allotted timeframe. 

Technologies Used:
MongoDB
Express
React
Node.js
HTML
CSS

Brief
The brief was to create a MERN stack website which should either be fully CRUD or include an external API, we decided to use both as this would fit our plan. We used the Adzuna API to pull jobs with the keywords Junior and Developer. We then coded it to allow the user to log in and save jobs, the user could also update the saved jobs section to reflect where they were in the interview process.

Code Process 
My teammate created a backend and frontend Repo on GitHub and we forked this
We installed the following dependencies on the backend:
Bcrypt
Body-parser
Cors
Dotenv
Express
Jsonwebtoken
Mongoose
I set up the User Schema and linked the backend to my MongoDB
We worked together as team on the following aspects:
Authorization
Linking the API
I was responsible for pulling the data into the job cards that displayed the jobs on the Job List Page which was our home page. I pulled the relevant data from the API and styled the cards as we had planned in our Excalidraw. I used a hover function to change the colour of the job when it is hovered over by the user. I also used .toUpperCase to capitalise the Company Name. I coded it so that the salary would only show the pounds in the salary using the toLocaleString and maximumFractionDigits. As some of the job listings only had part of a location on the advert, I used the or operator to ensure that either the town or city would show, if neither of these were listed the location would show as UK. We wanted each of the job cards to have a circle showing a different colour so I used a function so they would each display one of four chosen colours. The other code in the job card was added by my teammate.
I was solely responsible for creating the job detail page which would display the job once a user clicks on it. I pulled all the relevant data, including salary, location and date created. I used a handleSaveJob function to allow the user to save the job to their profile using local storage. I also added a redirect path should the user not be logged in to take them to the login page. I used a toggle so that the Save Job button would show Job Saved and become unclickable once the job was saved. I created a function to show the location of the job using Google Maps, if no location was specified, the map would show the UK. I styled the job detail page using Bootstrap and CSS. I also added a See Full Description button that took the user to the external job page if clicked.
I was also responsible for creating the toggle to switch between the login and signup forms. 


JobDetailPageCode
![i3](https://github.com/sdg877/InTechFrontend/assets/149600602/12df3c21-fddc-4b54-a90d-9a8ab74386c7)
![i4](https://github.com/sdg877/InTechFrontend/assets/149600602/b675c37d-6a1b-4fc6-929b-3aaae23e107d)


Challenges
We had issues without authorisation, we required help from our instructor to get it working and found that we had a simple error as we had forgotten to create a saveToken function. Once this was added it was working properly.
In the initial stages, we encountered difficulties with branches since our instructor provided minimal guidance on this aspect. However, with persistent practice, we gradually became more proficient in navigating them.

Wins
We worked exceptionally well as a team with good communication and made sure that we worked together every step of the way. Our detailed planning at the start really helped and allowed us to style the whole way through ensuring that we were not rushed at the end trying to get everything done. I learned a lot from my teammates and thoroughly enjoyed this project.

Key Learnings
Learning to use branches on GitHub. Using ChatGPT to troubleshoot. Using Trello properly and making detailed drawing plans on excalidraw.

Future Improvements
As we planned our project so well, we were able to complete all the stretches that we wanted to.
	
JobCard before styling:
![i5](https://github.com/sdg877/InTechFrontend/assets/149600602/8b75242e-f7e6-4295-b103-01eb703f6680)

JobCard after styling:
![i6](https://github.com/sdg877/InTechFrontend/assets/149600602/16b9d5af-0c10-4d70-a657-0e25c3cf2d06)

JobDetail Page:
![i7](https://github.com/sdg877/InTechFrontend/assets/149600602/89852300-d40b-4c49-9213-8370c0c77743)

