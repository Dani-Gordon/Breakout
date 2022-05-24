<img width="1251" alt="GameTitle" src="./images/Breakout Title w.Discoball.png">

# Deployment
The game has been deployed with GitHub Pages: [CLICK HERE TO PLAY! PSA: It's addictive!](https://dani-gordon.github.io/Breakout/)

# Goal and Timeframe 
To build a functioning browser game with pure JavaScript in 8 days - solo project.


# The Rules of Discoball Engagement

Use your mouse to click Start Game. Move your bar along the bottom of the screen with your Right and Left arrow keys so the ball hits the bar and bounces back up, hitting the brick in it's path. Each brick, depending on the color, is worth either 1, 3 or 5 points. The max amount of points a player could score (by hitting all of the bricks on the screen) is 238.

Yellow Bricks = 1pt
Green Bricks = 3 pts
Purple Bricks = 5 pts

<img width="1251" alt="GameTitle" src="images/Screen Recording 2022-03-24 at 10.10.54.gif">

# Project Overview

Breakout was the first of many projects completed during the General Assembly SEI course. It showcases my ability to utilize HTML, CSS & JavaScript.

***Day 1 (Thurs)*** – Received Project 1 brief and given the task of developing an idea. Thinking about games I was fond of as a child, I couldn’t help but think about Breakout, otherwise known as Bricks or Pong. Frogger was also on the list of game ideas to choose from. Based on my love for Frogs, I couldn’t choose. I decided to sketch out ideas and do the wireframing for both Breakout and Frogger.  

***Day 2 (Fri)*** – Presented both sketches and was signed off to both. In the end, I knew Breakout would be harder, but also knew I would be upset with myself had I not tried to recreate it, so I decided to push on and go for it. I started to pseudocode the pieces I knew would be challenging and created the grid, so I had a visual to move forward with. The hardest part was going to be figuring out how to get the ball moving through a grid of divs without using Canvas since we hadn’t been taught how to use that program and were required to only use the skills we acquired so far with HTML-5, CSS, and JavaScript.  

Hand drawn & Excalidraw wireframing for Breakout and Frogger:

<img width="600" alt="image" src="https://user-images.githubusercontent.com/99892502/168496270-8eba75ba-0c88-4983-894b-36a6a27364d0.png">

<img width="700" alt="image" src="https://user-images.githubusercontent.com/99892502/168496372-6c669a95-184f-4df7-8695-bb794298ef6e.png">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/99892502/168496379-f84addbc-1ebf-4400-a2c8-381a528bb695.png">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/99892502/168496387-cc4704fc-6f0f-4122-958a-8b2108b9aae6.png">


***Day 3 (Sat)*** – Worked on styling the game with retro colors, found the font for the title and added it, researched how to move the paddle on the screen with arrow keys and wrote the functions for that.  

***Day 4 (Sun)*** –  Using the functions written yesterday, I was able to get the paddle to move across the screen; however, it would move off the screen when moving to the right by 2 divs, and would wrap around to the row above by 2 divs when moving to the left. 

***Day 5 (Mon)*** - Figured out the code needed to be able to move the paddle back and forth on the grid without it jumping to the line above when moving it to the left, as well as how to have it stop on both edges of the screen without part of it disappearing into the abyss. This took a bit of time. Here is the code that allowed the functionality of the paddle to work as expected.  

 <img width="400" alt="image" src="https://user-images.githubusercontent.com/99892502/168495527-e1c3b0bc-0724-441e-a5ef-fe11116ccb48.png">

***Day 6 (Tues)*** – Added a ball to the screen (discoball of course!) by adding an image into a div on the grid, creating a starting point above the paddle and was unable to make it move for most of the day. Later, I added an invisible ball I could move anywhere on the screen based on the left and right position on the x & y axis. In the end, this method didn’t work as I couldn’t write code to have it move the way I needed it to and connect with the bricks, as it wasn’t housed within the divs themselves. I continued working on this portion for the remainder of the day and created walls so the ball would remain within the game page. 

<img width="500" alt="image" src="https://user-images.githubusercontent.com/99892502/168496405-a53111a0-cf01-4d87-935b-c561989ef4ae.png">    <img width="500" alt="image" src="https://user-images.githubusercontent.com/99892502/168496410-f38dcc43-23e8-4c11-bf1f-c9bbef844e5d.png">

***Day 7 (Wed)*** - Added the scoring portion of the game in addition to the sounds when the ball hits the brick, Start Game, Restart Game and Game Over. By the end of the day, my ball (img) was moving up and down, left, and right. I added functions to handle collisions for when the ball hit the walls and bricks as it bounced. Here is a snippet of the code written for the collision with bricks portion of the game. 
 
<img width="500" alt="image" src="https://user-images.githubusercontent.com/99892502/168496421-013b9143-7ef4-4ecf-8af2-b614216acf40.png">    
<img width="200" alt="image" src="https://user-images.githubusercontent.com/99892502/168496426-1fbcfa46-1e97-42bf-82a0-b4159718a9f8.png">

***Day 8 (Thurs)*** - Today I realized the ball wasn’t hitting certain bricks while playing the game. I deduced that this was due to the ball being housed within a numbered div and based on a computer-generated algorithm. I created a copy of the complete game code and reconfigured it to have a smaller grid, and therefore a smaller paddle. The previous paddle was made up of 4 divs and was now only 3. This allowed for the ball to hit other bricks; however, it still had a bug, and only hit odd numbered divs on one row and even on the other. I debugged this by changing the angle of the ball making sure the ball moved straight up on one portion of the code and leaving the rest as rightUP, downLeft, upLeft and straight. This was enough to give the algorithm a bit of randomness and therefore allowed the ball to hit not only the even and odd numbered divs, but ALL of them! :) Once that worked, I realized there was a bug related to the top left and right corners of the game grid. Once the ball hits the bricks and has an open path to the corner of the grid, the ball disappears off the grid. Here is a snippet of the code written for the ball movement portion of the game. 

 <img width="300" alt="image" src="https://user-images.githubusercontent.com/99892502/168495574-055811c6-2594-4196-a3a8-b1ce2c069bb2.png">

