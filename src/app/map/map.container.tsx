'use client'
import { useEffect } from 'react'
import MapView from './map.view'

declare global {
    interface Window {
        ReactNativeWebView?: {
            postMessage: (message: string) => void
        }
    }
}

const MapContainer = () => {
    useEffect(() => {
        const sendReadyMessage = () => {
            if (window.ReactNativeWebView) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'webview_ready'
                }))
            } else {
                console.log('ReactNativeWebView not available, retrying...')
                setTimeout(sendReadyMessage, 100)
            }
        }

        // Immediate attempt
        sendReadyMessage()
        
        // On DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', sendReadyMessage)
        }
        
        // On window load
        window.addEventListener('load', sendReadyMessage)
        
        return () => {
            document.removeEventListener('DOMContentLoaded', sendReadyMessage)
            window.removeEventListener('load', sendReadyMessage)
        }
    }, [])

    return (
        <MapView />
    )
}

export default MapContainer
