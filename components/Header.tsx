import { FunctionComponent } from "react";
import {Box, Button, Heading, Text} from '@chakra-ui/react'

const Header: FunctionComponent = () => {
    return <>
    Header 
    <Text>Hello, mom</Text>
    <Box as="section">
    <Heading as='h5'>Hello, world</Heading>
        <Heading>Hello, world</Heading>
        <Heading>Hello, world</Heading>
        <Button variant='filled'>Click me</Button>
        <a href="#">Hover on me</a>
        </Box>
    </>
}

export default Header;