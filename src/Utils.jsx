import Airtable from "airtable"
import { SHA256 } from 'crypto-js'
import { toast } from "react-toastify";

const userInfo = localStorage.getItem('user')

export const User = {
    getUser(){
        return JSON.parse(localStorage.getItem('user'))
    },

    isAuthenticated(){
        return userInfo ? true : false
    }
}

const auth = User.getUser()

const base = new Airtable({ apiKey: 'keymZeqCHaPAJcsxx' }).base('appWSfcNcPT8jjHkD');

export function Logar(mail, pass){
    return new Promise ((resolve, reject) => (base('Users')
    .select({
      filterByFormula: `AND(password = '${SHA256(pass).toString()}', email = '${mail}')`,
      maxRecords: 1,
    })
    .firstPage((error, records) => {
        if (error) {
            console.error(error);
            reject(error);
            return;
          }

        if (records.length > 0) {
            const user = records[0].fields;
            resolve({
              email: user.email,
              name: user.name,
              password: user.password,
              picture: user.picture,
            })

        } else {
            toast('Algo deu errado, tente novamente')
        }
    })))

}

export async function Cadastrar(mail, name, pass, pic){
    var picture
  
    if(typeof(pic) != 'object'){
      picture = "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
    }else{
      picture = await uploadImage(pic)
    }
    return new Promise ((resolve, reject) => (
      base('Users').select({
        filterByFormula: `email='${mail}'`
      }).firstPage((err, records) => {
        if(err){
          console.log(err)
          reject(err)
        }
  
        if(records.length > 0){
          toast('Email já cadastrado')
        } else {
          base('Users').create(
            {
              email: mail,
              name: name,
              password: SHA256(pass).toString(),
              picture: picture,
              favorites: '[]',
              subs: '[]'
            }
          )
            resolve(true)
        }
      })
    ))
      
  }

  export function addFavorite(favorite){
    base('Users').select({
      filterByFormula: `email='${auth.email}'`
    }).firstPage((err, records) => {
      if(err){
        console.log(err)
      }
  
      const currentFavorites = records[0].fields.favorites
  
      if(currentFavorites){
        const newFavorites = JSON.parse(currentFavorites)
        newFavorites.push(favorite)
  
        console.log(newFavorites)
  
        records[0].updateFields({
          favorites: JSON.stringify(newFavorites)
        })
  
      } else {
        records[0].updateFields({
          favorites: JSON.stringify(favorite)
        })
      }
    })
  }
  
  export function removeFavorite(favorite){
    base('Users').select({
      filterByFormula: `email='${auth.email}'`
    }).firstPage((err, records) => {
      if(err){
        console.log(err)
      }
  
      const currentFavorites = records[0].fields.favorites
  
      if(currentFavorites){
        const newFavorites = JSON.parse(currentFavorites)
        newFavorites.pop(favorite)
  
        records[0].updateFields({
          favorites: JSON.stringify(newFavorites)
        })
  
      }
    })
  }