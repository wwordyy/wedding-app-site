import { motion } from 'framer-motion'
import loveIcon from '../assets/images/love-icon.png'
import { container, item } from '../utils/animations'


export default function Welcome() {

    return (
        <section id='welcome' className='
                                            relative flex 
                                            px-6 pt-24 pb-32 bg-stone-100 overflow-hidden
                                            select-none '>

  
            <div className='absolute top-10 right-10 opacity-100'>
                <img 
                    src={loveIcon} 
                    alt="Love icon" 
                    className='w-20 h-20 
                                        md:w-25 md:h-25
                                        lg:w-15 lg:h-15 lg:mb-2
                                        object-cover opacity-10'
                />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col lg:flex-row w-full gap-12 lg:gap-0 
                                    "
            >

                <motion.div
                    variants={item}
                    className="lg:w-[45%]"
                >
                    <h2 className="font-tdm text-4xl text-stone-900 uppercase  
                                                md:text-5xl md:w-max    
                                                lg:text-6xl lg:w-max lg:text-right lg:px-16 
                                                xl:text-7xl 
                                                2xl:px-42
                                                2xl:text-8xl md:leading-none" >

                        Дорогие <br  />гости
                    </h2>

                </motion.div>

                <div className="flex flex-col gap-6 lg:w-[55%] lg:gap-4 ">

                    <motion.span
                        variants={item}
                        className="w-16 h-px bg-stone-300"
                    />

                    <motion.p
                        variants={item}
                        className="text-stone-600 text-base leading-relaxed font-tr lg:text-md xl:text-lg 2xl:text-xl"
                    >
                        Вы получили это сообщение, а значит, мы спешим поделиться
                        с вами радостной новостью – у нас скоро свадьба!
                    </motion.p>

                    <motion.p
                        variants={item}
                        className="text-stone-600 text-base leading-relaxed font-tr lg:text-md xl:text-lg 2xl:text-xl"
                    >
                        Мы приглашаем вас разделить с нами радость этого особенного
                        события и стать частью нашей семейной истории.
                    </motion.p>

                    <motion.p
                        variants={item}
                        className="text-stone-600 text-base leading-relaxed font-tr lg:text-md xl:text-lg 2xl:text-xl"
                    >
                        Ваше присутствие сделает наш день еще более значимым и незабываемым.
                    </motion.p>
    
                </div>

            </motion.div>

        </section>
    )
}