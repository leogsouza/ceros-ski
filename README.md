# Ceros Ski Code Challenge

Welcome to the Ceros Code Challenge - Ski Edition!

For this challenge, we have included some base code for Ceros Ski, our version of the classic Windows game SkiFree. If
you've never heard of SkiFree, Google has plenty of examples. Better yet, you can play our version here: 
http://ceros-ski.herokuapp.com/  

Or deploy it locally by running:
```
npm install
npm run dev
```

There is no exact time limit on this challenge and we understand that everyone has varying levels of free time. We'd 
rather you take the time and produce a solution up to your ability than rush and turn in a suboptimal challenge. Please 
look through the requirements below and let us know when you will have something for us to look at. If anything is 
unclear, don't hesitate to reach out.

**Requirements**

Throughout your completion of these requirements, be mindful of the design/architecture of your solutions and the 
quality of your code. We've provided the base code as a sample of what we expect. That being said, there are ways the
design and architecture could be better. If you find a better way to do something, by all means, make it better! Your 
solution can only gain from having a better foundation.

* **Fix a bug:**

  There is a bug in the game. Well, at least one bug that we know of. Use the following bug report to debug the code
  and fix the root of the problem.
  * Steps to Reproduce:
    1. Load the game
    1. Crash into an obstacle
    1. Press the left arrow key
  * Expected Result: The skier gets up and is facing to the left
  * Actual Result: Giant blizzard occurs causing the screen to turn completely white (or maybe the game just crashes!)
  
* **Write unit tests:**

  The base code has Jest, a unit testing framework, installed. Write some unit tests to ensure that the above mentioned
  bug does not come back.
  
* **Extend existing functionality:**

  We want to see your ability to extend upon a part of the game that already exists. Add in the ability for the skier to 
  jump. The asset file for jumps is already included. All you gotta do is make the guy jump. We even included some jump 
  trick assets if you wanted to get really fancy!
  * Have the skier jump by pressing a key AND use the ramp asset to have the skier jump whenever he hits a ramp.
  * The skier should be able to jump over some obstacles while in the air. 
    * Rocks can be jumped over
    * Trees can NOT be jumped over
  * Anything else you'd like to add to the skier's jumping ability, go for it!
   
* **Build something new:**

  Now it's time to add something completely new. In the original Ski Free game, if you skied for too long, 
  a yeti would chase you down and eat you. In Ceros Ski, we've provided assets for a Rhino to run after the skier, 
  catch him and eat him.
  * The Rhino should appear after a set amount of time or distance skied and chase the skier, using the running assets
    we've provided to animate the rhino.
  * If the rhino catches the skier, it's game over and the rhino should eat the skier. 

* **Documentation:**

  * Update this README file with your comments about your work; what was done, what wasn't, features added & known bugs.
  * Provide a way for us to view the completed code and run it, either locally or through a cloud provider
  
* **Be original:**  
  * This should go without saying but don’t copy someone else’s game implementation!

**Grading** 

Your challenge will be graded based upon the following criteria. **Before spending time on any bonus items, make sure 
you have fulfilled this criteria to the best of your ability, especially the quality of your code and the 
design/architecture of your solutions. We cannot stress this enough!**

* How well you've followed the instructions. Did you do everything we said you should do?
* The quality of your code. We have a high standard for code quality and we expect all code to be up to production 
  quality before it gets to code review. Is it clean, maintainable, unit-testable, and scalable?
* The design of your solution and your ability to solve complex problems through simple and easy to read solutions.
* The effectiveness of your unit tests. Your tests should properly cover the code and methods being tested.
* How well you document your solution. We want to know what you did and why you did it.

**Bonus**

*Note: You won’t be marked down for excluding any of this, it’s purely bonus.  If you’re really up against the clock, 
make sure you complete all of the listed requirements and to focus on writing clean, well organized, well documented 
code before taking on any of the bonus.*

If you're having fun with this, feel free to add more to it. Here's some ideas or come up with your own. We love seeing 
how creative candidates get with this.
 
* Provide a way to reset the game once it's over
* Provide a way to pause and resume the game
* Add a score that increments as the skier skis further
* Increase the difficulty the longer the skier skis (increase speed, increase obstacle frequency, etc.)
* Deploy the game to a server so that we can play it without having to install it locally
* Write more unit tests for your code

We are looking forward to see what you come up with!


# What I've done


## Playing this solution
To play my solution you can run the commands locally as it was stated on the section above or you can see at https://ceros-ski-free.netlify.app/.


## Github Repo
The code of this solution can be found at https://github.com/leogsouza/ceros-ski .


## Requirements
* **Fix a Bug:**

  I fixed the reported bug that caused a blank screen when the skier is crashed and pressed the left key. To solve this bug I just set the direction to left when the skier is crashed and the player press the respective key. While I was fixing this bug, I observed that if the skier was crashed and the right key was pressed nothing happened so, I set the same behavior when right key is pressed that is when is crashed and right key is pressed the direction is set to right.

* **Write Unit Tests:**

  To guarantee that this bug was fixed correctly I added unit tests for this bug and also added for most part of Skier implementation.

*  **Extend existing functionality:**

    To accomplish this task first, I had to dive into the code to understand how the assets were placed on the canvas and how I could set a key to perform the jump action. So, I set the SPACE key to be the trigger to jump action and implmented into Skier class the code to perform the jump. It is a simple method that just iterate through the assets that represents a jump action. I also handled the way that the skier hit the obstacles identifying which could be jumped over and which not and if the Skier is making a jump or not.

    While I was implementing this functionality, I found a bug that sometimes the game didn't start properly. The bug happened because sometimes there wasn't previousGameWindow so, to solve this when there's no previousGameWindow so I abort the method.

* **Build  something new:**

  Wow! That was a challenging task.
  To complete this task I create a new class to represent the Rhino Entity and set the constants to identify the moves and eat assets. The Rhino appears on game after a specific period of time and at a specific positin start to chase the skier. When the distance between the skier and the rhino is 0 so, the Rhino catches him so the skier is hidden and it starts the Eating Animation and the skier can't move anymore finishing the game!

* **Documentation:**

  This **README** is being updated when there are new implmeentations on this project.

* **Bonus:**

  I implemented some feature suggested on bonus section.
  - [x] Provide a way to reset the game once it's over. The game can be restarted pressing the F3 key
  - [x] Provide a way to pause and resume the game. The game can be paused and resumed pressing the P key



## Feature I would like to implement

* Write more unit tests for all feature
* Create an Game Over windows
* Display the distance that the skier covered while he was skiing
* Increase and decrease the skier's speed depending on the direction
* A scoreboard
* Play some audios when rhino appears and when the game is over.