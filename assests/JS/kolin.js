function populate(s1,s2){
  var s1 =document.getElementById(s1)
  var s2 =document.getElementById(s2)
  s2.innerHTML = "";

  if(s1.value == "Broiler"){
      var optionArray = ["|","VENCOBB430|VENCOBB430", "ROSS 308|ROSS 308", "HUBBARD|HUBBARD"]
    } 
  else if(s1.value == "Layer"){
      var optionArray = ["|","BV 300|BV 300", "HY-LINE BROWN|HY-LINE BROWN", "BOVAN|BOVAN"]
  }

  for(var option in optionArray){
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.innerHTML=  pair[0]
      newOption.value = pair[1]
      s2.options.add(newOption)
  }
}

function populate1(s2,s3){
  var s2 =document.getElementById(s2)
  var s3 =document.getElementById(s3)
  s3.innerHTML = "";

  if(s2.value == "VENCOBB430"){
      var optionArray = ["Prestarter|Prestarter", "Starter|Starter", "Finisher|Finisher"];
  }
  else if(s2.value == "HUBBARD"){
    var optionArray = ["Starter(0-7)|Starter(0-7)", "Grower(8-20)|Grower(8-20)", "Finisher 1(21-30)|Finisher 1(21-30)", "Finisher 2(31-culling)|Finisher 2(31-culling)"];
  }
 
  else if(s2.value == "ROSS 308"){
      var optionArray = ["Starter(0-10)|Starter(0-10)", "Grower 1(11-20)|Grower 1(11-20)", "Grower 2(21-30)|Grower 2(21-30)", "Finisher 1(31-40)|Finisher 1(31-40)", "Finisher 2(41-Market)|Finisher 2(41-Market)"];
  }

  else if(s2.value == "BV 300"){
      var optionArray = ["Chick|Chick", "Grower|Grower", "Prelay Feed ( 16-18 WK)|Prelay Feed ( 16-18 WK)", "Phase 1 (19-40WK)|Phase 1 (19-40WK)", "Phase 2 ( 41-60WK)|Phase 2 ( 41-60WK)", "Phase 3 (61 to Liquidation)|Phase 3 (61 to Liquidation)" ];
  }

  else if(s2.value == "HY-LINE BROWN"){
      var optionArray = ["Starter 1 (0-6 WK)|Starter 1 (0-6 WK)", "Grower (6-11WK)|Grower (6-11WK)", "Developer (12-15 WK)|Developer (12-15 WK)", "Prelay (15-17 WK)|Prelay (15-17 WK)", "Layer 2 (36-46 WK)|Layer 2 (36-46 WK)", "Layer 3 (48-61 WK)|Layer 3 (48-61 WK)", "Layer 4 (61-72WK)|Layer 4 (61-72WK)", "Layer 5 ( 72WK - Liquidation)|Layer 5 ( 72WK - Liquidation)"];
  }

  else if(s2.value == "BOVAN"){   
      var optionArray = ["Starter ( 0-4WK) |Starter ( 0-4WK)", "Grower (4-10 WK)|Grower (4-10 WK)", "Pullet ( 10-16WK) |Pullet ( 10-16WK)", "Prelay ( 16-18 WK)|Prelay ( 16-18 WK)", "Layer 1( 18-20 WK)|Layer 1( 18-20 WK)", "Layer 2( 28-58 WK)|Layer 2( 28-58 WK)", "Layer 3( 50wk- Liquidation)|Layer 3( 50wk- Liquidation)"];
  }
  
  
  for(var option in optionArray){
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.innerHTML=  pair[0]
      newOption.value = pair[1]
      s3.options.add(newOption)
  }
}
 function passval(){
   var bird = document.getElementById("slct3").value
   localStorage.setItem("bird1", bird)
   var scelt1 = document.getElementById("slct1").value
   localStorage.setItem("scelt1",scelt1)
   var scelt2 = document.getElementById("slct2").value
   localStorage.setItem("scelt2",scelt2)
  } 

//slider function

var slider1 = document.getElementById("myrange1")
var output1 = document.getElementById("maize")


output1.innerHTML= slider1.value + "%";


slider1.oninput = function(){
  output1.innerHTML= this.value + "%";
  updatevalue();
} 


var slider2 = document.getElementById("myrange2")
var output2 = document.getElementById("Jowar")

output2.innerHTML= slider2.value + "%";

slider2.oninput = function(){
  output2.innerHTML= this.value + "%";
  updatevalue();
} 

var slider3 = document.getElementById("myrange3")
var output3 = document.getElementById("Bajara")

output3.innerHTML= slider3.value + "%";

slider3.oninput = function(){
  output3.innerHTML= this.value + "%";
  updatevalue();
} 

