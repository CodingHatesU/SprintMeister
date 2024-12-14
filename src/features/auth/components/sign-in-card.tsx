import { FcGoogle} from "react-icons/fc"
import { FaGithub} from "react-icons/fa"

import { Button } from "@/components/ui/button";
import {Card, CardHeader, CardContent, CardTitle} from "@/components/ui/card"
import { DottedSaperator } from "@/components/ui/dotted-separator";
import { Input } from "@/components/ui/input";


export const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome Back!
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSaperator/>
            </div>
            <CardContent className="p-7">
                <form className="space-y-4 ">
                    <Input
                        required
                        type="email"
                        value={""}
                        onChange={() => {}}
                        placeholder="Enter email address"
                        disabled={false}
                    />
                    <Input
                        required
                        type="password"
                        value={""}
                        onChange={() => {}}
                        placeholder="Enter password"
                        disabled={false}
                        min = {8}
                        max = {20}
                    />
                    <Button variant="primary" className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSaperator/>
            </div>
            <CardContent className="p-7">
                <Button variant="secondary" className="w-full">
                    <FcGoogle className="mr-2 size-5"/>
                    Login with Google 
                </Button>
                <Button variant="secondary" className="w-full mt-2">
                    <FaGithub className="mr-2 size-5"/>
                    Login with Github 
                </Button>
            </CardContent>
        </Card>
    );
};