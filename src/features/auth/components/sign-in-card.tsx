"use client";

import { FcGoogle} from "react-icons/fc";
import { FaGithub} from "react-icons/fa";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {z} from "zod";
import { Button } from "@/components/ui/button";
import {Card, CardHeader, CardContent, CardTitle} from "@/components/ui/card";
import { DottedSaperator } from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { loginSchema } from "../schemas";
import { useLogin } from "../api/use-login";



export const SignInCard = () => {
    const {mutate, isPending} = useLogin();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        mutate({    json: values});
    }

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
            <CardContent className="p-3">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
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
                        <Button disabled={isPending} variant="primary" className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <DottedSaperator/>
            </div>
            <CardContent className="p-3">
                <Button disabled={isPending} variant="secondary" className="w-full">
                    <FcGoogle className="mr-2 size-5"/>
                    Login with Google 
                </Button>
                <Button disabled={isPending} variant="secondary" className="w-full mt-2">
                    <FaGithub className="mr-2 size-5"/>
                    Login with Github 
                </Button>
            </CardContent>
            <div className="px-7">
                <DottedSaperator/>
            </div>
            <CardContent className="p-3 flex justify-center items-center">
                <p>
                    Don't have an account? {" "}
                    <Link href="/sign-up" className="text-blue-700">Sign Up</Link>
                </p>
            </CardContent>
        </Card>
    );
};