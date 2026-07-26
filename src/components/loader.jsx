import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const duration = 2200
        const interval = 20
        const step = 100 / (duration / interval)

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + step
                if (next >= 100) {
                    clearInterval(timer)
                    setTimeout(onComplete, 300)
                    return 100
                }
                return next
            })
        }, interval)

        return () => clearInterval(timer)
    }, [onComplete])

    return (
            
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className='fixed inset-0  flex flex-col items-center justify-center 
                                    bg-white border-none px-6'
        >
            <span className='font-tr text-xl md:text-3xl text-stone-600 mb-8 text-center'>
                Загружаем счастье... почти готово
            </span>

            <div className='w-48 h-px bg-stone-200 relative overflow-hidden'>
                <motion.div
                    className='absolute top-0 left-0 h-full bg-stone-900'
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>

            <span className='text-xs text-stone-400 tracking-[0.2em] uppercase mt-4 font-tl'>
                {Math.round(progress)}%
            </span>

  
        </motion.div>
    )
}