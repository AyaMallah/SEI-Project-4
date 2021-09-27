# SEI Project 4: PLANTS

## Overview
For my last project with General Assembly’s Software Engineering course, I was tasked with building a full-stack application using Python, Django with PostgreSQL and React. I came up with the app Plants - an online platform dedicated to plant lovers, enabling them to browse through plantcare, posts, comments, and be part of a wider community.

## Brief
* Build a full-stack application by making your own back end and front end.
* Use a Python Django API using Django REST Framework to serve your data from a Postgres database.
* Consume your API with a separate front-end built with React.
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
* Have a visually impressive design.
* Be deployed online so it’s publicly accessible.

## Deployment
https://plant-blog.herokuapp.com/


## Timeframe
9 days

## Technologies:
**Planning**
* Figma
* Trello
* Miro
**Backend**
* Python
* Django
* PostgreSQL
**Frontend**
* React
* SASS
* Bootstrap/React Bootstrap
* Axios
**Other**
* Git
* GitHub


## Installation
* Clone or download the repo.
* pipenv to install Python packages.
* python manage.py loaddata jwt_auth/seeds.json to load user from the database.
* python manage.py loaddata plants/seeds.json to load plants from the database.
* cd client to go to the frontend directory.
* yarn install to install frontend dependencies.
* run yarn build.
* go back to the main directory and run python manage.py runserver to start the app.

## Plan
I decided to create a social media app with a focus on sharing plant photos, care tips and much more. I used Figma to create wireframes for the front-end and Trello for organising the work into seperate tickets. Also, using Miro I was able to plan my models and relationships as well as the user journey.


## Approach
Creating the backend:
After planning my models it was time to start creating them in the Django REST framework to create my own SQL database. In order to see the postgreSQL database created I used table Plus to view it. Then used Insomnia to test that the backend requests had all the correct relationships between the models and the JSON responses were coming through.
There were three models required for my Backend: User model, Plants model and Comments model as shown above in my plan. I created these, and created the associated requests.


Creating the frontend:
After completing most of my backend I moved over to my front-end using React. I was prepared to tweak my Backend if I ran into any issues displaying information on the Frontend. For the front-end I created different components e.g. home, plantcare, about. 

Throughout my work on the front-end I wanted to make sure my file structure was clear and concise, I ensured that files were appropriately named and were organised well in folders. 

As I got through each component one by one, I also styled each page as I went. This ensured that I had good time management in completing my MVP and still had time to polish up the styling.

There are two types of users, those that are logged in and those that are not. Both can see the same content on all pages. However on the plants page, this is where people can post their plants and make comments. Only users that are logged in will see a button to comment on posts and create their own post, this is through user authentication from the backend that i can manipulate in the front-end.. 


## Wins
I really enjoyed taking the time to learn Figma - it was instrumental in my understanding of how I wanted the front-end to look and function. 

Although I encountered some bugs, I managed to fix almost all of them before submitting my project. 

I was very proud of integrating Cloudinary API to my application in storing user uploaded images has been extremely satisfying.


## Challenges
Implementing reusable components and variables throughout the project.

Changing the models on the back-end and then using commands ‘python manage.py makemigrations’ and ‘python manage.py migrate’. It was causing errors. The only way to sort it was to dump data and reseed it again. 


## Bugs
Unfortunately I did not have time to check the whole site for responsiveness. I want to check that all pages are responsive and can be viewed on all different screen sizes.

Also I still need to fix the functionality of creating a post, when attempting to upload an image from my computer it does not find a path. I want to be able to click on any image a user has saved on their device and to post it rather than having to post a url for the image itself.

## Future features
* Ability to upload multiple images of a plant, as well as change already uploaded images.

* Make the application more mobile friendly.

* Finishing building the component for uploading a profile image.
