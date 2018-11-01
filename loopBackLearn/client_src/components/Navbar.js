import Link from 'next/link';
import { Input, Button, Icon, Menu, Container } from 'semantic-ui-react';

const Navbar = () => (
     <div className="nav">
            <Container>
                <Menu secondary color='red'>
                    <Menu.Menu position='left'>
                        <Menu.Item>
                            <img src='https://www.wethinkcode.co.za/assets/images/wethinkcode-logo-white.png'/>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/">
                                <Button basic compact color='grey'>Home</Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/about">
                                <Button basic compact color='grey'>About</Button>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Link href="/">
                                <Button basic compact color='grey'>Home</Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/about">
                                <Button basic compact color='grey'>About</Button>
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