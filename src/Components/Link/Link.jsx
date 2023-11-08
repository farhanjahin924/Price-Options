import PropTypes from 'prop-types'; // ES6
const Link = ({route}) => {
    return (
        <li className="mr-7  hover:bg-slate-950">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes = {
    route : PropTypes.object
}
export default Link;