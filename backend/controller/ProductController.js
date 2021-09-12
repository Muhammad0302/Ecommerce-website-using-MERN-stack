import product from '../model/productSchema.js'

 export const getAllProducts = async(request,response) =>{
    try{
     const validateProduct = await product.find({});
     response.json(validateProduct)

    }catch(error){
        console.log("Error while getting data from db: ",error.message)
    }
}

export const getProductById= async(request,response) =>{
    try{
     const Getproduct = await product.findOne({'id':request.params.id});
     response.json(Getproduct)

    }catch(error){
        console.log("Error while getting detail of the product: ",error.message)
    }
}