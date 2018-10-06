# Trajectory Simulator
A small JavaScript based browser-application with some integrated speech control. I must have written it around 2015.
The project is literally my first ever script in JavaScript, I did it for fun.
### Usage:
There are two ways:
1. Just click on the 'Trajectory Simulator.html' and let it load. A downside is, in this case the voice control won't work.
2. For the full version you should try to serve the project folder with e.g. Apache or NodeJs and then "click on the 'Trajectory Simulator.html'" and run it in **Google Chrome!** :)
Example:
If you have Python 3 on your computer, you can serve the app likewise:
```
python -m http.serve <port_number> 
```
 
where you can change that for 8080, 4300 or any other of preference, or just leave it out and go with the default port, which I think is 8000.

### Here is the dictionary of the recognized voice commands:
*angle up* /
*angle down* -> this will start increasing or decreasing the angle.

*increase speed* / *speed up*

*decrease speed* / *speed down* -> likewise the speed of the projectile.

*increase gravity* (or) *gravity up*

*decrease gravity* (or) *gravity down* -> likewise the gravity

*shoot* (to launch the projectile) -> fires the projectile down its set-up trajectory.

*stop* -> to stop any previous voice command

Feel free to click anywhere on the 'blueprint' to add a point from which you would like the ball to be launched.


### A Screenshot:
[![Git_Cropped.jpg](https://i.postimg.cc/dV8gbCkZ/Git_Cropped.jpg)](https://postimg.cc/NKjNT5xQ)
