import { Link } from "react-router-dom";
import logo from "../../images/IMG_2385.png";

const Logo = () => {
    return (
        <Link to='/'>
            <img
                src={logo}
                alt='Zadorożnia Labs'
                width='300'
                loading='lazy'
            />
        </Link>
    )
};

export default Logo;