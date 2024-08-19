// const celsiusEl = document.getElementById("celsius");
// const 
// fehrebhietEl = document.getElementById("fahrenheit");
// const kelvinEl = document.getElementById("kelvin");
// function computeTemp(event){

//     const currentValue = +event.target.value
//     switch (event.target.name) {
//         case "celsius":
//             kelvinEl.value =(currentValue + 273.32).toFixed(2);
//             fehrenhietEl.value = (currentValue * 1.8 + 32).toFixed(2);
            
//             break;
//             case "fahrenheit":
            
           
//             celsiusEl.value = ((currentValue - 32) /1.8).toFixed(2);
//             kelvinEl.value =((currentValue - 32) / 1.8 +273.32 ).toFixed
//             (2);

//             ;

//             break;
//             case "kelvin":
//             celsiusEl.value = (currentValue - 173.32).toFixed(2);
//             fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
          
//             break;
    
//         default:
//             break;
//     }
// }
const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;
  
  // Check if the value is negative
  if (currentValue < 0) {
    event.target.value = 0; // Set the value to 0 if it's negative
    return; // Exit the function
  }

  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (currentValue + 273.15).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = (((currentValue - 32) / 1.8) + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.15).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}

celsiusEl.addEventListener("input", computeTemp);
fahrenheitEl.addEventListener("input", computeTemp);
kelvinEl.addEventListener("input", computeTemp);