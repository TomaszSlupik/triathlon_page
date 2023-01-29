import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BacktoPage.scss'

export default function BacktoPage() {

    let navigate = useNavigate()

    const backtoPage = () => {
        navigate('/trips')
    }

  return (
    <div>
        <div className="icon__iconboxcontainer">
            <div className="icon__iconboxcontainer-iconback" onClick={backtoPage}>
                <i class="fa-solid fa-circle-left iconbackmenu"></i>
            </div>
        </div>
    </div>
  )
}
