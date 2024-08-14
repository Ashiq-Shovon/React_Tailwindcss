export function createConnection(serverUrl, roomId) {
    
    return {
        connect() {
            console.log(`conecting to ${roomId} room at ${serverUrl}...`)
        },
        disconnect() {
            console.log(`disconnecting to ${roomId} room at ${serverUrl}...`)
        }
    }
}