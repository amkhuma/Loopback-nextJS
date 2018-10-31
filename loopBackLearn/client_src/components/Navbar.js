import Link from 'next/link';
import { Input, Button, Icon, Menu, Container } from 'semantic-ui-react';

const Navbar = () => (
     <div className="nav">
            <Container>
                <Menu secondary color='red'>
                    <Menu.Menu position='left'>
                        <Menu.Item>
                            <img src='https://png2.kisspng.com/sh/a23649efa8f41b39b28e3ed6b43ef248/L0KzQYi4UsExN2Y3fpGAYULnQoLtUBE2Pmg3S5C8OUe5RIW3UcE2OWMASKk7NUG5R4i8TwBvbz==/5a2d21f3a56723.3976440115129072516775.png'/>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/">
                                <Button>Home</Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/about">
                                <Button>About</Button>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Link href="/">
                                <Button>Home</Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/about">
                                <Button>About</Button>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu >
            </Container>
            
            
            <style jsx>{`
                .nav {
                    background: #333;
                    color: #fff;
                    list-style : none;
                }
                .cont {
                    background: #333;
                    color: #fff;
                    list-style : none;
                }
            `}</style>
    </div>
);

export default Navbar;