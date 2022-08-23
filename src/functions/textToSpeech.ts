export function textToSpeech(word: string) {
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'en-US';
  utter.text = word;
  window.speechSynthesis.speak(utter)
}