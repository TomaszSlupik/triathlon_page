
import { styled } from '@mui/system';

const TextDescribe = styled('span')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        textAlign: 'justify',
        color: '#999',
        fontSize: '1.3rem'
    },
    [theme.breakpoints.up('sm')] : {
        fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')] : {
        fontSize: '1.7rem'
    }
}))

export default  TextDescribe