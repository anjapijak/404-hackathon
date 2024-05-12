import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';



function NavBar(){
    return (
        <>
           <ul class="nav flex-column" color='white' style = {{backgroundColor : '#EBF2FA'}}>
           <li class="nav-item ">
                    <a class="nav-link active px-1" href="#" color='#427AA1' ><FontAwesomeIcon icon={faUser} /> My Profile</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link px-1" href="#"color='#427AA1' ><FontAwesomeIcon icon={faBook} /> My Journals</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-1" href="#" color='#427AA1' ><FontAwesomeIcon icon={faEnvelope} /> My Mail Box</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-1" href="#" color='#427AA1'><FontAwesomeIcon icon={faGlobe} /> Explore</a>
                </li>
            </ul>
        </>
    );
}

export default NavBar;