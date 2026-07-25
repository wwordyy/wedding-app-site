


export const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.30
        }
    }
}

export const item = {
    hidden: {
        opacity: 0,
        y: 40
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}