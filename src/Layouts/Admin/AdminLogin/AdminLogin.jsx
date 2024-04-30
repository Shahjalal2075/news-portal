import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Providers/AuthProvider';

const AdminLogin = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                toast("Login Succsessfull.");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1600);
            })
            .catch(error => {
                console.error(error);
                if (error.code === 'auth/user-not-found') {
                    toast('Email does not match.');
                } else if (error.code === 'auth/wrong-password') {
                    toast('Password does not match.');
                } else {
                    toast('Login failed: ' + error.message);
                }
                navigate("/login");
            })
    }

    return (
        <div className=" bg-[#eee] pb-28">
            <div className="container mx-auto">
                <div className="grid grid-cols-1">

                    <div className="flex justify-center items-center pt-24 pb-8">
                        <img className="w-1/2" src="https://i.ibb.co/jzHTFgY/logodark.png" alt="" />
                    </div>
                    <div className=" col-span-2 flex flex-col items-center justify-center">

                        <h2 className="text-4xl font-bold mt-8 mb-4">Welcome</h2>

                        <div className="flex flex-col justify-center items-center">
                            <form onSubmit={handleLogin} className="flex flex-col justify-center items-center" action="">
                                <input className="bg-[#fff] border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Email" type="email" name="email" required />
                                <input className="bg-[#fff] border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Password" type="password" name="password" required />
                                <input className=" cursor-pointer bg-[#017EFF] text-lg rounded-2xl mt-4 text-white px-2 py-1 font-semibold mb-4 w-80" type="submit" value={"Login"} />
                            </form>
                        </div>

                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AdminLogin;