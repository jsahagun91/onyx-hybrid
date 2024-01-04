import onyxLogo from '../assets/onyxlogo.png'
import { motion } from 'framer-motion';

function Header() {
    return (
        <motion.div  initial={{ y: "-300px" }} animate={{ y: 0 }} className="header">
            <img src={onyxLogo} alt="onyx logo"></img>
            <h2>ONYX</h2>
            <p>Hybrid Training Club</p>
        </motion.div>
    );
}
export default Header