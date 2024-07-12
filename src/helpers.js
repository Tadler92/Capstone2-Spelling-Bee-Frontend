import axios from "axios";
import collegiateDictKey from "./secret";


async function getDictWord(word) {
  let res = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${collegiateDictKey}`);

  let wordAudio = res.data[0].hwi.prs[0].sound.audio;
  let subdirectory = wordAudio[0];
  let etArr = res.data[0].et[0][1].split('{');
  let shortEt = etArr[0];

  let wordObj = {
    audio: `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${wordAudio}.mp3`,
    definition: res.data[0].shortdef[0],
    partOfSpeech: res.data[0].fl,
    // etymology: res.data[0].et[0][1]
    etymology: shortEt
  };

  return wordObj;
}

const modalData = {
  stats: {
    name: 'Stats',
    title: 'Stats',
    body1: 'Here are your stats:',
    body2: 'Here are your stats:',
    body3: 'Here are your stats:',
    body4: 'Click the link(s) below to sign up or log in and save your stats and earned points!',
  },
  about: {
    name: 'About',
    title: 'About',
    body1: `
    A personal project I made as my Second Capstone for the Springboard bootcamp.  It is a kind of "Wordle/Heardle" clone in which users get to try their hands at seeing how well they can spell words (like Spelling Bee participants).
    `,
    body2: `
    Words are randomly chosen from a list in our created database, and then requests are sent to the "Merriam-Webster's Collegiate® Dictionary with Audio" API to get the word's audio pronunciation, definition, part of speech, and etymology.
    `,
    body3: `
    Any questions, comments, or information of bugs you run into can be sent to taduhon1485@gmail.com
    with the subject line "Spelling Bee [Question/Comment/Issue]" (whichever category the email would fall under is the one you'd type).
    `,
    body4: `
    Created using React, Node.js, Express.js, moment.js, reactstrap
    `
  },
  howTo: {
    name: 'How to Play',
    title: 'How to Play',
    body1: `
    Listen to the audio pronunciation of the daily word, type your best guess at how to spell the answer, and hit submit.
    `,
    body2: `
    If you need more "clues" to help figure out how to spell the daily word, you can click on any of the hint buttons to give context to the daily word (definition, part of speech, etc.).
    `,
    body3: `Answer in as few tries as possible and share your score!`,
    body4: `
    The fewer tries it takes to correctly spell the daily word, the more points you'll recieve.  Get as many points as possible and compare how you're doing to how others are doing.`,
  },
}


export {getDictWord, modalData};