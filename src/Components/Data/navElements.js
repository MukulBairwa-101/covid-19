// import {AiFillHome,FcAbout} from "react-icons/all"
import icons  from '../../materialui/global'
  const navData =[
    {
        title:"Home",
        path:"/",
        cName:"item",
        icon:<icons.HomeIcon color="primary"/>
        
    },
    {
        title:'Profile',
        path:"/",
        cName:"item",
        icon:<icons.PersonIcon  color ="secondary" />
    },
    {
        title:'Dashboard',
        path:"/",
        cName:"item",
        icon:<icons.DashboardIcon />
    },
    {
        title:"About",
        path:"/about",
        cName:"item",
        icon:<icons.InfoIcon />
        
    },
    
]

export default navData;