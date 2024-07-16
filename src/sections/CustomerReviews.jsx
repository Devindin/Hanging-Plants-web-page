import ReviewCard from "../components/ReviewCard";
import customer1 from "../assets/images/customer1.jpg"
import customer2 from "../assets/images/customer2.jpg"

const CustomerReviews = () => {
  const reviews = [
    {
        imgURL: customer1,
        customerName: 'Miona perera',
        rating: 4.5,
        feedback: "I recently purchased a set of hanging plants from SkyGardeners, and I couldn't be happier! The quality is exceptional, and they have completely transformed my living room into a lush, green haven. The plants arrived in perfect condition, and the free shipping was a fantastic bonus. Highly recommend!"
    },
    {
        imgURL: customer2,
        customerName: 'Lora peris',
        rating: 4.5,
        feedback: "SkyGardeners' hanging plants are the best addition to my balcony garden. The secure payment process gave me peace of mind, and their customer support was incredibly helpful in answering all my questions. The plants are thriving, and I love how they bring a touch of nature to my urban space."
    }
];
  return (
     <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-[#557A46]'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews