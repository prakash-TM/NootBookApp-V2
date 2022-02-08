import * as Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    userName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    jobDetails: {
        title: { type: String, required: false },
        designation: { type: String, required: false },
        organization: { type: String, required: false },
        isWorking: { type: Boolean, required: true, default: false },
    },
    contactNumber: { type: String, required: true },
    dob: { type: String, required: false },
    gender: { type: String, required: false },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    isVerified: { type: Boolean, required: true, default: false },
    roles: [{
        r_id: { type: String, required: false },
        r_isActive: { type: Boolean, required: true },
    } ], // create assignment, read assignment, delete assignment, update
    group: [{
        g_id: { type: String, required: false },
        g_isActive: { type: Boolean, required: true },
    } ], // admin, students, mentors
    lastActive: { type: String, required: false },
}, { timestamps: true });





const userModel=Mongoose.model("User",userSchema)
export{userModel,userSchema}
/***
 * User Name
 * Name
 * Email
 * Title
 * Phone Number
 * DOB
 * Gender
 * Password
 * isActive
 * Created At
 * Updated At
 * Roles : []
 * Group : []
 * Last Active
 * Created By
 *
 */