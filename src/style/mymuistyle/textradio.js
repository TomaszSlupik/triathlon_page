import {styled} from '@mui/system';


const Textradio = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        fontSize: '1rem',
        color: '#999',
        fontWeight: '600'
    }, 
    [theme.breakpoints.up('sm')] : {
        margin: '0em 0.2em',
        fontSize: '1.3rem'
        
    }, 
    [theme.breakpoints.up('md')] : {
        margin: '0em 0.4em',
        fontSize: '1.3rem'

       
    }, 
    [theme.breakpoints.up('lg')] : {
        fontSize: '2rem',
        fontWeight: '600'
        
    }, 

}))

export default Textradio