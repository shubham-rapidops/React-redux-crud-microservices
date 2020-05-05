const Model = require('./userModel')

module.exports= class Access {

    static getInstance = () => {
        if (this.obj == undefined) {
            this.obj = new Access();
            return this.obj;
        }
        return this.obj;
    }

    findAll = async() =>{
        let data = await Model.find()
        console.log(data)
        return data 
    }

    add = async(values) =>{
       return await Model.create(values)
        
    }

    remove=async(query)=>{
      return Model.findOneAndRemove(query,{ useFindAndModify: false})
      
    }

    update=async(name , newData)=>{
        return await Model.findOneAndUpdate({name:name},newData,{upsert: true ,useFindAndModify: false})
        

    }

   
    
}