import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import weddingBg from '../assets/images/wedding-2.jpg'
import {VolumeOnIcon, VolumeOffIcon, MenuIcon} from '../components/Icons'
import { container, item } from '../utils/animations'
import MobileMenu from '../components/MobileMenu'


const navLinks = [
    { label: 'Главная', href: '#home' },
    { label: 'Гостям', href: '#welcome' },
    { label: 'Место', href: '#venue' },
    { label: 'Обратный отсчёт', href: '#countdown' },
    { label: 'Пожелания', href: '#wishes' },
    { label: 'Контакты', href: '#contacts' },
    { label: 'Группа', href: '#group' }
]

export default function Hero() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [showHint, setShowHint] = useState(true)
    const audioRef = useRef(null)

    const toggleMusic = () => {
        if (!audioRef.current) return

        if (playing) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setPlaying(!playing)
        setShowHint(false)
    }

    const handleNavClick = (href) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const timer = setTimeout(() => setShowHint(false), 5000)
        return () => clearTimeout(timer)
    }, [])



    return (
        <section id="home" 
                        className='relative flex items-center min-h-[45em]
                                            justify-center overflow-hidden select-none bg-stone-100'>

            <audio ref={audioRef} src="/music/bi2.mp3" loop />

            <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-5 '>
                <div className='relative'>
                        <motion.button
                            onClick={toggleMusic}
                            whileTap={{ scale: 0.85 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className='text-white lg:text-stone-700 p-2 rounded-full 
                                                    bg-black/20 lg:bg-stone-100/10 
                                                    border border-stone-900/10
                                                    shadow-sm
                                                    backdrop-blur-sm'
                        >
                            {playing ? (
                                <VolumeOnIcon className='w-5 h-5' />
                            ) : (
                                <VolumeOffIcon className='w-5 h-5' />
                            )}
                        </motion.button>

                       <AnimatePresence>
                                {showHint && !playing && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -8 }}
                                        transition={{ duration: 1.5 }}
                                        className='absolute top-1/2 -translate-y-1/2 left-full ml-2 
                                                                whitespace-nowrap
                                                                bg-black/20 lg:bg-stone-100/10 
                                                                text-white lg:text-stone-700
                                                                text-xs md:text-sm 
                                                                border border-white/20 lg:border-stone-900/10 
                                                                shadow-sm backdrop-blur-sm
                                                                px-3 py-1.5 md:px-4 md:py-2 rounded-full
                                                                pointer-events-none'
                                    >
                                        Включи меня 
                                        <span className='absolute top-1/2 -translate-y-1/2 -left-1 
                                                                w-2 h-2 bg-black/20 lg:bg-stone-100/10 
                                                                border-l border-b border-white/20 lg:border-stone-900/10
                                                                backdrop-blur-sm
                                                                rotate-45'/>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                    </div>
                <motion.button
                    onClick={() => setMenuOpen(true)}
                    whileTap={{ scale: 0.85 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className='text-white lg:text-stone-700 p-2 rounded-full 
                                            bg-black/20  lg:bg-stone-100/10 
                                            border border-stone-900/10
                                            shadow-sm
                                            backdrop-blur-sm'
                >
                    <MenuIcon className='w-5 h-5' />
                </motion.button>

            </div>

            <AnimatePresence>
                {playing && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className='fixed top-5 left-1/2 -translate-x-1/2 z-40 
                                                pointer-events-none
                                                flex items-center gap-2
                                                px-4 py-2 rounded-full
                                                bg-black/20 backdrop-blur-sm'
                    >
                        <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className='w-1.5 h-1.5 rounded-full bg-white lg:bg-stone-900'
                        />

                        <span className='text-white/80 lg:text-stone-900/70 text-xs tracking-wide font-tr'>
                             Играет: «Личное пространство» — Би-2
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <MobileMenu isOpen={menuOpen}
                                    onClose={() => setMenuOpen(false)}
                                    links={navLinks}
                                    onLinkClick={handleNavClick}/>

            <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className='absolute inset-0 
                                        lg:static lg:w-[55%] lg:h-screen lg:order-2'>

                    <img src={weddingBg} alt="Wedding backgroud" className='w-full h-full object-cover'/>
            
            </motion.div>
                
            <div className='absolute inset-0 bg-black/70 lg:hidden'/>

            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className=' relative
                                        z-10

                                        flex
                                        flex-col
                                        items-center
                                        justify-center

                                        w-full
                                        min-h-screen

                                        text-white

                                        -translate-y-20

                                        lg:w-[45%]
                                        lg:items-start
                                        lg:px-6
                                        lg:text-neutral-900
                                        lg:order-1
                                        lg:uppercase'
                >

                <motion.h1 
                    variants={item}
                    className='font-tdm text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem]
                                        leading-none'
                >
                    Ярослав
                </motion.h1>

                <motion.span
                    variants={item}
                    className='w-24 h-px my-3 bg-white/40 lg:bg-stone-900/40'
                />

                <motion.h1 
                    variants={item}
                    className='font-tdm text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem]
                                        leading-none'
                >
                    Ксения
                </motion.h1>

                 <motion.div
                    variants={item}
                    className="
                        mt-10
                        flex
                        items-center
                        gap-4
                        text-stone-200
                        text-xl
                        font-tl
                        absolute
                        bottom-10

                        lg:text-stone-900
                        lg:justify-center
                    "
                >
                    <span className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">20</span>
                    <span className="h-8 w-px bg-current opacity-40" />
                    <span className="font-light md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">АВГУСТА</span>
                    <span className="h-8 w-px bg-current opacity-40" />
                    <span className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">2026</span>
                </motion.div>

            </motion.div>

            <div className='absolute inset-3 border border-white/15 pointer-events-none z-10 '/>

        </section>
    )
}