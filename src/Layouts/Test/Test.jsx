import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";

const Test = () => {
    const [ph, setPh] = useState("");
    const handleSubmit = async () => {
        console.log(ph);
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, "+8801763628770", recaptcha);
            console.log(confirmation);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="bg-[#eee] pb-28">
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="flex justify-center items-center pt-24 pb-8">
                        <img className="w-1/2" src="https://i.ibb.co/jzHTFgY/logodark.png" alt="Logo" />
                    </div>
                    <div className="col-span-2 flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-bold mt-8 mb-4">Welcome</h2>
                        <div className="flex flex-col justify-center items-center">
                            <PhoneInput
                                country={'bd'}
                                value={ph}
                                onChange={setPh}
                            />
                            <button onClick={handleSubmit}>Submit</button>
                            <div id="recaptcha" className="mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
