import small from '../assets/small.jpg'
import './image_viewer.css';

export default () => {
  const image = document.createElement('img');
  image.src = small;
  document.body.appendChild(image);
};
