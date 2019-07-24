export default (youtubeVideoURL, element) => {
  let el = document.querySelector(element)
  let youtubeVideoId = ''

  if (youtubeVideoURL.includes('youtu.be')) {
    youtubeVideoId = youtubeVideoURL.split('youtu.be/')[1]
  } else {
    youtubeVideoId = youtubeVideoURL.split('v=')[1].split('&')[0]
  }
  let template = `
    <iframe src="https://www.youtube.com/embed/${youtubeVideoId}"></iframe>
  `

  el.innerHTML = template
}