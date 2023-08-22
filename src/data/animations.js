const AnimationPlayType = {
  youtube: 'youtube',
  video: 'video'
}

module.exports = [
  {
    title: 'Super Energy recupera la luz',
    description: ` Animación educativa para el 
    <a rel="noreferrer noopener" href="http://www.cabildodelanzarote.com/" target="_blank">Cabildo de Lanzarote</a> 
    (animación del libro <em>Super Energy recupera la luz</em>, 2020)`,
    type: AnimationPlayType.youtube,
    link: 'https://www.youtube.com/watch?v=gwmjhdXwtm4'
  }, {
    title: 'El ciclo agrícola',
    description: ` Animación didáctica para el 
    <a rel="noreferrer noopener" href="https://www.lacilladelaoliva.org/" target="_blank">Museo del Grano La Cilla</a>
    (animación del libro <em>El Ciclo Agrícola</em>, 2020)  `,
    type: AnimationPlayType.youtube,
    link: 'https://www.youtube.com/watch?v=XhJjiG9ttF4'
  }, {
    title: 'Igualdad mujer',
    description: ` Cartel animado del Día de la Mujer para el 
    <a rel="noreferrer noopener" href="https://twitter.com/IgualdadGobCan/status/1235997707942141961" target="_blank">Instituto Canario de la Igualdad</a>
    (motion graphics, 2020)`,
    type: AnimationPlayType.video,
    link: '/assets/animations/dia-de-la-mujer.mp4',
    thumbnail: '/assets/animations/dia-de-la-mujer-thumbnail.png'
  }, {
    title: 'Presentación Win for City',
    description: ` Presentación para la web de 
    <a rel="noreferrer noopener" href="https://winforcity.com" target="_blank">Win for City</a>
    (animación y motion graphics, 2019)`,
    type: AnimationPlayType.video,
    thumbnail: '/assets/animations/win-city-thumbnail.png',
    link: '/assets/animations/win-city.mp4'
  }
]
