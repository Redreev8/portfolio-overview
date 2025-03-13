import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'

interface useVirtualListProps<T extends HTMLElement, A> {
    initial: Array<A>
    ref: RefObject<T | null>
    heightRow: number
    columns?: { [key: number]: number }
}

const useVirtualList = <T extends HTMLElement, A>({
    initial = [],
    ref,
    columns = { 360: 1 },
    heightRow,
}: useVirtualListProps<T, A>) => {
    const [visibleRows, setVisibleRows] = useState<number>(0)
    const [position, setPosition] = useState<number>(0)
    const [numberColumns, setNumberColumns] = useState<number>(1)
    const [virtualArr, setVirtualArr] = useState<A[]>([])
    const parentRef = useRef<HTMLElement>(null)
    const handelScroll = () => {
        const active =
            Math.floor(parentRef.current!.scrollTop / heightRow) * numberColumns
        setPosition(
            Math.min(
                Math.ceil(
                    initial.length -
                        visibleRows * (numberColumns - 2) * numberColumns,
                ),
                active < 0 ? 0 : active,
            ),
        )
    }
    const handelResize = () => {
        const widths = Object.keys(columns)
        for (let i = 0; i < widths.length; i++) {
            const w = widths[i]
            if (document.body.clientWidth <= +w) break
            setNumberColumns(columns[+w])
        }
    }
    useEffect(() => {
        console.log(numberColumns)
    }, [numberColumns])
    useLayoutEffect(() => {
        if (!ref.current) return
        parentRef.current = ref.current.parentElement as HTMLElement
        const parentHeight = parentRef.current.offsetHeight
        parentRef.current.addEventListener('scroll', handelScroll)
        setVisibleRows(Math.ceil(parentHeight / heightRow) + 2)
        handelResize()
        window.addEventListener('resize', handelResize)
        return () => {
            window.removeEventListener('resize', handelResize)
        }
    }, [initial])

    const getTopHeight = () => {
        return heightRow * (position / numberColumns)
    }

    const getBottomHeight = () => {
        const rowsNotVisible =
            initial.length / numberColumns -
            (position / numberColumns + heightRow)
        return rowsNotVisible * heightRow
    }

    useEffect(() => {
        setVirtualArr(() =>
            initial.slice(position, position + visibleRows * numberColumns),
        )
    }, [position, visibleRows, initial])

    return {
        getTopHeight,
        getBottomHeight,
        visibleRows,
        virtualArr,
    }
}

export default useVirtualList
