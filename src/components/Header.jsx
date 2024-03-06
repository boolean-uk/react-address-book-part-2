import backArrow from './../assets/icons/back-arrow.png'
import {Link} from 'react-router-dom'

 function Header({title}){
    return(
        <>
        <div className='header'>
        <Link to={'/'}><div className='icon inline'><img src={backArrow} alt={'go back'}/></div></Link>
        <div className='inline'><h2>{title}</h2></div>
        </div>
        </>
    )
}

export default Header