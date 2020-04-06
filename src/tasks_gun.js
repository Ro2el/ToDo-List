import Gun from 'gun/gun'
import { uuidv4 } from './users'


const gun = Gun()
export const testgun = () => {


// gun.get('users').get('6fbad12a-b615-4d3e-9332-c86387702952').put( { name: 'Esraa', id:'6fbad12a-b615-4d3e-9332-c86387702952'})
//     gun.get('users').get('5sdad12a-b615-4d3e-9332-c86387702952').put( { name: 'Ahmed', id:'5sdad12a-b615-4d3e-9332-c86387702952'  })
//     gun.get('users').get('7ddad12a-b615-4d3e-9332-c86387702952').put( { name: 'Yousef', id:'7ddad12a-b615-4d3e-9332-c86387702952'  })
}

export const FromGunToRedux=(dispatchSetdata,app)=>{
    gun.get(app).map().on(data=>{
        delete data._
        dispatchSetdata(app,data)
    })
}

export const addDataToGun=(app,FormData)=>{
    // console.log(data,'hhhhhhhhhhhh')

    gun.get(app).set({...FormData,id:uuidv4()})
}