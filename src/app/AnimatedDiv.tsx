import { motion } from 'framer-motion';

const AnimatedDiv = () => {
    return (
        <motion.div
            style={{
                width: '200px',
                height: '200px',
                backgroundColor: '#ff0000',
                opacity: 1// Initial background color
            }}
            whileHover={{
                opacity: 0 // Background color on hover
            }}
            transition={{duration: 0.5}}
        >





        </motion.div>
    );
};

export default AnimatedDiv;