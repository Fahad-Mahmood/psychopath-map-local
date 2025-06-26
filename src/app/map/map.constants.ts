import { LatLngExpression } from 'leaflet'

export interface Marker {
    harvestId: string
    huntAreaId: string
    creatorId: string
    distance: number
    species: {
        name: string
        speciesId: number
    }
    harvestImageUrl: string | null
    harvestDate: string
    harvestPosition: {
        lat: number
        lng: number
    }
    shotPosition: {
        lat: number
        lng: number
    }
    harvestWeight: number
    harvestAge: number
    harvestLength: number
    colour: string
    skinCondition: string
    harvestCondition: string
    shotPlacement: string
    notableDiseases: string
    otherInformation: string
    harvestStory: string
    weapon: string
}


export interface HuntArea {
    huntAreaId: string
    huntAreaType: string
    ownerId: string
    name: string
    access: string
    path: {
        coordinates: LatLngExpression[]
        circle: {
            radius: number
            center: LatLngExpression
        }
    }
}
