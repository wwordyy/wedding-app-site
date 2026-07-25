import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon } from './Icons'

export default function MobileMenu({ isOpen, onClose, links, onLinkClick }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className='fixed inset-0 bg-black/20 z-40 '
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className='fixed top-0 right-0 bottom-0 w-72 max-w-[80%] 
                                                bg-black/90 z-50 flex flex-col
                                                px-8 py-8 gap-2'
                    >
                        <motion.button
                            onClick={onClose}
                            whileTap={{ scale: 0.85, rotate: 90 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className='self-end p-2 mb-6 rounded-full 
                                                    bg-white/10 border border-white/20 
                                                    text-stone-100 
                                                    hover:bg-white/20 transition-colors'
                        >
                            <CloseIcon className='w-5 h-5' />
                        </motion.button>

                        {links.map((link) => (
                            <motion.button
                                key={link.href}
                                onClick={() => onLinkClick(link.href)}
                                whileTap={{ scale: 0.95, x: 4 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className='text-left font-tm text-xl text-stone-100 
                                                        py-3 px-2 -mx-2 rounded-lg border-b border-stone-100
                                                        hover:text-rose-400 transition-colors'
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}