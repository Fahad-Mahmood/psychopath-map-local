'use client'
import dynamic from 'next/dynamic'

const MapPage = () => {
    const MapContainer = dynamic(
        () => import('@/src/app/map/map.container'),
        { ssr: false }
    )
    return (
      <MapContainer />
    )
}

export default MapPage
