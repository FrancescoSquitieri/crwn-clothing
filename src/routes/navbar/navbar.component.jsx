import { Outlet, Link } from "react-router-dom";
import './navbar.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-drop-down/cart-dropdown.component";

const Navbar = () => {

    const { currentUser } = useContext(UserContext);
    const { cartIsOpen } = useContext(CartContext);

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        CONTACT
                    </Link>
                    {
                        currentUser ?
                            (
                                <span
                                    className='nav-link'
                                    onClick={SignOutUser}>
                                    SIGN OUT
                                </span>
                            )
                            :
                            (
                                <Link className='nav-link' to='/auth'>
                                    SIGN IN
                                </Link>
                            )
                    }
                    <CartIcon />
                </div>
                {cartIsOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;