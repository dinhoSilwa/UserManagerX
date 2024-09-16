import { model, Schema, type Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  whatsapp: number;
  email: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    whatsapp: { type: Number, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUser>("Users", userSchema);
