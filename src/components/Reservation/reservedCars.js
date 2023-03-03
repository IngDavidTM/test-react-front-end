import { Link } from 'react-router-dom';
import Car from './Car';

const ReservedCars = () => {
  const data = [
    {
      id: 1,
      name: 'BMW',
      photo: './cars/bmw.png',
      date: '2021-10-10',
      city: 'New York',
      country: 'USA',
      price: 100000,
    },
    {
      id: 2,
      name: 'Mercedes',
      photo: './cars/mercedes.png',
      date: '2021-12-10',
      city: 'Quito',
      country: 'Ecuador',
      price: 200000,
    },
    {
      id: 3,
      name: 'Bugatti',
      photo: './cars/bugatti.png',
      date: '2022-10-10',
      city: 'Santiago',
      country: 'Chile',
      price: 300000,
    },
    {
      id: 4,
      name: 'Lamborghini',
      photo: './cars/lambo.png',
      date: '2022-06-10',
      city: 'Buenos Aires',
      country: 'Argentina',
      price: 400000,
    },
  ];

  return (
    <div className="reserved-cars">
      <div className="navigation hidden border-r border-gray-300 float-left py-8 w-[250px] bg-slate-100 h-screen lg:block">
        <Link to="/">
          <img className="w-24 mx-auto" src="./logo.svg" alt="logo" />
        </Link>
        <ul className="flex flex-col mt-16 ml-4">
          <li className="cursor-pointer py-4 text-2xl font-semibold pl-8">MODELS</li>
          <li className="cursor-pointer py-4 text-2xl font-semibold pl-8">LIFESTYLE</li>
          <li className="cursor-pointer py-4 text-2xl font-semibold pl-8">SHOP</li>
          <li className="cursor-pointer py-4 text-2xl font-semibold pl-8 bg-green text-white">RESERVED</li>
        </ul>
      </div>
      <div className="main-section flex flex-col relative justify-center">
        <h1 className="text-3xl text-gray-800 tracking-wider font-bold text-center mt-6 md:text-5xl md:tracking-widest md:mt-12">RESERVED MODELS</h1>
        <h4 className="text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4">Here are the models you have reserved</h4>
        <hr className="w-24 self-center m-4 border-t-black md:w-52 md:m-8" />
        <div className="max-w-min w-[100%] self-center">
          <div className="cars-container m-2 flex flex-col gap-4 md:mt-8">
            {data.map((car) => (
              <Car data={car} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservedCars;
