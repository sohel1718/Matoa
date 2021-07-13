import Header from '../Header';
import Footer from '../Footer';
import './layoutStyle.scss';
import { Route } from 'react-router-dom';

const Layout = ({isAuthenticated, component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => isAuthenticated && 
                (
                    <div className="layout">
                        <Header />
                        <div className="layout__content">
                            <Component {...props} />
                            <Footer />
                        </div>
                    </div>
                )
            }
        />
    )
}

export default Layout