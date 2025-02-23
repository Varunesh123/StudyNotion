import mongoose from "mongoose";
import mailSender from "../utlis/mailSender.js";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5*60
    }
})
async function sendVerificationEmail(email, otp) {
    try {
        const  mailResponse = await mailSender(email, "Verification email from StudyNotion", otp);
        console.log("Email sent Successfully", mailResponse)
    } catch (error) {
        console.log("Error occurred during sending mail", error)
        throw error;
    }
}
otpSchema.pre("save", async function(next) {
    try {
        await sendVerificationEmail(this.email, this.otp);
        next(); // ✅ Call next to proceed with saving the document
    } catch (error) {
        next(error); // ❌ Pass error to stop saving if email fails
    }
});


export default mongoose.model("OTP", otpSchema);