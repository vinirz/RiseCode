import Airtable from "airtable"
import { SHA256 } from 'crypto-js'
import { toast } from "react-toastify";
import axios from 'axios';

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

export async function UpdateUser(name, mail, password, pic){    
  var picture

  if(typeof(pic) != 'object'){
    picture = auth.picture
  }else{
    picture = await uploadImage(pic)
  }

  const newInfos = {
    name: name,
    email: mail,
    password: password ? SHA256(password).toString() : auth.password,
    picture: picture,
  }

  base('Users').select({
    filterByFormula: `email='${auth.email}'`
  }).firstPage(async(err, records) => {
    if(err){
      console.log(err)
    }

    if(records.length > 0){
      const userInfo = records[0].fields
      const currentInfos = {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        picture: userInfo.picture,
      }
  
      var isEqual = JSON.stringify(currentInfos) === JSON.stringify(newInfos)

      console.log(JSON.stringify(currentInfos))
      console.log(JSON.stringify(newInfos))

      if (isEqual){
        toast('Seus dados já estão atualizados  :)')
      }else{
        await records[0].updateFields(newInfos)
        toast('Seus dados foram atualizados  :)')
        localStorage.setItem('user', JSON.stringify(newInfos))
        window.location.reload()
      }
    }

  })

}

export async function UploadVideo({title, description, video}){
  try{
    const movie = await uploadImage(video)

    await base('Videos').create(
        {
            title: title,
            description : description,
            url: movie,
            channel: JSON.stringify(
                {
                  name: auth.name,
                  picture: auth.picture
                }
            ),
            views: 0,
        }
    ) 

    toast('Video Enviado!')

  }catch{(erro)=> console.log(erro)}

  window.location.reload()
}


export const uploadImage = async (imageFile) => {
  
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append('upload_preset', 'kfvueasz');

  var extention = imageFile.name.split(".")[1]

  var url

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dl2gm82cl/${extention == 'mp4' ? 'video' : 'image'}/upload`,
      formData
    );

    const imageUrl = response.data.secure_url;
    url = imageUrl

  } catch (error) {
    console.error(error);
  }

  return(url)
};

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

