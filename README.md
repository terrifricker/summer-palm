# summer-palm

A test project for fieldtoplate.com.  On that website, there will be a page with an svg image of a deer
divided into butcher cuts.  When a specific cut is clicked, a box will appear to the side with a menu
including a video link for butchering that section as well as a list of recipes for that cut of meat.

In this project, a simple svg of a rainbow circle behind a palm tree is used.  Each color section was
given an html id that indicates the color.  When a section is clicked, the color information is extracted
from the html id of the click event target.  A new html element is created showing the name of the color
as well as a box showing the color.  The color information box is added to the dom at the click point with
no size or opacity.  Once rendered, the box is enlarged, becomes opaque, and moves to its final position
on the screen.

When a new section is clicked, the old box is removed and a new box moves into position.
