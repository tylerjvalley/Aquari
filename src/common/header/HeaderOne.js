import {useState, useRef} from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import useStickyHeader from "./useStickyHeader";


const HeaderOne = ({btnStyle, HeaderSTyle}) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }
    const ref = useRef();
    let [check] = useState(true);
    const sticky = useStickyHeader( 50 );
    const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
    const imageSwap = `${process.env.PUBLIC_URL}/images/logo/${(sticky && check) ? 'a-black.png' : 'a-white.png'}` 
    
    return (
        <>
            <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        
                        <div className="col-lg-3 col-md-6 col-4">
                            {/*<h1 style={{margin: "auto", fontSize: "36px"}}>Aquari</h1> */}
                            
                            <Logo 
                                image={imageSwap}
                            />
                        </div> 
                        <div className="col-lg-9 col-md-6 col-8 position-static">
                            <div className="header-right">
                                <nav className="mainmenu-nav d-none d-lg-block">
                                    <Nav />
                                </nav>
                               
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                                    </div>
                                </div>
                                
                            </div>  
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
        </>
    )
}
export default HeaderOne;