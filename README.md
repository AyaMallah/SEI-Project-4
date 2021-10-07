# SEI Project 4: PLANTS

## Overview
For my last project with General Assembly’s Software Engineering course, I was tasked with building a full-stack application using Python, Django with PostgreSQL and React. I came up with the app Plants - an online platform dedicated to plant lovers, enabling them to browse through plantcare, posts, comments, and be part of a wider community.

<div align="center">
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926486/r3tRIfzA1Qt_2PXCCmabXVMV0rqYrzJ-ozoKdcxjrXcMBLjb9mgY8JQVpDnJGW5ubZv52Ma8G0zUeDpXip1KfE_v2bypkDJPVvjdalav4-KdDxI6RUaS4a8MR1s7M2hW-A2tnk3c_s0_jvyt3f.png" width="800px" />
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926507/n2ExRsigsS8UaJ418EgbBng_9eBdxEEW2cHKFnRs_3nkfUft_JwhTn0zvNu7K9oOu9h7voKJCLHdtiTiak4U--K1FWZ_jqSl3zFMZz-bnMHARTr-xI-QGlVMZSYCXsP1jAPDyrUX_s0_cfthus.png" width="800px" />
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926518/pNSTKzzv0djez7MVLzrS_BRLq1gWfAef0ySMn4PefwrZq-FYWAgwARWu-0bb8WDY9nNlptygv5-l46ySnkTOG9kj29kOJLwcA-o3vWWUlwbm5VUq_mN-xPKi7lZm994tbGvtYh___s0_drdpca.png" width="800px" />
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926522/nmYBZH4xfnCMF65cJbaC7OpNRuA68t4T7InDHjWGCOxv7RJGtb5ULrZJ79nhV_XLJy7Z56hY75uVmIE9OkVYvfqQdLR9_ctvl1ZLPei4F21EYXvieME8UCm0ORrs_zN05kNwLSZu_s0_inlfcm.png" width="800px" />
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926528/ej4XGIenaIPKP3h3kLoGRMPgbkvP4FcYOY-nkYbK-CzagIqlYdPn1BRy7uxG1MJZbOLubKrvs0TmYkDV810tcEnmtffkHhDFuW_PZ4GHWXC_B8Lfj9wlMDD6Re1N9IQIsmSKxtMV_s0_i4gcxg.png" width="800px" />
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926533/tGO7FDFhGNJwlHqu3rewpSPeEIn0-Kuglwd0TSh58NsIvb2w00M-3PdoQHcA4RtIVxsCSrZHQ3ciU4DGL7XeU03icikpMzipfmkvl9B6hTCMg1VeVOpJk-6VeVlWVFpE_cJ_nch7_s0_y7gyth.png" width="800px" />
</div>

## Brief
* Build a full-stack application by making your own back end and front end.
* Use a Python Django API using Django REST Framework to serve your data from a Postgres database.
* Consume your API with a separate front-end built with React.
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
* Have a visually impressive design.
* Be deployed online so it’s publicly accessible.

## Deployment
<a href="https://plant-blog.herokuapp.com/" target="_blank">Plants</a>

## Timeframe
7 days

## Technologies:
**Planning:**

* Figma
* Trello
* Miro

**Backend:**

* Python
* Django
* PostgreSQL

**Frontend:**

* React
* SASS
* Bootstrap/React Bootstrap
* Axios

**Other:**

* Git
* GitHub


## Installation
* Clone or download the repo.
* `pipenv` to install Python packages.
* `python manage.py loaddata jwt_auth/seeds.json` to load user from the database.
* `python manage.py loaddata plants/seeds.json `to load plants from the database.
* `cd client` to go to the frontend directory.
* `yarn install` to install frontend dependencies.
* run `yarn build`.
* go back to the main directory and run `python manage.py runserver` to start the app.

## Plan
I decided to create a social media app with a focus on sharing plant photos, care tips and much more. I used Figma to create wireframes for the front-end and Trello for organising the work into seperate tickets. Also, using Miro I was able to plan my models and relationships as well as the user journey.

