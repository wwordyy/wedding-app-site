import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import venueBg from '../assets/images/venue-bg.png'
import venuePhoto1 from '../assets/images/venue-1.png'
import venuePhoto2 from '../assets/images/venue-2.png'
import venuePhoto3 from '../assets/images/venue-3.png'
import venuePhoto4 from '../assets/images/venue-4.png'
import { container, item } from '../utils/animations'

const venuePhotos = [venuePhoto1, venuePhoto3, venuePhoto4, venuePhoto2]

export default function Venue() {

    const [copied, setCopied] = useState(false)
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(0)

    const address = 'г. Москва, Краснопролетарская 7, 2 подъезд, 16 этаж, кв 83'

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(address)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (e) {
            console.error("Не удалось скопировать: ", e)
        }
    }

    const goTo = (index) => {
        setDirection(index > current ? 1 : -1)
        setCurrent(index)
    }

    const handleDragEnd = (event, info) => {
        const threshold = 10
        if (info.offset.x < -threshold && current < venuePhotos.length - 1) {
            goTo(current + 1)
        } else if (info.offset.x > threshold && current > 0) {
            goTo(current - 1)
        }
    }

    return (
        <section id='venue' className='relative min-h-screen flex items-center justify-center 
                                            px-6 lg:px-16 py-20 overflow-hidden'>

            <div className='absolute inset-0'>
                <img src={venueBg} alt="Место проведения" className='w-full h-full object-cover'/>
                <div className='absolute inset-0 bg-black/70'/>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className='relative z-10 w-full max-w-sm lg:max-w-5xl 2xl:max-w-6xl
                                        flex flex-col lg:flex-row lg:items-stretch
                                        bg-white/50 lg:bg-white/40 rounded-2xl shadow-xl
                                        overflow-hidden'
            >

                {/* заголовок только на мобилке — над фото */}
                <motion.div variants={item} className='lg:hidden flex flex-col items-center gap-4 pt-8 px-6'>
                    <h2 className='font-tdm text-center text-3xl md:text-4xl text-stone-900 select-none'>
                        МЕСТО ПРОВЕДЕНИЯ
                    </h2>
                    <span className='w-16 h-px bg-stone-300' />
                </motion.div>


                <motion.div variants={item} className='relative w-full lg:w-1/2 
                                                                p-6 lg:p-8 2xl:p-10'>
                    <div className='relative w-full h-56 lg:h-full lg:min-h-[420px] 2xl:min-h-[520px]
                                            overflow-hidden rounded-xl'>

                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img
                                key={current}
                                src={venuePhotos[current]}
                                custom={direction}
                                initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                                transition={{ 
                                    x: { type: "spring", stiffness: 260, damping: 30 },
                                    opacity: { duration: 1 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={handleDragEnd}
                                className='absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing'
                            />
                        </AnimatePresence>
                    </div>

                    <div className='flex justify-center gap-1.5 mt-3 2xl:mt-4'>
                        {venuePhotos.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full transition-colors
                                    ${i === current ? 'bg-stone-900' : 'bg-stone-300'}`}
                            />
                        ))}
                    </div>
                </motion.div>

                <div className='flex flex-col items-center lg:items-start text-center lg:text-left
                                        w-full lg:w-1/2 
                                        px-6 pb-10 lg:p-12 2xl:p-16 gap-4 2xl:gap-6
                                        lg:justify-center'>

                    <motion.h2
                        variants={item}
                        className='hidden lg:block font-tdm
                                            text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl 
                                            text-stone-900 select-none'
                    >
                        МЕСТО ПРОВЕДЕНИЯ
                    </motion.h2>

                    <motion.span
                        variants={item}
                        className='hidden lg:block w-16 2xl:w-20 h-px bg-stone-300'
                    />

                    <motion.p
                        variants={item}
                        className='text-stone-900 text-base lg:text-lg cursor-pointer 
                                            active:scale-95 transition-transform
                                            select-none relative'
                        onClick={handleCopy}
                    >
                        <span className='text-stone-900 text-base lg:text-md xl:text-lg 2xl:text-xl
                                                border-b border-dashed border-stone-700 pb-1 font-tr'>
                            {address}
                        </span>
                        <br />
                        <span className={`text-xs 2xl:text-sm transition-colors duration-300 font-tr
                                ${copied ? 'text-red-900' : 'text-stone-900'}`}>
                            {copied ? 'Скопировано!' : 'нажмите, чтобы скопировать'}
                        </span>
                    </motion.p>

                    <motion.p
                        variants={item}
                        className='text-stone-900 text-base lg:text-md xl:text-lg 2xl:text-xl
                                            select-none font-tr'
                    >
                        Начало в 15:00
                    </motion.p>

                    <motion.a
                        variants={item}
                        href="https://yandex.ru/maps/-/CTVs6S~-"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.90 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className='mt-2 2xl:mt-4 px-6 py-3 lg:px-8 lg:py-4 2xl:px-10 2xl:py-5 rounded-full 
                                                bg-stone-900 text-white text-sm lg:text-sm xl:text-md 2xl:text-lg
                                                tracking-wide uppercase
                                                hover:bg-stone-700 transition-colors
                                                select-none font-tr cursor-pointer'
                    >
                        Открыть на карте
                    </motion.a>

                </div>

            </motion.div>

        </section>
    )
}