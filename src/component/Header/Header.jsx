import Logo from '../Logo/logo'
import Navlist from '../Navlist/navlist'
import List from '../List/List'

function Header(){


    return (

        <header>
            <div className="container">
                <div className="row">
                    <Logo/>
                    <Navlist/>
                    <List/>
                </div>
            </div>
        </header>
    )
}

export default Header;