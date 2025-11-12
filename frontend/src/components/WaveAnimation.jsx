import { motion } from 'framer-motion';

const WaveAnimation = ({ isPlaying }) => {
  if (!isPlaying) return null;
  
  return (
    <div className="flex items-end space-x-1 h-6">
      {[1, 2, 3, 4, 5].map(i => (
        <motion.div
          key={i}
          className="w-1 bg-primary rounded-full"
          style={{ height: '8px' }}
          animate={{
            scaleY: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );
};

export default WaveAnimation;

