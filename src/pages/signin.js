import Head from "next/head";
import { Inter } from "next/font/google";
import Input from "@/components/inputs/Input";
import BtnFull from "@/components/buttons/BtnFull";
import Image from "next/image";
import Link from "next/link";
import SocialLoginBtn from "@/components/buttons/SocialLoginBtn";
const inter = Inter({ subsets: ["latin"] });
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";

export default function Signin() {
    return (
        <div className={`${inter.className} bg-gray-300`}>
            <Head>
                <title>Sign In Page | Beekolpo</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-primary-light py-8">
                <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="text-center">
                        <h2 className="uppercase text-2xl font-bold text-center">
                            welcome to
                            <span className="text-primary"> beekolpo</span>
                        </h2>
                        <p className="w-4/6 mx-auto mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Omnis repellendus soluta saepe quae unde
                            suscipit.
                        </p>
                        <div className="w-4/6 mx-auto">
                            <Image
                                src="/assets/images/login/login.png"
                                alt="Login Register"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="form bg-white rounded-md p-8">
                        <p className="w-4/6 mx-auto">
                            Do not have any Account?
                            <Link
                                href="/signup"
                                className="text-primary font-semibold ml-2"
                            >
                                Sign Up
                            </Link>
                        </p>
                        <div className="w-4/6 mx-auto">
                            <form action="">
                                <h2 className="font-semibold text-2xl my-4">
                                    Lgoin your account
                                </h2>
                                <Input
                                    name="email"
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="Ex: manikmia.dev@gmail.com"
                                    label="Your Email"
                                />
                                <Input
                                    name="password"
                                    id="password"
                                    type="password"
                                    required
                                    placeholder="********"
                                    label="Your Password"
                                />
                                <BtnFull text="Sign In" />
                            </form>
                            <div className="relative text-center my-4   before:content-[''] before:border-b-2 before:w-32 before:block before:border-gray before:absolute before:top-3 before:left-0 after:content-[''] after:border-b-2 after:w-32 bafterefore:block after:border-gray after:absolute after:top-3 after:right-0">
                                Or login with
                            </div>
                            <div className="w-4/6 mx-auto flex justify-between">
                                <SocialLoginBtn
                                    link="#"
                                    icon={<BsFacebook />}
                                />
                                <SocialLoginBtn link="#" icon={<BsGoogle />} />
                                <SocialLoginBtn link="#" icon={<BsApple />} />
                            </div>
                            <p className="text-center mt-4 text-sm">
                                By login, Agree to our terms of condtions and
                                Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
