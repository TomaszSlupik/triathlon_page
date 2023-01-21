import { styled } from '@mui/system';

const MyTimeline = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        color: '#7c5fe9'
    },
    [theme.breakpoints.up('lg')] : {
        fontSize: '1.6rem'
    }
 }))

export default MyTimeline