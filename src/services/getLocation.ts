import axios from 'axios'

export const getLocation = async () => {
  try {
    // Check if geolocation data is already stored
    const storedCountry = localStorage.getItem('country')
    const storedCity = localStorage.getItem('city')
    if (storedCountry && storedCity) {
      return { country: storedCountry, city: storedCity }
    } else {
      throw new Error('Unable to fetch location data')
    }
  } catch (error) {
    console.error('Error fetching location data:', error)
    throw error // Rethrow or handle as needed
  }
}
