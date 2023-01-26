import { styled } from '@mui/system';


const Halfbox = styled('div')(({theme}) => ({
[theme.breakpoints.up('xs')] : {
    position: 'relative',
    width: '100%',
    textAlign: 'justify'
    
}, 
[theme.breakpoints.up('sm')] : {
    marginLeft: '1.2em', 
}, 
[theme.breakpoints.up('xl')] : {
    position: 'relative',
    marginLeft: '1.2em',
    width: '50%',
    textAlign: 'justify'
    
}, 

}))

export default Halfbox