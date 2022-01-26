import joker from "./images/joker.jpg"
import lex from "./images/lex.jpg"
import lizard from "./images/lizard.jpg"
import loki from "./images/loki.jpg"
import magneto from "./images/magneto.jpg"
import mephisto from "./images/mephisto.jpg"
import ivy from "./images/poison-ivy.jpg"
import riddler from "./images/riddler.jpg"
import rocketraccoon from "./images/rocketraccoon.png"
import steppenwolf from "./images/steppenwolf.jpg"
import sauron from "./images/sauron.jpg"
import doomsday from "./images/doomsday.jpg"

const data = [
    {
        id: 1,
        name: "Joker",
        description: "In the mini-series, Underworld Unleashed, The Trickster remarks, \"When supervillains want to scare each other, they tell Joker stories\". As far as truth about Joker’s personality, one word sums him up, unpredictable. One day, the Joker may be a harmless clown, to others he can become a crazy, maniacal, lunatic, psychotic, homicidal, psychopathic, ruthless, sadistic, manipulative, intelligent and diabolical serial-killer and master criminal who wants nothing but chaos and anarchy wherever he goes, as well as reveling in the suffering of others. The same goes for what lines he will and won't cross. ",
        img: joker,
        on: false,
        occupation: "Agent-of-Chaos",
        location: "Gotham City",
        wiki: "https://villains.fandom.com/wiki/Joker_(DC)?so=search"

    },
    {
        id: 2,
        name: "Lex Luthor",
        description: "Lex Luthor is an extremely intelligent, calculating, duplicitous and unpredictable man of immeasurable ruthlessness. He was a mechanical, strategic and scientific genius, maintaining a series of accomplishments in his life. However, due to his intelligence, he is extremely arrogant and narcissistic. He is also wrathful, often lashing out at others he dislikes and holding an unjustified hatred towards Superman.",
        img: lex,
        on: false,
        occupation: "Owner of LexCorp",
        location: "Metropolis",
        wiki: "https://villains.fandom.com/wiki/Lex_Luthor_(DC)"
    },
    {
        id: 3,
        name: "Lizard",
        img: lizard,
        description: "Prior to his transformation, Connors was a humble and respectful man towards his students, particularly Peter who in turn respected him and had always looked up to him.",
        on: false,
        occupation: "Research biologist",
        location: "Florida",
        wiki: "https://villains.fandom.com/wiki/Lizard_(Marvel)"
    },
    {
        id: 4,
        name: "Loki",
        img: loki,
        description: "Loki is the God of Mischief and an expert liar. Though Loki tries to take over Asgard and Earth, all Loki really wants is the approval of his father and his brother. He is a smart, talented, and intelligent man and he will stop at nothing to fulfill his quest. While he may appear nice, in truth Loki believes he is destined for a \"glorious purpose\" whether it be ruling Asgard or Earth. Loki is usually considered as a liar and trickster, but this is only because he wanted to be an equal to Thor. Therefore, Loki does have emotion and he does communicate with some people despite his power and arrogance.",
        on: false,
        occupation: "Adventurer",
        location: "Galaxy",
        wiki: "https://villains.fandom.com/wiki/Loki_Laufeyson_(Marvel_Cinematic_Universe)"
    },
    {
        id: 5,
        name: "Magneto",
        img: magneto,
        description: "A Holocaust survivor, Magneto was a young Jewish boy known by the name Max Eisenhardt, growing up in Nazi Germany where he and his family were constantly subjected to bullying and harsh treatment. Max had to learn to scavenge, steal, and evade the Gestapo to provide food for his family. Eventually, the family were rounded up and executed by gunfire. Max was the sole survivor, possibly due to his mutant powers manifesting, and was buried alive with the corpses of his family, however he dug his way out only to be recaptured and sent to the Auschwitz concentration camp, where in order to survive he was forced to become a Sonderkommando, one of the Jews who were tasked with operating the gas chambers.",
        on: false,
        occupation: "Metal-Bender",
        location: "CAMP",
        wiki: "https://villains.fandom.com/wiki/Magneto_(Marvel)?so=search"
    },
    {
        id: 6,
        name: "Mephisto",
        img: mephisto,
        description: "At any rate, Mephisto now rules over his own dark dimension, commonly called Hell but not related to the Biblical hell (though to the average human being it may as well be as it is equally as horrific), within this realm Mephisto rules supreme with only demons such as Blackheart (his own son) being capable of challenging him there.",
        on: false,
        occupation: "Fire Lord",
        location: "Hell",
        wiki: "https://villains.fandom.com/wiki/Mephisto_(Marvel)"
    },
    {
        id: 7,
        name: "Poison Ivy",
        img: ivy,
        description: "Due to her special affinity for all plant life, Poison Ivy's specialty is Eco-terrorism. She is always pictured with flowing red hair and a green plant-like outfit. Her only human companion seems to be Harley Quinn. It is believed that she feels for Harley, who is mistreated by The Joker. Poison Ivy is immune to toxins and uses this ability to her advantage over her enemies.",
        on: false,
        occupation: "Botanist",
        location: "Gotham City",
        wiki: "https://villains.fandom.com/wiki/Poison_Ivy_(DC)?so=search"
    },
    {
        id: 8,
        name: "Riddler",
        img: riddler,
        description: "Edward Nashton was born into a broken home. His mother was never around to take care of him which left him at the mercy of his abusive father. One day, his school held a contest to see who could solve a complex puzzle. Determined to win, Edward broke into the school that night and used its text books to study the problem hard until he came up with a definitive solution. Edward won the contest the next day and was rewarded a book of riddles as a prize. Unfortunately, his father quickly became jealous of his son's success and accused Edward of cheating before beating him. These beatings would compel Edward to always tell the truth in order to spite his father. However, they would also lead him to become a crazed criminal later in life.",
        on: false,
        occupation: "Street Artist",
        location: "Gotham City",
        wiki: "https://villains.fandom.com/wiki/Riddler_(DC)"
    },
    {
        id: 9,
        name: "Rocket Raccoon",
        img: rocketraccoon,
        description: "Rocket Raccoon is a fictional character appearing in American comic books published by Marvel Comics. Created by writer Bill Mantlo and artist Keith Giffen, the character first appeared in Marvel Preview #7 (Summer 1976). He is an intelligent, anthropomorphic raccoon, who is an expert marksman, weapon specialist and master tactician. His name and aspects of his character are a nod to The Beatles' 1968 song \"Rocky Raccoon\". Rocket Raccoon appeared as a prominent member in the 2008 relaunch of the superhero team Guardians of the Galaxy.",
        on: false,
        occupation: "Law enforcement officer",
        location: "Knowhere",
        wiki: "https://en.wikipedia.org/wiki/Rocket_Raccoon"
    },
    {
        id: 10,
        name: "Steppenwolf",
        img: steppenwolf,
        description: "Steppenwolf is one of the earliest survivors of Doomsday, the monster who once killed Superman. 245,000 years ago, Steppenwolf takes an Apokolips shuttle with Darkseid, Master Mayhem and a small crew to the planet of Bylan 5. The planet holds delicate natural materials Apokolips needs for weaponry, material which would be destroyed in the event of an invasion. The forcible marriage of Darkseid to the planet's princess comes to an end when Doomsday attacks. Master Mayhem is swiftly torn apart. Darkseid ignores Steppenwolf's orders to use Omega Beams and engages the creature in hand-to-hand combat.",
        on: false,
        occupation: "-" ,
        location: "Galaxy",
        wiki: "https://villains.fandom.com/wiki/Steppenwolf?so=search"
    },
    {
        id: 11,
        name: "Doomsday",
        img: doomsday,
        description: "The Ultimate, better known as Doomsday is an incredibly powerful supervillain and a major antagonist from DC Comics, first appearing as the main antagonist of The Death of Superman. He is infamous for being the first villain in DC history to successfully kill the Man of Steel himself, Superman.",
        on: false,
        occupation: "Professional Doom maker",
        location: "Galaxy",
        wiki: "https://villains.fandom.com/wiki/Doomsday_(DC)?so=search"
    },
    {
        id: 12,
        name: "Sauron",
        img: sauron,
        description: "Mairon, known after his betrayal of the Valar as Sauron, is the main antagonist of the Middle-earth legendarium of J.R.R. Tolkien. Once the greatest smith of Aulë, he joined with the first Dark Lord Morgoth in the First Age, becoming his principal lieutenant. During the Second Age, Sauron became the second Dark Lord of Middle-earth who resided in Mordor and created the One Ring, which he lost upon his defeat.",
        on: false,
        occupation: "Professional Ring Seeker",
        location:"Middle-Earth",
        wiki: "https://villains.fandom.com/wiki/Sauron_(Middle-earth)?so=search"
    },
]

export default data