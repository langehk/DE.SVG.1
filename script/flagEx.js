'use strict'

import{createSVG} from "../script/flags.js"; 
import{createGreenland} from "../countries/greenland.js";

// Flag of Greenland
let greenland = document.getElementById("greenland");
let denmark = document.getElementById("denmark");
let usa = document.getElementById("usa");


createSVG(greenland);
createSVG(denmark);
createSVG(usa);

createGreenland();

