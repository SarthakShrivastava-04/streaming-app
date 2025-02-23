const userVideo = document.getElementById('user-video')
const startBtn = document.getElementById('start-btn')

const state = {media: null}

const socket = io()

startBtn.addEventListener('click', e => {
  const mediaRecoreder = new MediaRecorder(state.media, {
    audioBitsPerSecond: 128000,
    videoBitsPerSecond: 2500000,
    frameRate: 25,
  })

  mediaRecoreder.ondataavailable = e => {
    console.log("Binary data received" , e.data) 
    socket.emit('binarystream', e.data)
  }

  mediaRecoreder.start(25)
})

window.addEventListener('load', async (e) => {
    const media = await navigator.mediaDevices.getUserMedia({video: true, audio:true})
    userVideo.srcObject = media
    state.media = media
})