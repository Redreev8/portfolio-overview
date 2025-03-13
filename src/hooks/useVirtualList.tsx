import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'

interface useVirtualListProps<T extends HTMLElement, A> {
    arr: Array<A>
    ref: RefObject<T | null>
    heightRow: number
    columns?: number
}

const useVirtualList = <T extends HTMLElement, A>({
    arr = [],
    ref,
    columns = 1,
    heightRow,
}: useVirtualListProps<T, A>) => {
    const [visibleRows, setVisibleRows] = useState<number>(0)
    const [position, setPosition] = useState<number>(0)
    const [virtualArr, setVirtualArr] = useState<A[]>([])
    const parentRef = useRef<HTMLElement>(null)
    const handelScroll = () => {
        const active =
            Math.floor(parentRef.current!.scrollTop / heightRow) * columns
        setPosition(
            Math.min(
                Math.ceil(arr.length - visibleRows * (columns - 2) * columns),
                active < 0 ? 0 : active,
            ),
        )
    }
    useLayoutEffect(() => {
        if (!ref.current) return
        parentRef.current = ref.current.parentElement as HTMLElement
        const parentHeight = parentRef.current.offsetHeight
        parentRef.current.addEventListener('scroll', handelScroll)
        setVisibleRows(Math.ceil(parentHeight / heightRow) + 2)

        return () => {
            setVisibleRows(0)
        }
    }, [])

    const getTopHeight = () => {
        return heightRow * (position / columns)
    }

    const getBottomHeight = () => {
        const rowsNotVisible =
            arr.length / columns - (position / columns + heightRow)
        return rowsNotVisible * heightRow
    }

    useEffect(() => {
        setVirtualArr(arr.slice(position, position + visibleRows * columns))
    }, [position, visibleRows])

    return {
        getTopHeight,
        getBottomHeight,
        visibleRows,
        virtualArr,
    }
}

export default useVirtualList
