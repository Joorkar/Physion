const express = require("express")
const bodyParser = require("body-parser");
const app = express()
const path = require("path")
const PageCon = require("./scraping.js")
const PageCon2 = require("./ar2.js")
const PUERTO= process.env.PORT || 3000;
app.set('port',PUERTO)

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Minddleware 
app.use(express.static(path.join(__dirname,"public")))

// routers
app.post('/api',(req,res)=>{
    res.send([
            "Hyperspectral data from hundreds of wavelengths of reflected light can provide new information about Earth’s surface and atmosphere to help scientists understand Earth’s geology and biology, as well as the effects of climate change.",
            "The research project, called the Geological Earth Mapping Experiment (GEMx), will use NASA’s Airborne Visible/Infrared Imaging Spectrometer (AVIRIS) and Hyperspectral Thermal Emission Spectrometer (HyTES) instruments flown on NASA’s ER-2 and Gulfstream V aircraft to collect the measurements over the country’s arid and semi-arid regions, including parts of California, Nevada, Arizona, and New Mexico.",
            "“This exciting new project is just one example of the Biden-Harris Administration’s commitment to a clean energy future,” said NASA Administrator Bill Nelson. “NASA has a long history of Earth observation that shows us how the planet is responding to climate change. This project builds on our 60-year legacy, and can show us where to look for the resources that support our transition to a clean energy economy. With our partners at USGS, NASA has led the way in developing these Earth observation systems to gather information to measure and monitor the environment and climate change.",
            "These new observations record the spectroscopic fingerprints of surface minerals across hundreds of wavelength bands. In other words, these are measurements not only of visible light our eyes can see but also of wavelengths of light beyond the visible into the infrared. The data can be used to identify the presence of a wide variety of minerals including primary rock-forming minerals as well as mineral weathering or alteration.",
    ])
   // res.send(["asd","wdcdfsd","efcesdcfsdf"])
    //    
    //
})


app.listen(app.get("port"), () => {
    console.log(`Aplicacion corendo en el puerto ${app.get("port")}`)
})