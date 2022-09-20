
/*  Tankeprocess:

         * Om värdet av measureFrom är större än värdet i measureTo = measureValue / (measureFrom-värdet/measureTo-värdet)
         * Om värdet av measureFrom är mindre än värdet i measureTo = measureValue * (measureTo-värdet/measureFrom-värdet)

    Steg 1: Sätt värde på enheterna
    Steg 2: Ta reda på measureFrom värdet 
    Steg 3: Ta reda på measureTo värdet
    Steg 4: Spara värdena
    Steg 5: Stoppa in värdena i formeln
    Steg 6: Kör formeln (for loop)
    Steg 7: Printa resultat

 */

let measureFrom = prompt("Vilken enhet vill du konvertera från? (ml, cl, dl, l)").toLowerCase()
let measureTo = prompt("Vilken enhet vill du konvertera till? (ml, cl, dl, l)").toLowerCase()
let measureValue = prompt(`Hur många ${measureFrom} vill du konvertera?`)
    
    
//Steg 1:
    const measurements = {
        ml: 1000,
        cl: 100,
        dl: 10,
        l : 1
    }

//Steg 2:
    function measureFromValue(){
    for(let objValue in measurements){
        if(measureFrom == objValue){
            return measurements[objValue]
        }
}
}

//Steg 3:
    function measureToValue(){
        for(let objValue in measurements){
            if(measureTo == objValue){
                return measurements[objValue]
            }
    }
    }

//Steg 4:
let value1 = measureFromValue()
let value2 = measureToValue()
let result = converter()

//Steg 5:
    function converter(){
        if(value1 > value2){
            return measureValue / (value1/value2)
        }
        else if(value1 < value2){
            return measureValue * (value2/value1)
        }
        else if(value1 === value2){
            return measureValue
        }
    }
//Steg 6:
for(let i = 0; i < 1; i++){
    converter()
}

//Steg 7
alert(`${measureValue}${measureFrom} är ${result}${measureTo}`)