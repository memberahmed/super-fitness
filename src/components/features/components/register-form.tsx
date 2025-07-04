import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useTranslation } from "react-i18next";
import FormWrapper from "./register-steps/form-wraper";
import UserForm from "./register-steps/user-form";
import AuthStaticSection from "@/components/common/auth-static-section/auth-static-sec";
import AgeCarousel from "./register-steps/age-from";
``;

const genders = ["male", "female"] as const;
const goals = [
  "Gain weight",
  "Lose weight",
  "Get fitter",
  "Gain more flexible",
  "learn the basics",
] as const;
const activityLevels = ["level1", "level2", "level3", "level4", "level5"] as const;

export default function Register() {
  // ...

  const { t } = useTranslation();
  const formSchema = z
    .object({
      firstName: z
        .string({ required_error: "First name is required" })
        .min(1, { message: "First name is required" })
        .min(2, {
          message: "First name must be at least 2 characters.",
        })
        .max(50, { message: "First name must be at most 50 characters." }),
      lastName: z
        .string({ required_error: "last name is required" })
        .min(1, { message: "last name is required" })
        .min(2, {
          message: "last name must be at least 2 characters.",
        })
        .max(50, {
          message: "last name must be at most 50 characters.",
        }),
      email: z.string({ required_error: "email is required" }).email({
        message: "Please enter a valid email address.",
      }),
      password: z
        .string({ required_error: "Password is required" })
        .min(1, { message: "Password is required" })
        .min(2, {
          message: "password must be at least 2 characters.",
        })
        .max(50, { message: "Password must be at most 50 characters." })
        .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
          message: t("password-regex"),
        }),
      rePassword: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      gender: z.enum(genders, { required_error: "Please select a gender" }),
      height: z
        .number()
        .min(50, { message: "Height must be at least 50 cm." })
        .max(250, { message: "Height must be at most 250 cm." }),
      weight: z
        .number()
        .min(20, { message: "Weight must be at least 20 kg." })
        .max(600, { message: "Weight must be at most 600 kg." }),
      age: z
        .number()
        .min(1, { message: "Age must be at leat 1 year." })
        .max(125, { message: "Age must be at most 125 years." }),
      goal: z.enum(goals, { required_error: "Please select a goal" }),
      activityLevel: z.enum(activityLevels, { required_error: "Please select an activity level" }),
    })
    .refine((data) => data.password === data.rePassword, {
      message: "Passwords do not match",
      path: ["rePassword"],
    });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      gender: undefined,
      height: 0,
      weight: 0,
      age: 0,
      goal: "Gain weight",
      activityLevel: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Right section */}
        <div>
          <AuthStaticSection />
        </div>

        {/* left section */}
        <div className="flex flex-col items-center justify-center">
          {/* Register form */}
          <div className=" flex justify-center">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormWrapper title="Crate your accout">
                  <UserForm />
                </FormWrapper>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
}
