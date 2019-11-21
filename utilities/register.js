const axios = require('axios')

async function main () {
  try {
    let client = await axios.post('https://weirder.earth/api/v1/apps', {
      client_name: 'slastodon',
      redirect_uris: 'http://localhost:8080/auth',
      scopes: 'read write follow'
    })

    console.log(client)
  } catch (error) {
    console.log(error)
  }
}

main()
