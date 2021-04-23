# Pod.io
Pod.io is an app that plays the latest episodes of select NPR podcasts. In the future this will be expanded to include a wider variety of podcasts as well as allow the user to input their own custom podcast feed.

## Live demo
http://pod-io.herokuapp.com

## To run locally
* Clone this repo
* Type ```npm i``` and then ```npm start``` in terminal in project directory
* Navigate to ```localhost:3000``` on Google Chrome

## Screenshots
### Podcast List
<img width="1276" alt="podcastlist" src="https://user-images.githubusercontent.com/2096314/115931420-e95ccc80-a43f-11eb-85b1-37b0005f54f8.png">
When first viewing the app, the user will be presented with a list of all available podcasts they can listen to.

### Search
<img width="1279" alt="search" src="https://user-images.githubusercontent.com/2096314/115932290-81a78100-a441-11eb-9e23-f34639665899.png">
The user can search for a podcast.
<img width="1277" alt="searchresults" src="https://user-images.githubusercontent.com/2096314/115932383-b0255c00-a441-11eb-8e99-c49616659da5.png">
After the user selects a podcast, the podcast will appear. The user can clear the selection and display all available podcasts by clicking the "x" icon on the righthand side.

### Episode List
<img width="1277" alt="episodelist" src="https://user-images.githubusercontent.com/2096314/115931494-0c877c00-a440-11eb-8b5a-2249891836af.png">
Upon clicking on a podcast, the user will be presented with a list of available episodes.
<img width="1268" alt="playing" src="https://user-images.githubusercontent.com/2096314/115932035-034adf00-a441-11eb-8f02-6ef8745d1bfd.png">
When an episode is selected, it will begin playing and the currently playing episode will be highlighted in the list. The user can pause playback with the pause button on the audio controls
<img width="1277" alt="episodelist" src="https://user-images.githubusercontent.com/2096314/115932207-53c23c80-a441-11eb-8e9e-2dea12c2d531.png">
The user can view the episode description by clicking on the expand button on the righthand side of the episode. 

## Future Features
* Play next/ last episode button
* Skip forward/ back 10 seconds button
* Volume controls
* Wider variety of podcasts
* Enhanced search functionality
* Ability to input custom podcast feed
* User accounts + ability to save favorite podcasts to account
* Dark theme and other skins
* Ability to download episodes

## Known Issues
* Audio sometimes takes several seconds to load, especially on longer episodes. 
* Back button overlaps with content on episode list on mobile view
* Currently only works on Google Chrome
* Background cuts off at bottom on some search results
