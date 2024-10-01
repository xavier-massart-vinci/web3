import logo from './logo-vinci.png'

const Header = (props) => {
    return (
        <>
            <img src={logo}></img>
            <h1>{props.course}</h1>
        </>

    );
}

export default Header;