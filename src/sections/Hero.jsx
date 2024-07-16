import { arrowRight } from "../assets/icons";
import image1 from "../assets/images/14New.png";
import image12 from "../assets/images/image12new.png";
import image21 from "../assets/images/image21.png";
import image7 from "../assets/images/image7new.png";
import image20 from "../assets/images/image20.png";
import image11 from "../assets/images/image11new.png";
import Button from "../components/Button";
import PlantCard from "../components/PlantCard";
import { useState } from "react";

const Hero = () => {
  const [bigPlantImg, setBigPlantImg] = useState(image20);

  const statistics = [
    { value: '200+', label: 'products' },
    { value: '10+', label: 'Shops' },
    { value: '100k+', label: 'Customers' },
  ];

  const plants = [
    {
      thumbnail: image1,
      bigPlant: image1,
    },
    {
      thumbnail: image21,
      bigPlant: image21,
    },
    {
      thumbnail: image11,
      bigPlant: image11,
    },
  ];

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ml-10">
        <p className="text-xl font-montserrat text-[#7A9D54]">Our Hanging Plant Collection</p>
        <h1 className="mt-5 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="text-[#557A46]">SkyGardeners</span>
          <span className="xl:bg-white xl:whitespace-nowrap relative z-20 pr-10 block xl:mt-4">Nature, Closer to You</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-5 sm:max-w-sm">Discover the perfect hanging plants to transform any space into a lush paradise.</p>
        <Button label='Shop now' iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-5 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-10 bg-[#F2FFE9] bg-hero bg-cover bg-center">
        <img
          src={bigPlantImg}
          alt="plant"
          className="object-contain relative z-10 mt-20 w-[800px] h-[600px]"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {plants.map((plant, index) => (
            <div key={index}>
              <PlantCard
                imgURL={plant}
                changeBigPlantImage={() => setBigPlantImg(plant.bigPlant)}
                bigPlantImage={bigPlantImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
