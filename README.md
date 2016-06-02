<img src="http://montanacodeschool.com/wp-content/uploads/2015/06/MCS_LOGO_v1.png" width="200" align="right"/>

##Giphy API

##Purpose
The purpose of this day project is practice doing API calls using jQuery.

##Directions
Fork and clone this repository. Complete all of the following steps. When you have finished, push your code into GitHub.

 Review the code that is already built in your folder. I have provided the HTML and CSS structure for you.

 Call in your jQuery CDN in the index.html file

 Create and call in an app.js file in the index.html file

 In the app.js file, setup your environment so that the page loads prior to running any JavaScript or jQuery code. (Hint: Use $(document).ready())

 Set up a GET API request using the ```$.ajax({method: "GET", url: "API url"})``` syntax

 Look up the API url needed to complete this request on [Giphy API](https://api.giphy.com/) and plug it into the url key in the API object.

 After you have set up the request, create a .done promise with a callback function referencing the response as a parameter.

 Using some JavaScript logic, loop through the array of objects, and append the object image urls using jQuery. If you are having a hard time figuring out what keys in the giphy objects should be used, console.log the objects and navigate through them so you can see the structure of the objects. When you have successfully appended the img tags, you should start seeing the funny cat giphys pop up on your view!

 Currently, the giphys are popping up unprompted, so we should create a function that tells jQuery to perform the API request. Using the submit button in our html, let's have an event listener, using jQuery, listen for when we click the submit button, and tell it to run our function.

 At this stage, we haven't yet told JavaScript what kind of giphys we want to see. In order to do this, we will have to call into our function the value of the input box. You should be able to accomplish this using some vanilla JavaScript.

 When you get the function to call in your input value, you will still need to update the API url that we are using. If you look at it closely, there is a query segment that we will need to change based on our input. ```search?q=funny+cat``` You will need to replace the "funny+cat" part of the query. Using the input parameter, concatenate a new url that includes the input value in place of the funny cat.

* And finally, if you have everything working and you try to select a new giphy input, the code you have written will just append your new results to the bottom of the page. If you want to get rid of your old search results when you go to search something new, you will have to run some jQuery in the top of the function that removes the gifList class, and then in order for the code to append properly, you will have to reappend the deleted div with a class of gifList.

* Congratulations! You have completed your first API app. This will be very useful when creating servers and loading information to a database.

##Continued Practice

If you need more practice, try to create a new app, pulling information from another API. Or if you would like to fine tune the app we made today, it would be good HTML,CSS,JS, and jQuery practice.


##Copyright

(c) Montana Code School, 2016.
