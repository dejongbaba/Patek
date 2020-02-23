import withData from "../withData";
import NavigationBar from "../../Components/Commons/Navbar/NavigationBar";
import {getAllMenusContent} from "../../Api/api";


export default withData(NavigationBar, getAllMenusContent);