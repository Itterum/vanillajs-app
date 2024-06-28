export const modals = () => {
    const hadler = (targetSelector, modalSelector, closeSelector) => {
        const target = document.querySelectorAll(targetSelector),
            modal = document.querySelector(modalSelector),
            close = modal.querySelector(closeSelector)

        target.forEach(element => {
            element.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault()
                }

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
            })
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.style.overflow = ''
        })

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none'
                document.body.style.overflow = ''
            }
        })
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
        }, time)
    }

    hadler('.popup_engineer_btn', '.popup_engineer', '.popup_close')
    hadler('.phone_link', '.popup', '.popup_close')
    showModalByTime('.popup', 60000)
}
