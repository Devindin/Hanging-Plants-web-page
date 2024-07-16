const PlantCard = ({ imgURL, changeBigPlantImage, bigPlantImage }) => {
    const handleClick = () => {
      if (bigPlantImage !== imgURL.bigPlant) {
        changeBigPlantImage(imgURL.bigPlant);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl bg-[#C8E4B2] ${
          bigPlantImage === imgURL.bigPlant ? "border-[#557A46]" : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img
            src={imgURL.thumbnail}
            alt="plants"
            className="object-contain w-[180px] h-[160px]"
          />
        </div>
      </div>
    );
  };
  
  export default PlantCard;
  