
# Week 3 Assignment: Life Tracker

Submitted by: Flor Hernandez Rodriguez

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [X] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [X] If the user is logged in, it should display a **Sign Out** button. 
  - [X] If no user is logged in, it should display **Login** and **Register** buttons
  - [X] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [X] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [X] **Login Page:** A form that allows users to login with email and password.
- [X] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [X] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [X] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [X] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [X] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [X] The detailed activity page should display a feed of all previous tracked activities.
- [X] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [X] The activity tracked should be given a unique id for easy lookup.
  
  * [Table Schema](`./tracker-backend/life-tracker-schema.sql` ) 

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

`https://www.loom.com/share/e28d968f0b814c2cbf25d47bcbd9c4b8`
`<div style="position: relative; padding-bottom: 63.4941329856584%; height: 0;"><iframe src="https://www.loom.com/embed/e28d968f0b814c2cbf25d47bcbd9c4b8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`

Token:
`https://www.loom.com/share/14c16670592142e28f30f815e66f1a3b`
`<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/14c16670592142e28f30f815e66f1a3b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

- The lab topics from this week helped immensely with the assignment as it helped me debug my code multiple times. Many of those times, the bugs could have caused me to lose valuable work hours if I did not use the labs as reference points.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
- I would have liked to implement the other activities for the user so they could have had a complete activity planning schedule. I would have also liked to implement a feature allowing users to upload pictures of their progress so they could be motivated to keep on with their lifestyle.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

- I am personally not fond of my styling for this project as I had spend so much time working on the backend and importing everything to the frontend that I did noy get as much time to work on my css. Many of my peers created clean looking applications that have me ideas for our capstone project. 

### Open-source libraries used

- https://developer.mozilla.org/en-US/docs/Web/CSS/display
- https://unsplash.com/

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

- I would like to shout out all the TAs and instructors for their help and lectures. I had experienced many bugs on this assignment and their advice and guidance was very helpful in getting my application to run. 