import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {
    const PriceOptions =  [
          {
            "id": 1,
            "name": "Starter Package",
            "price": 49.99,
            "features": [
              "Access to cardio equipment",
              "One fitness class per week",
              "Locker room access",
              "Personalized workout plan",
              "Access to the swimming pool",
              "Sauna and steam room access"
            ]
          },
          {
            "id": 2,
            "name": "Premium Package",
            "price": 79.99,
            "features": [
              "Unlimited access to all gym facilities",
              "Unlimited fitness classes",
              "Locker room access",
              "Personalized workout plan",
              "Nutrition consultation",
              "Personal trainer sessions (2 per month)",
              "Access to the swimming pool",
              "Sauna and steam room access",
              "Towel service",
              "Discounts on merchandise"
            ]
          },
          {
            "id": 3,
            "name": "Family Package",
            "price": 129.99,
            "features": [
              "Unlimited access for the whole family",
              "Unlimited fitness classes for all family members",
              "Locker room access",
              "Personalized workout plans for all family members",
              "Nutrition consultations for all family members",
              "Family discount for personal trainer sessions",
              "Access to the swimming pool",
              "Sauna and steam room access",
              "Childcare services",
              "Discounts on family memberships"
            ]
          }
        ]
    
      
    return (
        <div className="">
            <h2 className="text-4xl font-extrabold  " >
                Best Prices in Town :
              <div className=" grid grid-cols-3 gap-4 text-center ">
              {
                    PriceOptions.map((options) => <PriceOption  key={options.id} options={options} ></PriceOption>)
                }
              </div>

            </h2>
        </div>
    );
};

export default PriceOptions;