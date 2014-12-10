# Grunt C5-5.6
Task runner for Concrete5 5.6. 

Included Tasks
- less
- uglify
- imageoptim
- watch

## How to use
1. Download the files and paste the folder into the root of your Concrete installation. 
2. Open the folder in the terminal
3. Run npm install
4. Edit DIR_BASE in Gruntfile.js


## Run tasks
- grunt: uglify the js and compile less.
- grunt release: uglify the js, compile and minify less, optimize images
- grunt watch: watches the files in the theme folder and triggers live reload 

## Directories
The Gruntfile is assuming the following theme folder structure.
/themename  
/themename/js  
/themename/css  
/themename/img
/themename/elements

If you have another structure than you need to adjust the paths in the Gruntfile.js

