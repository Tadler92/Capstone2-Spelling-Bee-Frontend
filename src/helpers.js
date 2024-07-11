import axios from "axios";
import collegiateDictKey from "./secret";


async function getDictWord(word) {
  let res = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${collegiateDictKey}`);

  let wordAudio = res.data[0].hwi.prs[0].sound.audio;
  let subdirectory = wordAudio[0];

  let wordObj = {
    audio: `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${wordAudio}.mp3`,
    definition: res.data[0].shortdef[0],
    partOfSpeech: res.data[0].fl,
    etymology: res.data[0].et[0][1]
  };

  return wordObj;
}


export default getDictWord;