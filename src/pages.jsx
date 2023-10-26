import { LoremIpsum } from 'react-lorem-ipsum';

export const Home = () => (
  <div>
    <h1>Welkom!</h1>
    <p>Kies één van de volgende links:</p>
    <ul>
      <li>
        Over ons
      </li>
      <li>
        Contact
      </li>
    </ul>
  </div>
);

export const About = () => (
  <div>
    <h1>Over ons</h1>
    <LoremIpsum p={2} />

    <ul>
      <li>
        Onze diensten
      </li>
      <li>
        Geschiedenis
      </li>
      <li>
        Locatie
      </li>
    </ul>
  </div>
);

export const Contact = () => (
  <div>
    <h1>Contact</h1>
    <LoremIpsum p={2} />
  </div>
);

export const NotFound = () => {
  return (
    <div>
      <h1>Pagina niet gevonden</h1>
      <p>Er is geen pagina met als url TODO:, probeer iets anders.</p>
    </div>
  );
};

export const Services = () => (
  <div>
    <h1>Our services</h1>
    <LoremIpsum p={2} />
  </div>
);

export const History = () => (
  <div>
    <h1>History</h1>
    <LoremIpsum p={2} />
  </div>
);

export const Location = () => (
  <div>
    <h1>Location</h1>
    <LoremIpsum p={2} />
  </div>
);

const products = [
  {
    id: 1,
    name: 'Confituur',
    price: 2.5,
  },
  {
    id: 2,
    name: 'Choco',
    price: 3.5,
  },
  {
    id: 3,
    name: 'Coco-cola',
    price: 3.2,
  },
  {
    id: 4,
    name: 'Fanta',
    price: 3.0,
  },
  {
    id: 5,
    name: 'Sprite',
    price: 2.9,
  },
];

export const Products = () => (
  <div>
    <ul>
      {products.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  </div>
);

export const Product = () => {
  const id = 'TODO';
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <h1>Product niet gevonden</h1>
        <p>Er is geen product met id {id}.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        <b>Price:</b> &euro; {product.price}
      </p>
    </div>
  );
};
