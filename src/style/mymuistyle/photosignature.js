import { styled } from '@mui/system';

const Photosignature = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        color: '#999',
        fontSize: '0.9rem', 
        position: 'absolute', 
        bottom: '4%',
        right: '4%'
    },
 }))

export default Photosignature