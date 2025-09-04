import cloudinary from "./cloudinary.js";

export const UploadImage = async (file , folder)=> {
    if(!file || !file.buffer){
        throw new Error("No file buffer found");
    }

    return new Promise((resolve , reject)=> {
        cloudinary.uploader.upload_stream(
            {
                resource_type: "auto",
                folder
            },
            async (error , result) => {
                if(error){
                    return reject(error.message);
                }
                return resolve(result);
            }
        )
    })
}