import lavendar from '../assets/lavender.jpg';
import spiderPlant from '../assets/spider-plant.jpg';
import snakePlant from '../assets/snake-plant.jpg';
import peaceLily from '../assets/peace-lily.jpg';
import rosemary from '../assets/rosemary.jpg';
import rose from '../assets/rose.jpg';
import tulip from '../assets/tulip.jpg';

const productsData = [
    {
      name: 'Air Purifying Plants',
      products: [
        { id: 1, name: 'Snake Plant', price: 15, thumbnail: snakePlant, sale: true, description: 'Produces oxygen at night, improving air quality.' },
        { id: 2, name: 'Spider Plant', price: 12, thumbnail: spiderPlant, sale: true, description: 'Filters formaldehyde and xylene from the air.' },
        { id: 3, name: 'Peace Lily', price: 18, thumbnail: peaceLily, sale: true, description: 'Removes mold spores and purifies the air.' },
        ],
    },
    {
      name: 'Aromatic Fragrant Plants',
      products: [
        { id: 4, name: 'Lavender', price: 20, thumbnail: lavendar, sale: true, description: 'Known for its soothing fragrance, Lavender is a popular plant that can help reduce stress and promote relaxation.' },
        { id: 5, name: 'Rosemary', price: 15, thumbnail: rosemary, sale: false, description: 'Rosemary is an aromatic herb that not only adds flavor to your dishes but also has a refreshing scent that can enhance your garden or home.' },
        ],
    },
    {
        name: 'Flowering Plants',
        products: [
          { id: 6, name: 'Rose', price: 30, thumbnail: rose, sale: false, description: 'Roses are renowned for their beauty and fragrance, making them a classic choice for gardens and bouquets.' },
          { id: 7, name: 'Tulip', price: 15, thumbnail: tulip, sale: true, description: 'Tulips are vibrant spring flowers that come in a variety of colors and are perfect for brightening up any garden or home.' },
        ],
    },
  ];
  
  
  export default productsData;
  