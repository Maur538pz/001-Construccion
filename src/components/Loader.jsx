import { useRive } from 'rive-react'
import loader from '/assets/Full-Screen-Loading.riv'
import './style.css'

export const Loader = () => {
    const { rive, RiveComponent } = useRive({
      src: loader,
      autoplay: true,
    });

    return (<RiveComponent className='canvas'/>);
  };
