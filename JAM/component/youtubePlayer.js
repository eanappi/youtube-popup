export default (youtubeVideoURL, element) => {
  let el = document.querySelector(element)
  let youtubeVideoId = youtubeVideoURL.split('v=')
  console.log(youtubeVideoId)
  let template = `
    <iframe src="https://www.youtube.com/embed/${youtubeVideoId[1]}"></iframe>
  `

  el.innerHTML = template
}