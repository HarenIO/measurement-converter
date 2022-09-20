
/*  
    Matematiken:
        * Om värdet av measureFrom är större än värdet i measureTo = measureAmount / (measureFrom-värdet/measureTo-värdet)
        * Om värdet av measureFrom är mindre än värdet i measureTo = measureAmount * (measureTo-värdet/measureFrom-värdet)

    Logiken:
        Steg 1: Sätt värde på enheterna
        Steg 2: Ta reda på measureFrom & measureTo värdena 
        Steg 3: Spara värdena i variabeler
        Steg 4: Stoppa in värdena i matte formeln
        Steg 5: Printa resultat
 */

let measureFrom = prompt("Vilken enhet vill du konvertera från? (ml, cl, dl, l)").toLowerCase()
let measureTo = prompt("Vilken enhet vill du konvertera till? (ml, cl, dl, l)").toLowerCase()
let measureAmount = prompt(`Hur många ${measureFrom} vill du konvertera?`)
    
//Steg 1: Sätt värde på enheterna
    const measurements = {
        ml: 1000,
        cl: 100,
        dl: 10,
        l : 1
    }

//Steg 2: Ta reda på measureFrom & measureTo värdena
function measureValues(){
    let fromToValues = [];
    for(let objValue in measurements){
        if(measureFrom == objValue){
            fromToValues.push(measurements[objValue])
        }
    }
    for(let objValue in measurements){
        if(measureTo == objValue){
            fromToValues.push(measurements[objValue])
        }
    }
    return fromToValues
}


//Steg 3: Spara värdena i variabeler
const measureFromValue = measureValues()[0]
const measureToValue = measureValues()[1]
const result = converter()


//Steg 4: Stoppa in värdena i matte formeln
    function converter(){
        if(measureFromValue > measureToValue){
            return measureAmount / (measureFromValue/measureToValue)
        }
        else if(measureFromValue < measureToValue){
            return measureAmount * (measureToValue/measureFromValue)
        }
        else if(measureFromValue === measureToValue){
            return measureAmount
        }
    }

//Steg 5: Printa resultat
alert(`${measureAmount}${measureFrom} är ${result}${measureTo}`)