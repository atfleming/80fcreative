import { motion } from "framer-motion";
import { CameraIcon, PenToolIcon, VideoIcon, LayoutIcon, ScissorsIcon } from "lucide-react";
import { Button } from "./Button";

const services = [
  {
    title: "Video Production",
    icon: VideoIcon
  },
  {
    title: "Photography",
    icon: CameraIcon
  },
  {
    title: "Creative Direction",
    icon: PenToolIcon
  },
  {
    title: "Design/Web Development",
    icon: LayoutIcon
  },
  {
    title: "Editing",
    icon: ScissorsIcon
  }
];

export const Services = () => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  const handleStartClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="services" className="bg-[#130c24] py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="neon-cyan mb-4 font-pixel text-3xl font-bold text-electric-cyan md:text-4xl">
            Creative Services
          </h2>
          <p className="font-sans mx-auto max-w-2xl text-xl text-gray-400">
            Full-stack creative support—from concept to final delivery across film, photo, design, and post.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center rounded-lg bg-[#1a1030] p-8 text-center transition-colors duration-300 hover:bg-[#241544]"
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#ff55ee]/10 transition-colors duration-300 group-hover:bg-[#ff55ee]/20">
                <service.icon className="h-7 w-7 text-[#ff55ee]" />
              </div>
              <h3 className="font-pixel text-xl font-bold text-electric-cyan">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button variant="primary" onClick={handleStartClick}>
            Ready to get started?
          </Button>
        </motion.div>
      </div>
    </section>
  );
};