import{Schema,model}from "mongoose";


const taskSchema= new Schema(
    {
        nombre: { type: String, required: true, trim: true, unique: true },
        preferencias: {type: String, trim: true},
        correo: {type: String},
        comentarios:{type: String, trim: true}
      },
      {
        timestamps: true,
        versionKey: false,
      }
    );
  

 export default model("Task",taskSchema)   

   