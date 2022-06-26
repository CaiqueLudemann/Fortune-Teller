const withinAmountOfTime = ["This", "Next", "in a"];
const timeOfEvent = ["week","month","year"]
const subject = ["you","your family","your best friend","the world"];
const event = ["be happy","have great fortune", "suffer unfathomable pain", "become rich", "discover a terrible secret"];



function generateRandomFortune(){
    const randomWithinAmountOfTime = withinAmountOfTime[Math.floor(Math.random() * withinAmountOfTime.length)];
    const randomTimeOfEvent = timeOfEvent[Math.floor(Math.random() * timeOfEvent.length)]
    const randomSubject = subject[Math.floor(Math.random() * subject.length)];
    const randomEvent = event[Math.floor(Math.random() * event.length)];
    
    return `${randomWithinAmountOfTime} ${randomTimeOfEvent} ${randomSubject} will ${randomEvent}`
}

console.log(generateRandomFortune())