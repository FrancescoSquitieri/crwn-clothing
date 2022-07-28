import { Outlet } from "react-router-dom";
import { NavbarContainer, LogoContainer, NavbarLink, NavbarLinks, NavbarSignOut } from './navbar.styles';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-drop-down/cart-dropdown.component";
import { selectCartIsOpen } from "../../store/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

const Navbar = () => {

    const currentUser = useSelector(selectCurrentUser);
    const cartIsOpen = useSelector(selectCartIsOpen);
    const dispatch = useDispatch();

    const SignOutUser = () => dispatch(signOutStart());

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
                                <NavbarSignOut
                                    className='nav-link'
                                    onClick={SignOutUser}>
                                    SIGN OUT
                                </NavbarSignOut>
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