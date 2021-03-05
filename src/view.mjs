export default class View {
  constructor () {
    this.btnStart = document.getElementById('btnStart');
    this.btnStop = document.getElementById('btnStop');
    this.audioElement = document.getElementById('audio');
  }

  onStartRecordClick(command) {
    return () => {
      command();
      this.toggleAudioElement({ visible: false });
    }
  }

  onStopRecordClick(command) {
    return () => {
      command();
    }
  }

  configureStartRecordingButton(command) {
    this.btnStart.addEventListener('click', this.onStartRecordClick(command));
  }

  configureStopRecordingButton(command) {
    this.btnStop.addEventListener('click', this.onStopRecordClick(command));
  }

  toggleAudioElement({ visible }) {
    const classList = this.audioElement.classList;
    visible ? classList.remove('hidden') : classList.add('hidden');
  }

  playAudio(url) {
    const audio = this.audioElement;
    audio.src = url;
    audio.muted = false;
    this.toggleAudioElement({ visible: true });
    audio.addEventListener("loadmetadata", _ => audio.play());
  }
}