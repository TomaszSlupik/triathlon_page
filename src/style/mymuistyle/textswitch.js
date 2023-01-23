import {styled} from '@mui/system';


const Textswitch = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        fontSize: '0.8rem',
        color: '#999'
    }, 
    [theme.breakpoints.up('sm')] : {
        fontSize: '1.2rem'
        
    }, 
    [theme.breakpoints.up('md')] : {
       
    }, 
    [theme.breakpoints.up('lg')] : {
        fontSize: '1.5rem'
        
    }, 
    [theme.breakpoints.up('xxl')] : {
        fontSize: '1.8rem'
        
    }, 

}))

export default Textswitch