var slider4 = document.getElementById("myrange4")
var output4 = document.getElementById("Rice(broken)")

output4.innerHTML= slider4.value + "%";

slider4.oninput = function(){
  output4.innerHTML= this.value + "%";
  updatevalue();
} 

var slider5 = document.getElementById("myrange5")
var output5 = document.getElementById("Ricebran*")

output5.innerHTML= slider5.value + "%";

slider5.oninput = function(){
  output5.innerHTML= this.value + "%";
  updatevalue();
} 

var slider6 = document.getElementById("myrange6")
var output6 = document.getElementById("Wheat")

output6.innerHTML= slider6.value + "%";

slider6.oninput = function(){
  output6.innerHTML= this.value + "%";
  updatevalue();
} 

var slider7 = document.getElementById("myrange7")
var output7 = document.getElementById("Barley")

output7.innerHTML= slider7.value + "%";

slider7.oninput = function(){
  output7.innerHTML= this.value + "%";
  updatevalue();
} 

var slider8 = document.getElementById("myrange8")
var output8 = document.getElementById("Ricepolish")

output8.innerHTML= slider8.value + "%";

slider8.oninput = function(){
  output8.innerHTML= this.value + "%";
  updatevalue();
} 

var slider9 = document.getElementById("myrange9")
var output9 = document.getElementById("Bakeryby-product*")

output9.innerHTML= slider9.value + "%";

slider9.oninput = function(){
  output9.innerHTML= this.value + "%";
  updatevalue();
} 

var slider10 = document.getElementById("myrange10")
var output10 = document.getElementById("SoyExtract")

output10.innerHTML= slider10.value + "%";

slider10.oninput = function(){
  output10.innerHTML= this.value + "%";
  updatevalue();
} 


var slider11 = document.getElementById("myrange11")
var output11 = document.getElementById("GroundnutExtract(GNC)")

output11.innerHTML= slider10.value + "%";

slider11.oninput = function(){
  output11.innerHTML= this.value + "%";
  updatevalue();
} 

var slider12 = document.getElementById("myrange12")
var output12 = document.getElementById("RapeseedExtract")

output12.innerHTML= slider12.value + "%";

slider12.oninput = function(){
  output12.innerHTML= this.value + "%";
  updatevalue();
} 

var slider13 = document.getElementById("myrange13")
var output13 = document.getElementById("SunflowerExtract")

output13.innerHTML= slider13.value + "%";

slider13.oninput = function(){
  output13.innerHTML= this.value + "%";
  updatevalue();
} 

var slider14 = document.getElementById("myrange14")
var output14 = document.getElementById("Soyabeanmeal*")

output14.innerHTML= slider14.value + "%";

slider14.oninput = function(){
  output14.innerHTML= this.value + "%";
  updatevalue();
} 

var slider15 = document.getElementById("myrange15")
var output15 = document.getElementById("SesameExtract")

output15.innerHTML= slider15.value + "%";

slider15.oninput = function(){
  output15.innerHTML= this.value + "%";
  updatevalue();
} 

var slider16 = document.getElementById("myrange16")
var output16 = document.getElementById("Full-fatsoybeans*")

output16.innerHTML= slider16.value + "%";

slider16.oninput = function(){
  output16.innerHTML= this.value + "%";
  updatevalue();
} 

var slider17 = document.getElementById("myrange17")
var output17 = document.getElementById("Cottonseedmeal*")

output17.innerHTML= slider17.value + "%";

slider17.oninput = function(){
  output17.innerHTML= this.value + "%";
  updatevalue();
} 


var slider18 = document.getElementById("myrange18")
var output18 = document.getElementById("MaizeGluten42")

output18.innerHTML= slider18.value + "%";

slider18.oninput = function(){
  output18.innerHTML= this.value + "%";
  updatevalue();
} 


var slider19 = document.getElementById("myrange19")
var output19 = document.getElementById("MaizeGluten60")

output19.innerHTML= slider19.value + "%";

slider19.oninput = function(){
  output19.innerHTML= this.value + "%";
  updatevalue();
} 

var slider20 = document.getElementById("myrange20")
var output20 = document.getElementById("Peanutmeal*")

output20.innerHTML= slider20.value + "%";

slider20.oninput = function(){
  output20.innerHTML= this.value + "%";
  updatevalue();

} 


var slider21 = document.getElementById("myrange21")
var output21 = document.getElementById("Sesamemeal*")

output21.innerHTML= slider21.value + "%";

slider21.oninput = function(){
  output21.innerHTML= this.value + "%";
  updatevalue();

} 

var slider22 = document.getElementById("myrange22")
var output22 = document.getElementById("Sunflowermeal*")

