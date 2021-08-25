//WOODPECKER
let isDefective = true
let pauseDuration = 50
let repeats = 10
radio.setGroup(7)
radio.onReceivedString(function (receivedString: string) {
    if(receivedString == "systemtest"){
        if(!isDefective){
            correct()
        } else {
            correct()
            basic.pause(500)
            for(let i = 0; i< repeats*2; i++){
                //led.toggleAll()
                OrchestraInstrument.callActuateThumpBit(0)
                basic.pause(randint(20,pauseDuration*4))
            }
            basic.showString("K",2000)
            basic.clearScreen()                
        }
    }
})

input.onButtonPressed(Button.A, function () {
  radio.sendString("systemtest")  
})

function correct(){
    for(let i = 0; i< repeats; i++){
        OrchestraInstrument.callActuateThumpBit(0)
        basic.pause(pauseDuration)
        }
    basic.pause(500)
    for(let i = 0; i< repeats; i++){
        OrchestraInstrument.callActuateThumpBit(0)
        basic.pause(pauseDuration)
        }
}