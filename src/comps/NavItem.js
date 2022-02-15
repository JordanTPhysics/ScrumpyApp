




function NavItem(props){

    
    return (
        <li className='nav-item'>
            <a href = {props.link} className='icon-button'>
                {props.icon}
                {props.text}
            </a>
            
        </li>
    )
}
export default NavItem;