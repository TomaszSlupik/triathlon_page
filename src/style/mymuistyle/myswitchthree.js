import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Myswitch = styled.span `
display: block;
width: 75px;
padding: 4px;
border-radius: 20px;
background: #999;
transition: all 0.35s;
`;
const Mylabel = styled.label `
cursor: pointer;
`;

const goIn = keyframes`
45% {
    transform: scaleX(1.25);
}
`;
const goOut = keyframes`
55% {
    transform: scaleX(1.25);
}
`;

const goInAnimation = css`
  animation: ${goIn} 0.35s;
`;

const goOutAnimation = css`
  animation: ${goOut} 0.35s;
`;


const Styledskeleton = styled.span `
display: block;
width: 32px;
height: 32px;
border-radius: 50%;
background: #100f10;
${el => !el.isChecked && goOutAnimation};
transition: all 0.35s;
`;
const Styledinput = styled.input `
position: absolute;
transform: scale(0);

&:checked ~ ${Myswitch} {
  background: #228b22;
}
&:checked ~ 
${Myswitch} ${Styledskeleton} {
  margin-left: 36px;
  ${el => el.checked && goInAnimation};
}
`

export default function Switchrun(props) {

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (e) => {
        console.log(isChecked)
        setIsChecked(e.target.checked)
        
          props.runFilter('Bieg')
         
    }

  return (
    <div>
  <Mylabel>
            <Styledinput
            onChange={handleChange}
            checked={isChecked}
            type='checkbox'
            />
            <Myswitch>
                <Styledskeleton isChecked={isChecked}/>
            </Myswitch>
    </Mylabel>

    </div>
  )
}