output22.innerHTML= slider22.value + "%";

slider22.oninput = function(){
  output22.innerHTML= this.value + "%";
  updatevalue();
} 


var slider23 = document.getElementById("myrange23")
var output23 = document.getElementById("Fishmeal*")

output23.innerHTML= slider23.value + "%";

slider23.oninput = function(){
  output23.innerHTML= this.value + "%";
  updatevalue();
} 

var slider24 = document.getElementById("myrange24")
var output24 = document.getElementById("MeatandBonemeal50%")

output24.innerHTML= slider24.value + "%";

slider24.oninput = function(){
  output24.innerHTML= this.value + "%";
  updatevalue();
} 


var slider25 = document.getElementById("myrange25")
var output25 = document.getElementById("Poultryby-productmeal*")

output25.innerHTML= slider25.value + "%";

slider25.oninput = function(){
  output25.innerHTML= this.value + "%";
  updatevalue();
} 

var slider26 = document.getElementById("myrange26")
var output26 = document.getElementById("Feather'sMeal^")

output26.innerHTML= slider26.value + "%";

slider26.oninput = function(){
  output26.innerHTML= this.value + "%";
  updatevalue();
} 

var slider27 = document.getElementById("myrange27")
var output27 = document.getElementById("RicebranDoc")

output27.innerHTML= slider27.value + "%";

slider27.oninput = function(){
  output27.innerHTML= this.value + "%";
  updatevalue();
} 


var slider28 = document.getElementById("myrange28")
var output28 = document.getElementById("WheatBran")

output28.innerHTML= slider28.value + "%";

slider28.oninput = function(){
  output28.innerHTML= this.value + "%";
  updatevalue();
} 


var slider29 = document.getElementById("myrange29")
var output29 = document.getElementById("SalseedExtract")

output29.innerHTML= slider29.value + "%";

slider29.oninput = function(){
  output29.innerHTML= this.value + "%";
  updatevalue();
} 


var slider30 = document.getElementById("myrange30")
var output30 = document.getElementById("Molasses")

output30.innerHTML= slider30.value + "%";

slider30.oninput = function(){
  output30.innerHTML= this.value + "%";
  updatevalue();
} 



var slider31 = document.getElementById("myrange31")
var output31 = document.getElementById("Blood^")

output31.innerHTML= slider31.value + "%";

slider31.oninput = function(){
  output31.innerHTML= this.value + "%";
  updatevalue();
} 


var slider32 = document.getElementById("myrange32")
var output32 = document.getElementById("CoconutCocosnucifera^")

output32.innerHTML= slider32.value + "%";

slider32.oninput = function(){
  output32.innerHTML= this.value + "%";
  updatevalue();
} 

var slider33 = document.getElementById("myrange33")
var output33 = document.getElementById("Yeast,Brewer'sSaccharo-mycescerevisiae.Dehydrated^")

output33.innerHTML= slider33.value + "%";

slider33.oninput = function(){
  output33.innerHTML= this.value + "%";
  updatevalue();
} 


var slider34 = document.getElementById("myrange34")
var output34 = document.getElementById("Yeast,Torulatorulopsisutilisdehydrated^")

output34.innerHTML= slider33.value + "%";

slider34.oninput = function(){
  output34.innerHTML= this.value + "%";
  updatevalue();
} 


function updatevalue(){
  var perct = parseInt(slider1.value) + parseInt(slider2.value)+ parseInt(slider3.value) + parseInt(slider4.value)+ parseInt(slider5.value)+ parseInt(slider6.value) + parseInt(slider7.value) + parseInt(slider8.value) + parseInt(slider9.value) + parseInt(slider10.value)+ parseInt(slider11.value) + parseInt(slider12.value) + parseInt(slider13.value) + parseInt(slider14.value)+ parseInt(slider15.value) + parseInt(slider16.value)+ parseInt(slider17.value)+ parseInt(slider18.value) + parseInt(slider19.value)+ parseInt(slider20.value)+ parseInt(slider21.value) + parseInt(slider22.value)+ parseInt(slider23.value)+ parseInt(slider24.value)+ parseInt(slider25.value)+ parseInt(slider26.value)+ parseInt(slider27.value)+parseInt(slider28.value)+ parseInt(slider29.value)+ parseInt(slider30.value)+ parseInt(slider31.value)+ parseInt(slider32.value)+ parseInt(slider33.value)+ parseInt(slider34.value);
  var perct1 = perct / 34
  document.getElementById('per').innerHTML = perct + "%"   
  console.log("perct1")
  console.log(myrange1.value)
 
}


//function passval(){
 // var sl1 = document.getElementById("myrange1").value
  //localStorage.setItem("s11", sl1)
 //}




