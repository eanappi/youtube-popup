import youtubePlayer from './component/youtubePlayer.js'

// Router
window.addEventListener('hashchange', () => {

  let youtubeURL = location.hash.split('#!/')[1]

  if(youtubeURL) {
    youtubePlayer(youtubeURL, '#app')
  } else {
    window.location.href = '#!/'
    document.querySelector('#app').innerText = `Insertar URL luego de #!/[YOUTUBE URL]`
  }

})
window.dispatchEvent(new HashChangeEvent('hashchange'))