import React, { Component } from 'react'
import Pelicula from '../components/Pelicula'

class Peliculas extends Component {
  state = {
    movies: [
      { title: 'Diario de una Pasión', image: 'https://www.rockandpop.cl/wp-content/uploads/2019/01/diario-de-una-pasion-400x360.jpg' },
      { title: 'Lo mejor de mí', image: 'https://imagessl3.casadellibro.com/m/ig/3/5202263.jpg' },
      { title: 'La vida es Bella', image: 'https://www.recursosyhabilidades.com/cmsAdmin/uploads/o_1c6k6tvrp17iq16ki1me51rn81hcma.jpg' },
      { title: 'Titanic', image: 'https://static2.elnortedecastilla.es/www/multimedia/201711/27/media/cortadas/GF0N6DA1-k4m-U50221626093faD-624x385@El%20Norte.jpg' },
      { title: 'El Rey del Barrio', image: 'https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/N-C2-EU270219-4_DrupalMainImagenVertical.var_1551246258.jpg?itok=_BCNrBN_&c=894f43669c195a07ce60551bebf7707a' },
      { title: 'Hay amor como me has puesto', image: 'https://i.pinimg.com/originals/37/64/c2/3764c2f925571ae355b8873dd9908385.png' },
      { title: 'El Ceniciento', image: 'https://i.pinimg.com/originals/7c/87/77/7c8777a8bb4ca49a71d7502a7b41f58f.jpg' },
      { title: 'Chucho el Remendado', image: 'https://i.pinimg.com/originals/d7/9d/f8/d79df85c5dcbff7a44e9328fc7e6f23f.jpg' },
    ],
    name: 'Carlos'
  }
  render () {
    return (
      <div id='content' className='peliculas'>
        <h2 className='subheader'>Peliculas</h2>
        <p>Peliculas Favoritas de {this.state.name}</p>

        <div id="articles">
          {
            this.state.movies.map((pelicula, i) => {
              return (
                <Pelicula
                  key={i}
                  pelicula={pelicula}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Peliculas
