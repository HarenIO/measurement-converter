
/*  
    Matematiken:
        * Om värdet av convertFrom är större än värdet i convertTo = convertAmount / (convertFrom-värdet/convertTo-värdet)
        * Om värdet av convertFrom är mindre än värdet i convertTo = convertAmount * (convertTo-värdet/convertFrom-värdet)

    Logiken:
        Steg 1: Sätt värde på enheterna
        Steg 2: Konvertera enheterna till enhets-värdet
        Steg 3: Spara värdena i variabeler
        Steg 4: Stoppa in värdena i matte formeln
        Steg 5: Printa resultat
 */

let convertFrom = prompt("Vilken enhet vill du konvertera från? (ml, cl, dl, l)").toLowerCase()
let convertTo = prompt("Vilken enhet vill du konvertera till? (ml, cl, dl, l)").toLowerCase()
let convertAmount = prompt(`Hur många ${convertFrom} vill du konvertera?`)
    
//Steg 1: Sätt värde på enheterna
    const convertionValues = {
        ml: 1000,
        cl: 100,
        dl: 10,
        l : 1
    }

//Steg 2: Konvertera enheterna till enhets-värdet
function convert(){
    let fromToValues = [];
    for(let objValue in convertionValues){
        if(convertFrom == objValue){
            fromToValues.push(convertionValues[objValue])
        }
    }
    for(let objValue in convertionValues){
        if(convertTo == objValue){
            fromToValues.push(convertionValues[objValue])
        }
    }
    return fromToValues
}


//Steg 3: Spara värdena i variabeler
const convertFromValue = convert()[0]
const convertToValue = convert()[1]
const result = calculate()


//Steg 4: Stoppa in värdena i matte formeln
    function calculate(){
        if(convertFromValue > convertToValue){
            return convertAmount / (convertFromValue/convertToValue)
        }
        else if(convertFromValue < convertToValue){
            return convertAmount * (convertToValue/convertFromValue)
        }
        else if(convertFromValue === convertToValue){
            return convertAmount
        }
    }

//Steg 5: Printa resultat
alert(`${convertAmount}${convertFrom} är ${result}${convertTo}`)
