const synth = window.speechSynthesis;

export function textToSpeech(word: string) {
  if (synth.speaking) {
    synth.cancel();
  }

  let utter = new SpeechSynthesisUtterance(word);

  utter.addEventListener('error', () => {
    console.error('SpeechSynthesisUtterance error');
  });

  utter.lang = 'en-US';
  utter.rate = 0.6

  synth.speak(utter)
}