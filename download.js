import fetch from 'node-fetch'
 import { promises as fsPromises } from 'fs'
import { response } from 'express'

fetch('https://catfact.ninja/breeds?limit=40')
.then(response => response.json())
.then(data => {
    fsPromises.writeFile("./catBreeds.json", JSON.stringify(data))
})
.catch(error=> console.error(error))