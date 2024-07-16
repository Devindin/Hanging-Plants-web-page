import Button from "../components/Button";
import image1 from "../assets/images/image1.jpg"

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
     <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          We provide you
          <span className="text-[#557A46]"> Super </span>
          <span className="text-[#557A46]"> Quality </span>
          plants
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Welcome to our Super Quality Collection, where we showcase the finest hanging plants that elevate any space with their lush beauty and exceptional durability. Each plant in this curated selection is meticulously grown and maintained to ensure it meets the highest standards of health and vibrancy. Whether you’re looking to create a serene indoor oasis or enhance your outdoor garden, our Super Quality Collection offers a variety of stunning hanging plants that are perfect for every environment.</p>
        <div className="mt-11">
        <Button label='View Details' />
        </div>
        
     </div>
     <div className="flex-1 flex justify-center items-center">
          <img
          src={image1}
          alt= "plant"
          className="object-container w-[570px] h-[522px]"
          />
     </div>
    </section>
  )
}

export default SuperQuality