***Day 9 (Fri-presentation day)*** –All morning, I tried debugging the corner wall issue, requested assistance and unfortunately was unable to debug it prior to presentation time. 

## Bugs:

-	Ball disappears off the grid in the top right and left corners once the bricks in that area have been hit and there’s a clear path.

## Challenges: 

Since this was my first project using JavaScript to create a grid-based game, I faced many challenges. The following were the most noteworthy challenges:

-	Collision detection logic
-	Ball movement/set interval logic


## Wins:

-	Movement of the ball bouncing through divs onto the paddle and up to the bricks.
-	Randomization of movement of the ball when hitting the bricks, providing the player a chance to win and hit all bricks on the grid.

# Future Improvements/Features 
***

Some additional features I would like to add to improve the game and create a more in-depth user experience:
-	For the ball to move faster and paddle to shrink after each level of bricks have been removed.
-	Additional levels to the game. 
-	Responsive design to allow users to play in mobile/tablet mode.

# Key Learnings
***

Although it was challenging, using JavaScript to make my first grid-based game was a great experience and loads of fun! Throughout the process, I learned a lot about DOM manipulation, how to handle collisions and how to create movement with set intervals. 

## Inspiration and History: 

The guy behind the guy behind the guy: <br>
Breakout is an arcade video game developed and published by Atari, Inc.and released on May 13, 1976.

- [Breakout arcade game - Youtube](https://www.youtube.com/watch?v=AMUv8KvVt08)

- [Breakout - Wikipedia](<https://en.wikipedia.org/wiki/Breakout_(video_game)>)


