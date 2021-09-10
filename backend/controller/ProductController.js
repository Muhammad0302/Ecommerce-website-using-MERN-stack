import product from '../model/productSchema.js'

const getAllProducts = async(request,response) =>{
    try{
     const validateProduct = await product.find({});
     response.json(validateProduct)

    }catch(error){
        console.log("Error while getting data from db: ",error.message)
    }
}

export default getAllProducts