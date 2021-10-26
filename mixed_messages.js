/* Program to generate random video game characters
each time a user runs the program along with the signature line 
of the character and a personalized message */

//Video Game Characters
let nameChar = ['Kratos', 'Ellie', 'Nathan Drake', 'Chris Redfield', 'Solid Snake', 'Agent 47', 'Cloud Strife']
let videoGame = ['God of War', 'Last of Us', 'Uncharted', 'Resident Evil', 'Metal Gear Solid', 'Hitman', 'Final Fantasy']
let signature = ['"Boy!"', '"I\'m just a girl, not a threat"', '"Oh man, I’m so tired of climbing stuff"', '"Jill! Run for that house!"' , '"War has changed"','"It\s good to be back"', '"Not interested, It\'s not my problem."']
let message = ['"Don\'t be sorry, be better!"', '"After all we\'ve been through... Everything that I\'ve done, it can\'t be for nothing."', '"As thrilling as the next adventure may be, in the end, you’re always left with that same feeling"', '"I\'m just a realist, It\'s a capitalist society. Not everyone\'s cut out for that kind of constant pressure. Sure, there are opportunities to be had, but at what price? You gain, someone else loses."', '"There are no heroes in war. The only heroes I know are either dead or in prison. One or the other"', '"There\'s A Bullet For Everyone. And A Time. And A Place. An End"',
'"I\'ve... been thinking, too... about the universe... people... the planet... How wide and big... No matter where I go and what I do, it won\'t change a thing"']

//Creating Character Object
let characters = {nameChar: nameChar, videoGame: videoGame, signature: signature, message: message}
 
//Selecting a Random Character. 
const randChar = () => {
    const randNum = Math.floor(Math.random()*nameChar.length)
    for (prop in characters){
        switch(prop){
            case 'nameChar':
                let namePhrase = `Your character is: ${characters.nameChar[randNum]}!`
                console.log(namePhrase)
                break;
            case 'videoGame':
                let gamePhrase =  `Your character is from the video game: ${characters.videoGame[randNum]}`
                console.log(gamePhrase)
                break;
            case 'signature': 
                let sigPhrase =  `Your character's signature phrase is: ${characters.signature[randNum]}`
                console.log(sigPhrase)
                break;
            case 'message': 
                let mesPhrase = `Your character's message is: ${characters.message[randNum]}`
                console.log(mesPhrase)
                break;
            default:
                console.log('No character found!')
                
        }
    }
}

randChar()