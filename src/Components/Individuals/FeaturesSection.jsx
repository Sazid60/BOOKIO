
import { FiTruck, FiClock, FiCreditCard, FiShoppingCart } from "react-icons/fi";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiTruck className="text-4xl text-indigo-500" />,
      title: "Fast Delivery",
      description: "Enjoy swift and reliable delivery to your doorstep, ensuring your orders arrive on time.",
    },
    {
      icon: <FiClock className="text-4xl text-indigo-500" />,
      title: "Open 24 Hour",
      description: "Shop at your convenience, day or night. We are open 24 hours to cater to your needs anytime.",
    },
    {
      icon: <FiCreditCard className="text-4xl text-indigo-500" />,
      title: "Secure Online Payment",
      description: "Make payments safely and easily through our encrypted and secure payment.",
    },
    {
      icon: <FiShoppingCart className="text-4xl text-indigo-500" />,
      title: "Easy Online Ordering",
      description: "Place your orders in just a few clicks, with an intuitive and seamless shopping experience.",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 hover:border border-black duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-base sm:text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
