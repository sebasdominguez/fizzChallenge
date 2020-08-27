import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-elastic-carousel';
import '../../utils/main.scss';
import { Banner } from './style';

export default ({banners}) => {
  return (
    <Slider
      className={`sliderInicio`}
      enableAutoPlay 
      autoPlaySpeed={3300}
      easing={`cubic-bezier(1,.15,.55,1.54)`}
      tiltEasing={`cubic-bezier(0.110, 1, 1.000, 0.210)`}
      transitionMs={1000}
      showArrows={true}
      focusOnSelect={true}
    >
    { banners.map((banner, idx)=>{
        let route= banner.href.slice(1,(banner.href.length)); // quito el '#' para utilizar la ruta limpia con Link de React
        const imagen = require('../../utils/img/Banners/'+banner.imgName)
        return (
          <Link key={idx} to={{pathname: `/${route}`}}>
            <Banner src={imagen.default}/> 
          </Link>
        )
      })
    }
    </Slider>
  );
};
