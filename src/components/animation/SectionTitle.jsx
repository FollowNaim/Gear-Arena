import { motion } from "framer-motion";
function SectionTitle({ children }) {
  return (
    <motion.h3
      initial={{ opacity: 0, translateY: "30px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h3>
  );
}

export default SectionTitle;
