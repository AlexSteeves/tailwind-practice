import { BsPlus, BsFillLightningFill, BsGithub} from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return (
      <div className="fixed top-0 left-0 h-screen w-16 m-0
                      flex flex-col 
                      bg-primary text-secondary shadow-lg">

            <SideBarIcon icon={<FaFire size = "28" />}/>
            <SideBarIcon icon={<BsPlus size = "28" />}/>
            <SideBarIcon icon={<BsGithub size = "28" />}/>
      </div>
    );
  };

  const SideBarIcon = ({icon}) => (
    <div className = "sidebar-icon">
        {icon}
    </div>
  );
  
  

  export default SideBar;