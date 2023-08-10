# 24hours

​​24Hours - Readme
Description
For this week-long project I created a goal planning, wellbeing app using EJS, express and MongoDB. It is designed to help people suffering of all types of mental health 
issues so that they can set themselves small goals to try and help them get out of whichever hole they might find themselves in. It’s aim is to be an ‘unsocial’ social media 
platform so the user isn’t comparing themselves to anyone else and what other people are achieving in their day to day. 

Deployment link
Web URL = https://24hours.fly.dev/
Git = https://github.com/KyleBarter/24hours.git

Getting Started/Code Installation
The above git page will take you to its repo where you can fork and clone it from there.

Timeframe & Working Team (Solo/Pair/Group)
This was a solo project where I was given one week to complete the MVP of a CRUD app. 

Technologies Used
I used Trello to set my to-dos, icebox and user stories. Here I attached images for the wireframe, using Figma, and user journey, using BLANK. You can find the Trello board
under ‘planning’ and here: https://trello.com/b/wYul4kWT/project-2
The project was written using VScode, working with MongoDB, Express and Node.js

Brief
We were briefed to create a CRUD app using Node, Express and MongoDB, specifically following the MVC model. It must use OAuth authentication and use two different data entities on top 
of the ‘user’ model, and then deployed online.  

Planning
Before I started my course with General Assembly, this was an app that I wished to make for personal use and just to help others who were in a similar boat to me and needed to visualise 
their hours in a day to work better. Below you can see the trello board, I still have a stretch goal which will tie the app up nicely.

