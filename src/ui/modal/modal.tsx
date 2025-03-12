import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import { createPortal } from 'react-dom'

interface ModalContextValue {
    isOpen: boolean
    isRender: boolean
    isHidden: boolean
    setIsRender: Dispatch<SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalContextValue>({
    isOpen: false,
    isRender: false,
    isHidden: false,
    setIsRender: () => {},
})

interface ModalProps {
    children: ReactNode
    to?: Element | DocumentFragment
    isOpen: boolean
}

const Modal: FC<ModalProps> = ({ children, isOpen, to = document.body }) => {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [isRender, setIsRender] = useState<boolean>(false)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            setIsRender(() => true)
        }
        if (!isOpen) {
            document.body.style.overflow = 'auto'
        }
        setIsHidden(() => true)
    }, [isOpen])
    useEffect(() => {
        if (isRender) {
            setTimeout(() => {
                setIsHidden(false)
            }, 100)
        }
    }, [isRender])

    return (
        <ModalContext.Provider
            value={{ isOpen, isHidden, isRender, setIsRender }}
        >
            {isRender && createPortal(children, to)}
        </ModalContext.Provider>
    )
}

export default Modal
