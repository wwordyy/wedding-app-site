import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { container, item } from '../utils/animations'

const WEDDING_DATE = new Date('2026-08-20T13:20:00')

function getTimeLeft() {

    const diff = WEDDING_DATE - new Date()

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
    }
}

function Hourglass({ className }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2h12M6 22h12M6 2c0 5 5 6 6 10-1 4-6 5-6 10M18 2c0 5-5 6-6 10 1 4 6 5 6 10" />
        </svg>
    )
}


export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const units = [
        { label: 'дней', value: timeLeft.days },
        { label: 'часов', value: timeLeft.hours },
        { label: 'минут', value: timeLeft.minutes },
        { label: 'секунд', value: timeLeft.seconds }
    ]

    return (
        <section id='countdown' className='relative min-h-[100vh] 
                                                                    pt-16 pb-32 flex items-center justify-center 
                                                                    bg-stone-50 select-none'>

        <div className='absolute inset-0 flex items-center justify-center 
                                    opacity-[0.04] pointer-events-none'>

            <span className='font-tdm text-[40vw] text-stone-900 leading-none'>
                ЯК
            </span>
        </div>

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className='relative z-10 flex flex-col items-center text-center gap-8'
        >
            <motion.div variants={item} className='text-stone-300 mb-3'>
                <Hourglass className='w-8 h-8' />
            </motion.div>

            <motion.p
                variants={item}
                className='text-stone-500 text-sm tracking-[0.2em] uppercase font-tr pb-4' 
            >
                Обратный отсчёт до события
            </motion.p>

            <motion.div
                variants={item}
                className='grid grid-cols-4 gap-3 md:gap-6 '
            >
                {units.map((unit) => (
                    <div key={unit.label} className='flex flex-col items-center'>


                        <motion.span
                            key={unit.value}
                            initial={{ scale: 1.10, opacity: 0.7 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className='font-tl text-4xl md:text-6xl text-stone-900 tabular-nums'
                        >
                            {String(unit.value).padStart(2, '0')}
                        </motion.span>


                        <span className='text-xs font-tm md:text-sm text-stone-400 mt-2 uppercase tracking-wide'>
                            {unit.label}
                        </span>
                    </div>
                ))}
            </motion.div>
            

        </motion.div>

        <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className='absolute bottom-20 left-0 right-0 z-10 
                                    flex flex-col items-center gap-4'
        >
            <span className='w-16 h-px bg-stone-300' />

            <p className='font-tdm text-2xl md:text-3xl text-stone-600 lg:text-3xl lg:mb-8 2xl:mb-16'>
                20.08.2026 
            </p>

            
        </motion.div>

        

        <div className='absolute bottom-0 left-0 right-0 overflow-hidden leading-none'>
            <svg viewBox="0 0 1440 100" className='w-full h-w text-rose-50 block' fill="currentColor">
                <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
            </svg>
        </div>

    </section>
    )
}