# FIFA World Cup Quiz 

! Welcome to the FIFA World Cup Quiz

FIFA World Cup Quiz 
It is an interactive quiz in which you can demonstrate your knowledge about the Soccer World Cup History, here you can see  how pure JavaScript works in a world context. The site will be targeted toward people who not only love football , sports and of course World Cups Championchips History. FIFA World Cup Quiz is a fully responsive JavaScript Football game that will allow users to Chose the Right answer, score the max points and amplify his Knowledge. 

![FIFA World Cup Quiz](media/love_maths_mockup.png)

## Features 

* Featured at the top of the page , shows the H1 at the Right inline with a World Cup Background.
* is a interactive Javascript Quiz about World cup championship football.


### Header

![Header](/assets/images/H1%20and%20header%20WCQUIZ.png)

* the Header is the title on the right scene of the screen to notify the "FIFA World Cup Quiz" 

  

![Logo](/assets/images/copa-mundo.webp)

- __The Quiz Area__

  - This section will allow the user to start the Quiz . The user will be able to easily see Quetions , and four differents answer alternatives.
  - The user will be able to select one of four answers , which just one is the correct answer. 

![Game](/assets/images/questionSection2.png)

- __The Questions section__

  - The questions section is where the user will be able to see the related question  as part of the quiz. The user will be able choose the Right answer from four different boxes .
  - The user will be able to select the correct answer and a pop-up will make it known to the user if they answered correctly. 
  - The Answers will pop-up red if it is false and automatically green if it is true.

![Question](/assets/images/quizAREA.png)

- __The Score and Next button Area__

  - This section will allow the user to see exactly how many correct and incorrect answers they have Scored. 
  - when the user has selected the choose answer automatically the next button will pop-up to give way to the next Question.

![score](/assets/images/score%20and%20next.png)

- __The Play Again Button__

- Then when the user has finished the quiz, the total score appears and the button to play again!!

![Play Again](/assets/images/playagainButton.png)

## Testing 


they Quiz works Properly and efficient !!

![testing lighthouse](/assets/images/lighthouseFIFA.png)


- the project looks good wiht a performance of 95%,
- accesibility of 100%,
- best practices of 100%,
- SEO of 91%,

### responsive in all screen sizes.

i had issues with the background and the font style, was not enought for the accesibility i wanted so i changed the colours at the last moment.

![bug](/assets/images/bugFIFA.png)

also had isse wiht the handleNextButton Fucntion , because didn't want to show me the next question, and this becuase 'currentQuestion' and 'currentQuestion.answers' was 'undefined' , but i correct this Bug.




### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 