import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 600);
        }, 2200);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-gray-950"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px]"
                            initial={{ scale: 0, x: "-50%", y: "-50%" }}
                            animate={{ scale: 1.5, x: "-50%", y: "-50%" }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        />
                    </div>

                    <div className="text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <motion.h1
                                className="text-5xl md:text-7xl font-black text-white mb-4"
                                initial={{ letterSpacing: "0.5em", opacity: 0 }}
                                animate={{ letterSpacing: "0.05em", opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                            >
                                Welcome
                            </motion.h1>
                        </motion.div>

                        <motion.div
                            className="w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-4"
                            animate={{ width: 80 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                        />

                        <motion.p
                            className="text-gray-400 font-mono text-sm tracking-widest uppercase"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.4 }}
                        >
                            To My Portfolio
                        </motion.p>

                        <motion.div
                            className="mt-8 flex justify-center gap-1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
