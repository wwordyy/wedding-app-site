import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 300 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button')) setIsHovering(true)
        }
        const handleMouseOut = (e) => {
            if (e.target.closest('a, button')) setIsHovering(false)
        }

        window.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    return (
        <motion.div
            className='fixed top-0 left-0 rounded-full 
                                bg-rose-300 pointer-events-none z-[9999] 
                                hidden lg:block'
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: '-50%',
                translateY: '-50%',

            }}
            animate={{
                width: isHovering ? 30 : 20,
                height: isHovering ? 30 : 20,
                opacity: isHovering ? 0.5 : 0.8,
            }}
            transition={{ duration: 0.2 }}
        />
    )
}

export default CustomCursor