<div align="center">
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926555/wRW81sMS-EZfhSbNxCx-SGV1D24Rem_a_QWj9F7S2z9kCT-Ogtr08jox1emAQMF9NgtBI3zwKI2RcPT2J0jIQShGqMeP9ZKGo7o5IT2ecPWbrds9AInjnIl6kL7EBz0sc3_qXnMI_s0_wonr7n.png" width="700px"/>
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926537/mHPbkX5-i4_EjEBgNW6x4f465RHqmcco04Sqs38nkq_qRaYmnbDocHkvrTRwdWiX4ZTUybq9Tfkto3AYu4T4tWVSFQfKAq4aDJdvJnAC6h-0oXrVIcEUvXTf-bnE0UwSaTRF30QX_s0_dpewkv.png" width="700px"/>  
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926563/arn0z2ysMhTnUxmI-QYrgVJcvIrprzxaNIwZuhVFGKc4v_cLn_prwCy788fGvNQU47kFe7ADpGFmEYzkYOnymITDVwyoT6uP99fujwLuM8axNqFaz_9MQfXsmg6oxiBRv6V30fAz_s0_us9nrq.png" width="700px"/>  
</div>

## Approach
<h4>Creating the backend:</h4>
After planning my models it was time to start creating them in the Django REST framework to create my own SQL database. In order to see the postgreSQL database created I used table Plus to view it. Then used Insomnia to test that the backend requests had all the correct relationships between the models and the JSON responses were coming through.
There were three models required for my Backend: User model, Plants model and Comments model as shown above in my plan. I created these, and created the associated requests.

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926560/xdi5ucmVyLtQFvNcWkoUayg047QxNMi2PBONAX3DGAsNjAMa1al3rGuCNrYeGHkKWdTvFCa6Ggwe1JpQe8uRfG0PNeoEItoRu7Pzxza5ICVbLNw4dC5ENy7uU6kww26rckmSX_qU_s0_rg84dk.png" width="500px"/>

<h4>Creating the frontend:</h4>
After completing most of my backend I moved over to my front-end using React. I was prepared to tweak my Backend if I ran into any issues displaying information on the Frontend. For the front-end I created different components e.g. home, plantcare, about. 

Throughout my work on the front-end I wanted to make sure my file structure was clear and concise, I ensured that files were appropriately named and were organised well in folders. 

As I got through each component one by one, I also styled each page as I went. This ensured that I had good time management in completing my MVP and still had time to polish up the styling.

There are two types of users, those that are logged in and those that are not. Both can see the same content on all pages. However on the plants page, this is where people can post their plants and make comments. Only users that are logged in will see a button to comment on posts and create their own post, this is through user authentication from the backend that i can manipulate in the front-end.. 

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926562/IH1L_o2T3F1tZah_6cnkC2vhX0jgfJQSlv1y-qgNMw8w8Rs-sBnjJ99KdI09sEpsHWRKmERpod7f-jg4Nlv16JUU7TUPQdJVXoHYP2fsQyud1ImFH0irLjHGnyDm--xHRl9bC6kd_s0_codkg9.png" width="500px"/>
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632926563/QCVq9iE2NF1n18DkyhxVTJjaI8oFiryNi32MXJwhZYf9DSsDuC3iluNMdZLOsW5FJ97xdIwtDaH9gL_8H08yk7X-TmTp6FKlBsRxjaXkw-43DsD5MJWg8m1VFZxzXRy1THFv1OKD_s0_vlebdn.png" width="500px"/>

## Wins
* I really enjoyed taking the time to learn Figma - it was instrumental in my understanding of how I wanted the front-end to look and function. 

* Although I encountered some bugs, I managed to fix almost all of them before submitting my project. 

* I was very proud of integrating Cloudinary API to my application in storing user uploaded images has been extremely satisfying.


## Challenges
* Implementing reusable components and variables throughout the project.

* Changing the models on the back-end and then using commands `python manage.py makemigrations` and `python manage.py migrate`. It was causing errors. The only way to sort it was to dump data and reseed it again. 


## Bugs
* Unfortunately I did not have time to check the whole site for responsiveness. I want to check that all pages are responsive and can be viewed on all different screen sizes.

* Also I still need to fix the functionality of creating a post, when attempting to upload an image from my computer it does not find a path. I want to be able to click on any image a user has saved on their device and to post it rather than having to post a url for the image itself.

## Future features
* Ability to upload multiple images of a plant, as well as change already uploaded images.

* Make the application more mobile friendly.

* Finishing building the component for uploading a profile image.
