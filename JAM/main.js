import youtubePlayer from './component/youtubePlayer.js'

// Router
window.addEventListener('hashchange', () => {
  let youtubeURL = location.hash.split('#!/')[1]

  if(youtubeURL) {
    youtubePlayer(youtubeURL, '#app')
  } else {
    document.querySelector('#app').innerText = `Insertar URL`
  }

})
window.dispatchEvent(new HashChangeEvent('hashchange'))