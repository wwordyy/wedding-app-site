import { motion } from 'framer-motion'
import { TelegramIcon } from '../components/Icons'
import { container, item } from '../utils/animations'

export default function TelegramGroup() {

    return (
        <section
            id="group"
            className="relative flex items-center justify-center px-6 
                                    md:px-10 lg:px-16 py-20 md:py-28 
                                    2xl:py-36 overflow-hidden select-none"
        >

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="relative z-10 w-full max-w-md md:max-w-lg 2xl:max-w-xl mx-auto
                                    flex flex-col items-center text-center gap-5 2xl:gap-7"
            >

                <motion.div 
                    variants={item}
                    className="w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 rounded-full 
                                        border border-rose-300 
                                        flex items-center justify-center
                                        text-rose-400"
                >
                    <TelegramIcon className="w-7 h-7 md:w-8 md:h-8 2xl:w-10 2xl:h-10" />
                </motion.div>

                <motion.h2
                    variants={item}
                    className="font-tdm text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl
                                        text-stone-900 tracking-wide leading-tight"
                >
                    НАША ОБЩАЯ ГРУППА
                </motion.h2>

                <motion.span
                    variants={item}
                    className="w-16 2xl:w-20 h-px bg-stone-300"
                />

                <motion.p
                    variants={item}
                    className="text-stone-600 text-base md:text-lg leading-relaxed font-tr max-w-sm 2xl:max-w-md
                                        lg:text-md xl:text-lg 2xl:text-xl"
                >
                    Мы создали общий чат, чтобы делиться важными деталями,
                    держать вас в курсе всех изменений и просто оставаться
                    на связи в преддверии нашего большого дня.
                </motion.p>

                <motion.a
                    variants={item}
                    href="https://t.me/+pqgR4U9xYRE0ZjJi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="mt-2 2xl:mt-4 flex items-center gap-2
                                        px-8 py-4 2xl:px-10 2xl:py-5 rounded-full
                                        bg-stone-900 text-white
                                        text-sm 2xl:text-base uppercase tracking-wide font-tr
                                        cursor-pointer"
                >
                    <TelegramIcon className="w-5 h-5 2xl:w-6 2xl:h-6" />
                    Присоединиться к группе
                </motion.a>

            </motion.div>

        </section>
    )
}