import Head from 'next/head'
import Navbar from '../components/Navbar';
import {Container} from 'semantic-ui-react';

const Layout = (props) => (
    <div>
        <Head>
            <title>FreshEats</title>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
        </Head>
        <Navbar/>
        <Container>
            {props.children}
        </Container>
    </div>
);

export default Layout