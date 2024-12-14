import { FcGoogle} from "react-icons/fc"
import { FaGithub} from "react-icons/fa"
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {z} from "zod";

import { Button } from "@/components/ui/button";
import {Card, CardHeader, CardContent, CardTitle, CardDescription} from "@/components/ui/card"
import { DottedSaperator } from "@/components/ui/dotted-separator";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import Link from "next/link";


const formSchema = z.object({
    name: z.string().trim().min(1,"Required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimum of 8 characters are required"),
    confPassword: z.string().min(8, "Minimum of 8 characters are required")
}).refine((data) => data.password === data.confPassword, {
    message: "Passwords don't match",
    path: ["confPassword"],
});


export const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confPassword: ""
        }
    });


    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({values})
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Hello There!
                </CardTitle>
                <CardDescription>
                    By signing up, you agree to our{" "}
                    <Link href="/privacy">
                        <span className="text-blue-700"> Privacy Policy</span>
                    </Link> {" "}
                    and {" "}
                    <Link href="/tos" className="text-blue-700">Terms of Service</Link>
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSaperator/>
            </div>
            <CardContent className="p-3">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="name"
                                            placeholder="Enter username"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Enter email address"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Enter password"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="confPassword"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Confirm password"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button variant="primary" className="w-full">
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <DottedSaperator/>
            </div>
            <CardContent className="p-3">
                <Button variant="secondary" className="w-full">
                    <FcGoogle className="mr-2 size-5"/>
                    Sign Up with Google 
                </Button>
                <Button variant="secondary" className="w-full mt-2">
                    <FaGithub className="mr-2 size-5"/>
                    Sign Up with Github 
                </Button>
            </CardContent>
        </Card>
    );
};