import PropTypes from 'prop-types'; 
import Feature from '../Feature/Feature';

const PriceOption = ({options}) => {
    const {id, name , features, price}= options;
    return (
        <div className='text-orange-300 bg-orange-800 flex flex-col p-3 mt-5'>
            <div className='flex items-center gap-3 text-center justify-center'>
            <p className='text-2xl font-bold      gap-4'>{id}.  </p>
            <h4 className='text-2xl font-normal text-orange-300'>{name}</h4>
            </div>
           
            <h4>{price}<span className='text-base'> /mon</span></h4>
            <h4 className='text-lg text-start pl-7 grow '>
         
                {
                    features.map(feature =>  <Feature feature={feature} key={features.id}></Feature>)
                }
            </h4>
            <button className='w-[50%] m-auto bg-green-900 rounded-xl text-center  py-3 text-base mt-4 mb-4'> Buy Now</button>

        </div>
    );
};
PriceOption.propTypes = {
    options : PropTypes.object
}
export default PriceOption;