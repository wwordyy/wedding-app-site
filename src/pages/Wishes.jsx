import { motion } from 'framer-motion'
import { container, item } from '../utils/animations'

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

export default function Wishes() {

    return (
        <section id='wishes' className='relative min-h-full flex items-center justify-center 
                                            px-6 lg:px-16 py-20 
                                            bg-rose-50
                                            overflow-hidden select-none'>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className='relative z-10 w-full max-w-md lg:max-w-screen
                                    flex flex-col items-center text-center gap-6
                                    lg:flex-row lg:items-start lg:text-left lg:gap-0'
            >

                <div className='lg:sticky lg:top-32 lg:w-[45%] md:sticky
                                        flex flex-col items-center lg:items-start gap-6 lg:gap-0'>
                    <motion.h2
                        variants={item}
                        className='font-tdm text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                                            text-stone-900 leading-tight '
                    >
                        НАШИ ТЁПЛЫЕ <br className='hidden lg:block'/>ПОЖЕЛАНИЯ
                    </motion.h2>

                    <motion.div variants={item} className='text-rose-300 w-32'>
                        <Branch className='w-full h-auto' />
                    </motion.div>
                </div>


                <div className='flex flex-col items-center lg:items-start text-center lg:text-left 
                                        gap-6 lg:w-[55%]'>

                    <motion.p
                        variants={item}
                        className='text-stone-600 text-base leading-relaxed lg:leading-loose font-tr 
                                            lg:text-md xl:text-lg 2xl:text-xl'
                    >
                        Дорогие гости, для нас самым ценным подарком будет ваше 
                        присутствие рядом с нами в этот день.
                    </motion.p>

                    <motion.p
                        variants={item}
                        className='text-stone-600 text-base leading-relaxed lg:leading-loose font-tr 
                                            lg:text-md xl:text-lg 2xl:text-xl'
                    >
                        Мы верим, что забота о близких начинается с малого — и что 
                        каждый добрый жест, даже самый небольшой, способен изменить 
                        чей-то день к лучшему.
                    </motion.p>

                    <motion.p
                        variants={item}
                        className='text-stone-600 text-base leading-relaxed lg:leading-loose font-tr 
                                            lg:text-md xl:text-lg 2xl:text-xl'
                    >
                        Если вам хочется подарить нам цветы — пусть их красота 
                        продолжит жить дальше: вместо букета мы будем бесконечно 
                        благодарны за пожертвование в фонд хосписа{' '}
                        <motion.a 
                            href="https://mayak.help/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className='inline-block text-stone-900 underline underline-offset-4 
                                                decoration-rose-300 hover:decoration-rose-500
                                                transition-colors font-tr lg:text-md xl:text-lg 2xl:text-xl'
                        >
                            «Маяк»
                        </motion.a>
                        . Так один красивый жест подарит тепло сразу многим.
                    </motion.p>

                    <motion.p
                        variants={item}
                        className='text-stone-600 text-base leading-relaxed lg:leading-loose font-tr 
                                            lg:text-md xl:text-lg 2xl:text-xl'
                    >
                        Спасибо, что вы с нами не только в моменты радости, 
                        но и готовы разделить эту маленькую традицию доброты — 
                        для нас это значит очень многое.
                    </motion.p>

                    <motion.a
                        variants={item}
                        href="https://mayak.help/donate/?comment=%D1%81%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0+%D0%B4%D0%B5%D1%82%D1%8F%D0%BC"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: "#fdb8c1" }}
                        whileTap={{ scale: 0.90, backgroundColor: "#f7b9c1", color: "#ffffff" }}    
                        transition={{ type: "spring", stiffness: 900, damping: 17 }}
                        className='mt-4 px-8 py-4 lg:px-10 lg:py-4 rounded-full 
                                border border-rose-300 bg-rose-100
                                text-stone-900 text-sm lg:text-base tracking-wide uppercase font-tr select-none
                                cursor-pointer lg:text-sm xl:text-md 2xl:text-lg'
                    >
                        Сделать пожертвование
                    </motion.a>

                    <motion.div variants={item} className='text-rose-300 w-32 rotate-180 lg:self-start'>
                        <Branch className='w-full h-auto' />
                    </motion.div>

                    <motion.p
                        variants={item}
                        className='text-stone-500 text-sm lg:text-base italic'
                    >
                        Спасибо, что разделяете с нами эту доброту 🤍
                    </motion.p>

                </div>

            </motion.div>

        </section>
    )
}