import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import ValentinesMessage from '../components/ValentinesMessage';
import YippieBox from '../components/YippieBox';
import LiarBox from '../components/LiarBox';

function Valentines() {
  return (
    <div className="bg-[url(../public/valentines/valentinesBackground.jpg)] bg-cover min-h-screen relative p-14 w-screen flex justify-between items-center">
        <title>I love you!</title>
        <ValentinesMessage />
        <YippieBox />
      <div className="flex z-10 justify-self-center w-1/3">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-120 h-200"
        >
          <SwiperSlide className="flex items-center justify-center rounded-lg">
            <img src={'../public/valentines/amelia1.jpg'} alt="amelia" className="w-full h-full object-cover"/>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-lg">
            <img src={'../public/valentines/amelia2.jpg'} alt="happy valentine's day" className="w-full h-full object-cover"/>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-lg">
            <img src={'../public/valentines/amelia3.jpg'} alt="be mine" className="w-full h-full object-cover"/>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-lg">
            <img src={'../public/valentines/amelia4.jpg'} alt="please say yes" className="w-full h-full object-cover"/>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-lg">
            <img src={'../public/valentines/amelia5.jpg'} alt="i love you" className="w-full h-full object-cover"/>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-lg">
            <img src={'../public/valentines/amelia6.jpg'} alt="kitty special" className="w-full h-full object-cover"/>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-lg">
            <img src={'../public/valentines/valentinescard.jpg'} alt="card" className="w-full h-full object-cover"/>
          </SwiperSlide>
        </Swiper>
      </div>
      <LiarBox />
    </div>
  )
}
        
export {
    Valentines
}
