import ServiceCard from "../components/ServiceCard";
import truckFast from "../assets/icons/truck-fast.svg"
import shieldTick from "../assets/icons/shield-tick.svg"
import support from "../assets/icons/support.svg"
const Services = () => {
  const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 ">
     {services.map((service)=>(
      <ServiceCard key={service.label}{...service}/>
     ))}
    </section>
  )
}

export default Services