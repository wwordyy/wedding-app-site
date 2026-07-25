import { motion } from 'framer-motion'
import brideImg from '../assets/images/bride.jpg'
import groomImg from '../assets/images/groom.jpg'
import { container, item } from '../utils/animations'
import { PersonCard } from '../components/PersonCard' 

function Branch({ className }) {
    return (
        <svg 
            viewBox="0 0 200 60" 
            className={className}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M10 30 C 60 10, 140 10, 190 30" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round"
            />
            <ellipse cx="45" cy="18" rx="6" ry="3" fill="currentColor" transform="rotate(-20 45 18)" />
            <ellipse cx="75" cy="12" rx="6" ry="3" fill="currentColor" transform="rotate(-10 75 12)" />
            <ellipse cx="105" cy="10" rx="6" ry="3" fill="currentColor" transform="rotate(5 105 10)" />
            <ellipse cx="135" cy="13" rx="6" ry="3" fill="currentColor" transform="rotate(15 135 13)" />
            <ellipse cx="160" cy="20" rx="6" ry="3" fill="currentColor" transform="rotate(25 160 20)" />
        </svg>
    )
}

export default function Contacts() {

    return (
        <section id='contacts' className='relative min-h-[100dvh] flex items-center justify-center 
                                            px-6 py-20 bg-stone-50 overflow-hidden 
                                            lg:min-h-full lg:py-40 md:py-30 2xl:py-48 select-none'>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className='relative z-10 flex flex-col items-center text-center gap-8 2xl:gap-12 w-full'
            >

                <motion.h2
                    variants={item}
                    className='font-tdm text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                                        text-stone-900'
                >
                    СВЯЗАТЬСЯ С НАМИ
                </motion.h2>

                <motion.div variants={item} className='text-rose-300 w-32 2xl:w-40'>
                    <Branch className='w-full h-auto' />
                </motion.div>

                <div className='flex flex-col items-center gap-6 2xl:gap-10 w-full
                                            lg:flex-row lg:justify-center
                                            md:flex-row md:justify-center'>

                    <PersonCard 
                        photo={groomImg}
                        name="Ярослав"
                        telegram="https://t.me/+79154155276"
                        phone="+7 (915) 415-52-76"
                    />

                    <motion.span
                        variants={item}
                        className='font-tr text-3xl 2xl:text-4xl text-rose-300'
                    >
                        &
                    </motion.span>

                    <PersonCard 
                        photo={brideImg}
                        name="Ксения"
                        telegram="https://t.me/seniyaleto15"
                        phone="+7 (996) 361-33-23"
                    />
                </div>

            </motion.div>

        </section>
    )
}