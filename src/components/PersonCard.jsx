import { motion } from 'framer-motion'
import { item } from '../utils/animations'
import { TelegramIcon, PhoneIcon } from './Icons'


export function PersonCard({ photo, name, telegram, phone }) {
    return (
        <motion.div
            variants={item}
            className={`flex flex-col items-center gap-4 
                                    bg-white rounded-2xl shadow-lg
                                    px-6 py-8 w-full max-w-xs
                                    border ${name === 'Ярослав' ? 'border-blue-200' : 'border-rose-200'}`}
        >
            <div className={`p-1.5 rounded-full border ${name === 'Ярослав' ? 'border-blue-200' : 'border-rose-200'}`}>
                <img 
                    src={photo} 
                    alt={name} 
                    className='w-28 h-28 rounded-full object-cover 
                                            border-2 border-white'
                />
            </div>

            <span className='font-tr text-2xl text-stone-900'>
                {name}
            </span>

            <div className='flex items-center gap-5'>
                {telegram && (
                    <motion.a
                        href={telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className='text-stone-400 hover:text-rose-400 transition-colors'
                    >
                        <TelegramIcon className='w-6 h-6' />
                    </motion.a>
                )}
                
                {phone && (
                    <motion.a
                        href={`tel:${phone}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className='text-stone-400 hover:text-rose-400 transition-colors'
                    >
                        <PhoneIcon className='w-6 h-6' />
                    </motion.a>
                )}

            </div>
        </motion.div>
    )
}