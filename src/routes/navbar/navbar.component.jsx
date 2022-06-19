import { Outlet, Link } from "react-router-dom";
import { NavbarContainer, LogoContainer, NavbarLink, NavbarLinks } from './navbar.styles';
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
            <NavbarContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavbarLinks>
                    <NavbarLink to='/shop'>
                        SHOP
                    </NavbarLink>
                    <NavbarLink to='/contact'>
                        CONTACT
                    </NavbarLink>
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
                                <NavbarLink to='/auth'>
                                    SIGN IN
                                </NavbarLink>
                            )
                    }
                    <CartIcon />
                </NavbarLinks>
                {cartIsOpen && <CartDropdown />}
            </NavbarContainer>
            <Outlet />
        </>
    );
};

export default Navbar;