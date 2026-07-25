import { motion } from 'framer-motion'
import { useState } from 'react'
import dogImg from '../assets/images/dog.png'
import { container, item } from '../utils/animations'


function Sparkle({ className }) {
    return (
        <svg viewBox="0 0 100 40" className={className} fill="currentColor">
            <path d="M20 20 L23 12 L26 20 L34 23 L26 26 L23 34 L20 26 L12 23 Z"/>
            <path d="M55 20 L57 15 L59 20 L64 22 L59 24 L57 29 L55 24 L50 22 Z"/>
            <path d="M78 18 L79.5 14 L81 18 L85 19.5 L81 21 L79.5 25 L78 21 L74 19.5 Z"/>
        </svg>
    )
}


function HeartIcon({ className, style    }) {
    return (
        <svg 
            viewBox="0 0 24 24" 
            className={className} 
            style={style}
            fill="currentColor"
        >
            <path d="M12 21s-6.7-4.35-9.3-8.1C1.1 10.7 1 8.3 2.6 6.6 4.2 4.9 6.9 4.8 8.6 6.4L12 9.5l3.4-3.1c1.7-1.6 4.4-1.5 6 .2 1.6 1.7 1.5 4.1-.1 6.3C18.7 16.65 12 21 12 21Z"/>
        </svg>
    )
}

const floatingHearts = [
    { left: '8%',  size: 18, delay: 0,   duration: 9 },
    { left: '22%', size: 12, delay: 2,   duration: 11 },
    { left: '38%', size: 20, delay: 4.5, duration: 8 },
    { left: '55%', size: 14, delay: 1.2, duration: 10 },
    { left: '70%', size: 22, delay: 3.5, duration: 9.5 },
    { left: '85%', size: 16, delay: 5,   duration: 12 },
    { left: '15%', size: 10, delay: 6.5, duration: 8.5 },
    { left: '62%', size: 12, delay: 7,   duration: 10.5 }
]

function FloatingHearts() {
    return (
        <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
            {floatingHearts.map((heart, i) => (
                <motion.div
                    key={i}
                    className='absolute text-rose-300'
                    style={{ left: heart.left, bottom: '-10%' }}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ 
                        y: '-120vh', 
                        opacity: [0, 0.6, 0.6, 0]
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <HeartIcon style={{ width: heart.size, height: heart.size }} />
                </motion.div>
            ))}
        </div>
    )
}

export default function Farewell() {
    const [found, setFound] = useState(false)

    return (
        <section className='relative min-h-[100dvh] flex items-center justify-between 
                                            px-6 pt-24 pb-20 2xl:pt-32 2xl:pb-28 bg-rose-50 overflow-hidden lg:justify-center md:justify-center'>

            <div className='absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180'>
                <svg viewBox="0 0 1440 100" className='w-full h-w text-white block' fill="currentColor">
                    <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
                </svg>
            </div>

            <FloatingHearts/>

            <motion.button
                onClick={() => setFound(true)}
                whileTap={{ scale: 0.9 }}
                className='absolute bottom-6 right-6 2xl:bottom-10 2xl:right-10 z-20 
                                        w-12 h-12 2xl:w-16 2xl:h-16
                                        opacity-20 hover:opacity-100
                                        transition-opacity duration-300 select-none'
            >
                <img 
                    src={dogImg} 
                    alt="" 
                    className='w-full h-full object-contain'
                />
            </motion.button>


            {found && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className='fixed inset-0 z-50 flex items-center justify-center 
                                            bg-black/20 px-6'

                    onClick={() => setFound(false)}
                >
                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className='bg-white rounded-2xl px-8 py-8 2xl:px-10 2xl:py-10
                                                flex flex-col items-center gap-4 
                                                max-w-xs 2xl:max-w-sm text-center'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={dogImg} 
                            alt="Наш пёс" 
                            className='w-32 h-32 2xl:w-40 2xl:h-40 object-contain'
                        />
                        <p className='font-ml text-xl 2xl:text-2xl text-stone-900'>
                            Вы нашли пасхалку! 🐾
                        </p>
                        <p className='text-stone-500 text-sm 2xl:text-base'>
                            Знакомьтесь — наш пушистый друг Вильям и главный талисман нашей семьи!
                        </p>

                        <button
                            onClick={() => setFound(false)}
                            className='mt-2 text-xs 2xl:text-sm text-stone-400 underline'
                        >
                            Закрыть
                        </button>
                    </motion.div>
                </motion.div>
            )}

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className='relative z-10 flex flex-col items-center text-center gap-6 2xl:gap-8'
            >

                <motion.p
                    variants={item}
                    className='text-stone-500 text-md uppercase font-tr lg:text-lg md:text-lg 2xl:text-xl lg:tracking-[0.2em]'
                >
                    Приглашаем вас разделить с нами личное пространство
                </motion.p>


                <motion.div variants={item} className='text-rose-300 w-20 2xl:w-28'>
                    <Sparkle className='w-full h-auto' />
                </motion.div>

                <motion.p
                    variants={item}
                    className='font-ml text-2xl md:text-3xl 2xl:text-4xl text-stone-900 mt-2 font-tr'
                >
                    Ярослав & Ксения
                </motion.p>

                <motion.p
                    variants={item}
                    className='text-stone-500 text-base tracking-wide font-tr md:text-md 2xl:text-lg'
                >
                    20 августа 2026
                </motion.p>

                <motion.span
                    variants={item}
                    className='w-16 2xl:w-20 h-px bg-stone-300 mt-4'
                />

                <motion.p
                    variants={item}
                    className='text-stone-400 text-sm italic mt-2 md:text-lg 2xl:text-xl'
                >
                    С любовью и благодарностью 🤍
                </motion.p>

            </motion.div>

        </section>
    )
}