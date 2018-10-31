import Link from 'next/link';
import { Input, Button, Icon, Menu, Container } from 'semantic-ui-react';

const Navbar = () => (
     <div className="nav">
            <Container>
                <Menu secondary>
                    <Menu.Menu position='left'>
                        <Menu.Item>
                            <Link href="/">
                                <Button animated>
                                    <Button.Content visible>Home</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='home' />
                                    </Button.Content>
                                </Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/about">
                                <Button animated>
                                    <Button.Content visible>About</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='info' />
                                    </Button.Content>
                                </Button>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Link href="/">
                                <Button animated>
                                    <Button.Content visible>Home</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='home' />
                                    </Button.Content>
                                </Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/about">
                                <Button animated>
                                    <Button.Content visible>About</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='info' />
                                    </Button.Content>
                                </Button>
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