import axios from 'axios'

export const getLocation = async () => {
  try {
    if ('geolocation' in navigator) {
      window.navigator.geolocation.getCurrentPosition(position => {
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`,
          )
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('country', data.countryCode)
            localStorage.setItem('city', data.principalSubdivision)
            return
          })
        })
      }
      if (!localStorage.getItem('country')) {
        const result = await axios.get('/api/country')
        localStorage.setItem('country', result.data.country)
        localStorage.setItem('city', result.data.city)
      }
      
    } catch (error) {
    console.log(error);
    return error
  }
}
