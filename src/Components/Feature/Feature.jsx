
import PropTypes from 'prop-types'; 
import { AiFillCheckCircle } from 'react-icons/ai';


const Feature = ({feature}) => {
    return (
        <div className=''>
            <div className='text-lg font-normal flex items-center   gap-2'>
           <h1 className='text-lime-300'><AiFillCheckCircle></AiFillCheckCircle></h1> 
             {feature}
        </div>
        </div>
    );
};
Feature.PropTypes={
    feature : PropTypes.any
}
export default Feature;