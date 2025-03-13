const socket = <T>(
    assets: string[],
    cbMessage: (e: MessageEvent<T>) => void,
) => {
    const targets = assets
        .map((el) => {
            return `${el.toLocaleLowerCase()}@ticker`
        }, '')
        .join('/')
    const url = `wss://stream.binance.com:9443/stream?streams=${targets}`
    const socket = new WebSocket(url)
    socket.onopen = () => {
        console.log('connect')
    }
    socket.onmessage = (e) => {
        cbMessage(e)
    }

    return () => socket.close()
}

export default socket
