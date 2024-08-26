import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
const AnimationLayout = () => {
  const { pathname } = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5,
  };
  return (
    <MainLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}>
        <Outlet />
      </motion.div>
    </MainLayout>
  );
};

export default AnimationLayout;
