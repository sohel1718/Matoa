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
                    <>
                        <Header />
                        <div className="content">
                            <Component {...props} />
                        </div>
                        <Footer />
                    </>
                )
            }
        />
    )
}

export default Layout