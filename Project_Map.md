<!-- PROJECT MAP FOR NETFLIX CLONE -->

1. GET AN API KEY FROM TMDB:
<!-- 0c27e117ae60f2cfd0ff1310060fd3a9  -->

2. SETUP FIREBASE HOSTING BY CREATING A NETFLIX CLONE PROJECT
<!-- Requires installation of firebase-tools in project directory -->

3. GET ALL THE MOVIES

- <!-- Install axios -->

- <!-- Create an object to house all requests, which would be made through axios - "requests.js" -->

- <!-- Create axios.js file & import axios into it -->

- <!-- Set up an instance variable with the base url routed to themoviedbAPI, then export instance -->

- <!-- Create and export a Row.js file and component, which will house each row of movie types. This Row component will return a div.row which wraps round the h2.(movie)title, div.row__posters -->

- <!-- Row component will have a title and posters section, where each title is uniquely passed down as a prop into each row in App.js. Remember to recieve and destructure title prop in Row.js before tagging it in component. -->

- <!-- Also in Row component, set up a state to keep track of the movies coming in, which is initially set to an empty array. -->

- <!-- In App.js, each row will also have a fetchUrl prop, which is ={requests.fetch${unique genre}}. This should also be destructured in Row params --->

4. FETCHING MOVIES DATA WITH REACT HOOKS

- <!-- Import useEffect and axios.js in Row file -->

- <!-- Inject useEffect into Row component - this makes it run once the Row component mounts -->

- <!-- UseEffect will call an async fetchData function, which will use axios' instance function to get movies info, using the unique genre prop. REMEMBER TO INCLUDE fetchUrl as useEffect's dependency, so that the app re-renders if the url ever changes. -->

- <!-- In Row.js, setup a const baseUrl to "https://image.tmdb.org/t/p/original/", then in div.row__posters, map over each movie coming from the state, and return a poster path - to be prepended by with the baseUrl -->

- <!-- Poster images for netflix originals are bigger, and to implement this feature, pass in an isLargeRow prop into netflix original row, and receive in Row.js. To further implement this, add <img key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} -->

5. CREATING THE BANNER

- <!-- Create a Banner.js file and Banner component in App.js, just above the row. Banner component will return a header element, which will have a title section, a div with buttons for play, and a description section -->
- <!-- Import useState, useEffect, axios, and request.js files, then setup a state to control the movie to be shown on banner. In banner component, create a useEffect hook that will hold a fetchData function. Essentially, fetchData function will make another axios request to fetch a random movie from Netflix Originals genre. -->
- <!-- In header element returned in banner, wrap a banner header element around the banner__contents div, banner buttons, & banner__description. Then create a banner.css file to style that  -->

6. CREATING THE NAVBAR

- <!-- Create files for Nav.js and Nav.css. Nav.js will return the netflix logo, which would then be added to the App -->

7. CREATING TRAILER POPUPS

- <!-- This effect would require 2 packages: REACT YOUTUBE & MOVIE-TRAILER. React-Youtube will take in 2 arguments; Trailer url - which will and options - which will customize the player tab. -->
- <!-- Setup a state value which would initially hold the trailerUrl as an empty string. Then setup an onClick function on each movie image, passing in the movie as an argument... this goes to the handleClick function. Handle click function would then do some code magic to get trailer of the movie clicked on - only works for the Netflix Original genre. -->

8. DEPLOYING TO FIREBASE

- <!-- Open terminal in vscode and run firebase login, firebase init, configure the needful with git (optional), then firebase deploy to see the magic!!!! -->
- <!--  -->
