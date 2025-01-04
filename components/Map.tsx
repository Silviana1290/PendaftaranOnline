'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  selectedTypes: string[]
}

// More comprehensive mock data for healthcare facilities
const facilities = [
  // Puskesmas
  { id: 1, type: 'puskesmas', lat: -7.2575, lng: 112.7521, name: 'Puskesmas Peneleh' },
  { id: 2, type: 'puskesmas', lat: -7.2490, lng: 112.7358, name: 'Puskesmas Ketabang' },
  { id: 3, type: 'puskesmas', lat: -7.2657, lng: 112.7425, name: 'Puskesmas Gundih' },
  // Pustu
  { id: 4, type: 'pustu', lat: -7.2890, lng: 112.7358, name: 'Pustu Wonokromo' },
  { id: 5, type: 'pustu', lat: -7.2764, lng: 112.7478, name: 'Pustu Jagir' },
  // Klinik
  { id: 6, type: 'klinik', lat: -7.2657, lng: 112.7525, name: 'Klinik Medika' },
  { id: 7, type: 'klinik', lat: -7.2564, lng: 112.7478, name: 'Klinik Sehat' },
  // Rumah Sakit
  { id: 8, type: 'rumahsakit', lat: -7.2764, lng: 112.7378, name: 'RSUD Dr. Soetomo' },
  { id: 9, type: 'rumahsakit', lat: -7.2464, lng: 112.7578, name: 'RS Siloam' },
  // Add more facilities as needed
]

export default function Map({ selectedTypes }: MapProps) {
  useEffect(() => {
    // Initialize map
    const map = L.map('map', {
      zoomControl: false,
      center: [-7.2575, 112.7521],
      zoom: 13,
      minZoom: 11,
      maxZoom: 18
    })

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    // Add zoom control to top-left position
    L.control.zoom({
      position: 'topleft'
    }).addTo(map)

    // Add scale control
    L.control.scale({
      position: 'bottomleft',
      imperial: false
    }).addTo(map)

    // Function to get marker color based on facility type
    const getMarkerColor = (type: string) => {
      const colors = {
        puskesmas: '#4A90E2', // Blue
        pustu: '#4A90E2',     // Blue
        klinik: '#F5A623',    // Orange/Yellow
        rumahsakit: '#F5A623', // Orange/Yellow
        laboratorium: '#F5A623', // Orange/Yellow
        apotek: '#F5A623'      // Orange/Yellow
      }
      return colors[type as keyof typeof colors] || '#F5A623'
    }

    // Add markers for selected facility types
    facilities
      .filter(facility => selectedTypes.includes(facility.type))
      .forEach(facility => {
        const markerColor = getMarkerColor(facility.type)

        const icon = L.divIcon({
          className: 'custom-div-icon',
          html: `
            <div style="
              background-color: ${markerColor};
              width: 24px;
              height: 24px;
              border-radius: 50%;
              border: 2px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
              position: relative;
            ">
              <div style="
                position: absolute;
                bottom: -4px;
                left: 50%;
                transform: translateX(-50%) rotate(45deg);
                width: 8px;
                height: 8px;
                background-color: ${markerColor};
                border-right: 2px solid white;
                border-bottom: 2px solid white;
              "></div>
            </div>
          `,
          iconSize: [24, 32],
          iconAnchor: [12, 32],
          popupAnchor: [0, -32]
        })

        const marker = L.marker([facility.lat, facility.lng], { icon })
          .bindPopup(`
            <div class="p-2">
              <h3 class="font-bold">${facility.name}</h3>
              <p class="text-sm text-gray-600">${facility.type.toUpperCase()}</p>
            </div>
          `)
          .addTo(map)

        // Add hover effect
        marker.on('mouseover', function() {
          this.openPopup()
        })
        marker.on('mouseout', function() {
          this.closePopup()
        })
      })

    // Add district boundaries (simplified example)
    fetch('/api/district-boundaries')
      .then(response => response.json())
      .then(data => {
        L.geoJSON(data, {
          style: {
            color: '#666',
            weight: 1,
            fillOpacity: 0,
          }
        }).addTo(map)
      })
      .catch(error => console.error('Error loading district boundaries:', error))

    // Cleanup
    return () => {
      map.remove()
    }
  }, [selectedTypes])

  return (
    <div id="map" className="h-[600px] w-full" />
  )
}