![24 trello](https://github.com/KyleBarter/24hours/assets/118014478/7683de16-e657-4163-96b0-bd09f4f80d2a)



The ERD model below shows how the user’s action directly interacts with both the journal and the ‘activity’ logged.
The day feature would work in the background and update as the day changes. As well as this I wanted the journal to be date logged so that if the user was struggling with motivation or 
feels like they were failing themselves, they can look back and see that they may have felt similarly to this in the past but overcame it. 
![24 erd](https://github.com/KyleBarter/24hours/assets/118014478/32938af4-caa5-4112-a636-acab06433039)


As this was a project I had a keen interest in making prior to the bootcamp, I had a good idea of how I wanted it to look. With a clock used as a pie chart, the user can clearly see how 
the hours in their day are made up. Initially this was above the header because it was the centric point, however I decided against it as I felt like the header became the centric view. 
The clock would have been a key icon that appears throughout the app, as eventually the logo will be clock themed. 
![24 wf 1](https://github.com/KyleBarter/24hours/assets/118014478/244b1c59-be16-4f80-bf6e-dc747ab33416)



I wanted the create activity to be simple and clean. The user can name the activity whatever they like, and choose from a dropdown the category/type of activity it may be. I opted for the 
user to have a choice of the name for two reasons: I couldn’t possibly list every possible way for the user to spend their hours, and some activities can mean different things to people. 
For example a walk could be a user’s exercise for the day, or it could be for wellbeing. 
![24 wf 2](https://github.com/KyleBarter/24hours/assets/118014478/a57e2003-e91c-45e5-bf25-fb913446d0fe)


Initially the journal feature was going to be a separate page entirely, but I decided to put the activity details above it, with a link to the edit feature where the user can edit and delete 
the activity. This was a quality of life change so that the user could read more about what they’re journalling, and look to the other days it may be a goal for. 
![24 wf 3](https://github.com/KyleBarter/24hours/assets/118014478/a3fb082e-13f3-4704-9a42-57ac606fab1d)


The show all and edit page also took a deviation from the original plan. This page was going to show all activities, and give the user a quick opportunity to untick and change the days scheduled, 
as well as delete them.
I decided against this in the end, whilst the show all page still exists so the user can browse through each day, they need to go into an edit page so that they’re able to change more things about 
the activity. This can be whether it’s a recorded goal, the name, the type, the days it’s on and the time applied to it. 
![24 wf 4](https://github.com/KyleBarter/24hours/assets/118014478/95da125d-de3b-470e-a936-bce206c38fd4)



Build/Code Process
The most important functionality of my app, separate to the MVC model, is the getDaysActivities function. This was the first time I’ve looked into using the day of the week to display certain data. 
I could also use this function for the ‘my activities’ page for the dropdown. This was probably my most rewarding function as I learnt a new feature that I can add on any future projects.
![24 code 1](https://github.com/KyleBarter/24hours/assets/118014478/3583fbfc-9dd2-4664-8c0e-0a210d22eabb)



Below are my controller functions, with some closed to see the layout of the controllers. Each has their own title for the headers partially so that the user can see which page they’re on. The create 
function shows that what is created is the user’s own activity so that no one else can see, as mentioned previously being an ‘unsocial’ social media. I wanted to keep this clean so I could easily jump 
in to fix / make any changes with the use of comments. I also gave the async functions with a try catch block the exact error message so I could troubleshoot easier.
![24 code 2](https://github.com/KyleBarter/24hours/assets/118014478/fa9aed7a-6f64-444e-b0e2-50db8b0f8f20)


As I wanted the user journal to be relevant to the specific activity, I embedded it within the main activity schema. This was definitely the most interesting part of my code as I had always wondered 
how database’s are organised and seeing it so clearly, and almost quite simple was surprising. Nonetheless I felt this was a good place to also jot down how I wanted the app to look and how the user 
could choose the input. In the end I opted against using a dropdown with 30 minute increments.
![24 code 3](https://github.com/KyleBarter/24hours/assets/118014478/0c0a0559-5b32-4611-a5f6-bd14d64f9619)



I was also quite proud of adding the feature which meant the user could only journal their activity once they check it to state it’s completed. I found ejs particularly messy to work with as it requires 
a thorough readthrough as at a glance, it’s very messy and not that easy on the eye.
![24 code 4](https://github.com/KyleBarter/24hours/assets/118014478/0cfe0ec0-0e25-41b6-a0ae-89f328862116)


Challenges
Unfortunately, the largest challenge I found was with creating the pie chart. I have not yet added this feature but plan to in the future. The core concept of this idea was that the user could have a 
visualisation of their day, something I feel your to-do lists or general calendars don’t quite achieve. For the presentation of the project I removed my pie chart lines of code as I wanted a project that 
was ready for presentation, and not one with any errors.
Another challenge I came across was with the delete function. I found MVC more linear to write code, but tougher to find any small errors such as typos as there are so many different files where a certain 
feature could break, delete being one of them. The simple solution to this was just to break down and work through each file one at a time, controller, route, view and server. Breaking these things down one 
at a time painted a clearer picture and wasn’t as chaotic as where I was trying to tweak one thing in each of them. I made great use of the documentation online for MongoDB also, reading through these and 
stack overflow made the problem solving process much easier.
Wins
I was really happy with how the app looks and feels. As I’m targeting this towards people who suffer from mental illness, my goal was to make sure they wouldn’t feel like they’re failing if they don’t achieve 
their goals, and if they do it’s great. The colour scheme I went with was there to create a calm and peaceful environment for them to set goals and work from. It’s efficient and for people who are visual like 
myself, it’s a great way of seeing what you’ve set yourself for the day. To then journal them so you can come back to them at a later date if you’re feeling stuck would be a big boost for the user, as everyone 
has off days and they’re no different.

Key Learnings/Takeaways
I feel very comfortable with working within a MERN stack, making sure the database and server are set up and that it can run. Watching my work and vision turn into a functioning website was incredibly satisfying. 

As mentioned previously, I hadn’t worked with any date functionality so now that I know I can work with the getDay(), getDate() etc. methods is a huge bonus for any future projects I work on.

Working with routing for the first time also felt quite natural to me, it’s just that working in an MVC model can be quite fragile so as one typo or misplaced / can end up being quite difficult to try and find. 

I’m also happy to have started using async functions, the await keyword and try, catch blocks. Learning to use functions in as many different ways as possible will make me a more proficient engineer in the future.

Bugs
After sending the first draft of the site to friends looking for feedback I found that you can enter minus numbers in the minutes section when creating or editing an activity, fortunately this is an easy fix to use 
a conditional if minutes < 0 to throw an error and ask the user to enter a position number.

I’ve also noticed on load the user can click the journal straight away, but once ticked and unticked this is when the feature of only being able to journal once completed kicks in. I’m thinking it may need to go 
entirely as maybe the user should be able to journal if they didn’t get to achieve their goal, as it could be a good space for them to diary.

Future Improvements
As this is a project I’ve thought about a lot in the past I’m keen to get back to it to make this a more useful website for people and myself. The pie chart for the ‘today at a glance’ screen is one of my top priorities. 
I’d also eventually like to allow the user more customization by allowing them to pick the colour for each activity category, from a list of pastel colours to keep in line with the calming theme.

Much further down the line I can see this working better as an app for your mobile, it’s entire purpose fits more to the mobile device as they’re more convenient. In doing this I would be using notifications to give 
the user data about how they’ve got on in their week, and also if the user hasn’t completed a certain goal, to provide positive feedback to them and let them know that tomorrow is a new day and to not feel down if they 
failed to achieve their goals. The purpose of this app is to make people feel good about their improvements and how far they’ve come, not how far they have to go.

Since learning React, it is my aim to come back to this and redesign it within a MERN stack. I feel like this works perfectly as a single page application and look forward to sinking my teeth back into this.
