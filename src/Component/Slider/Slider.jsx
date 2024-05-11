import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDefaultpic from '../../assets/image/morningviewcampus.psd.png';
import useDefaultpicTwo from '../../assets/image/nightviewcampus.psd.jpg';
import useDefaultpicThree from '../../assets/image/two.jpg';

const Slider = () => {
  return (
     <div className='w-full mt-10 mb-10 gap-2'>
        <Swiper>
            <SwiperSlide><img src={ useDefaultpicTwo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={ useDefaultpic} alt="" /></SwiperSlide>
            <SwiperSlide><img src={ useDefaultpicThree} alt="" /></SwiperSlide>
        </Swiper>
     </div>
  );
}

export default Slider;
