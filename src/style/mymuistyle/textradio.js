import {styled} from '@mui/system';


const Textradio = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        fontSize: '1rem',
        color: '#999'
    }, 
    [theme.breakpoints.up('sm')] : {
        margin: '0em 0.2em',
        fontSize: '1.3rem'
        
    }, 
    [theme.breakpoints.up('md')] : {
        margin: '0em 0.4em'

       
    }, 
    [theme.breakpoints.up('lg')] : {
        fontSize: '1.5rem'
        
    }, 
    [theme.breakpoints.up('xxl')] : {
        fontSize: '1.8rem'
        
    }, 

}))

export default Textradio