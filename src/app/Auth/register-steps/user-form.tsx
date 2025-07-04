import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function UserForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepasword, setShowRepassword] = useState(false);

  const { t } = useTranslation();
  const { control } = useFormContext();

  return (
    <div className="md:min-w[400px] xl:w-[486px]  border border-light-gray rounded-[50px] flex flex-col items-center justify-center p-10">
      <h3 className=" mb-4 text-center font-baloo text-2xl font-extrabold tracking-none leading-[140%] capitalize">
        Register
      </h3>
      <div className="w-80 space-y-3.5">
        {" "}
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">First Name</FormLabel>
              <FormControl>
                <div className="flex items-center w-full mb-4 rounded-full px-4 border border-muted-white py-2  h-12">
                  <User className="w-5" />
                  <Input
                    className="focus:ring-0 focus-visible:ring-0 border-none"
                    autoComplete="given-name"
                    placeholder="First Name"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Last Name</FormLabel>
              <FormControl>
                <div className="flex items-center w-full mb-4 rounded-full px-4 border border-muted-white py-2  h-12">
                  <User className="w-5" />
                  <Input
                    className="focus:ring-0 focus-visible:ring-0 border-none"
                    autoComplete="given-name"
                    placeholder="Last Name"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <div className="flex items-center w-full mb-4 rounded-full px-4 border border-muted-white py-2  h-12">
                  <Mail className="w-5" />
                  <Input
                    type="email"
                    className="focus:ring-0 focus-visible:ring-0 border-none"
                    autoComplete="email"
                    placeholder="Email"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Password</FormLabel>
              <FormControl>
                <div className="w-full  flex items-center  rounded-full px-4 border border-[#D9D9D9] py-2  h-12">
                  <Lock className="w-5" />
                  <Input
                    autoComplete="current-password"
                    className="focus:ring-0 focus-visible:ring-0 border-none"
                    placeholder="Password"
                    type={!showPassword ? "password" : "text"}
                    {...field}
                  />
                  {!showPassword ? (
                    <Eye
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Password Conformation</FormLabel>
              <FormControl>
                <div className="w-full  flex items-center  rounded-full px-4 border border-[#D9D9D9] py-2  h-12">
                  <Lock className="w-5" />
                  <Input
                    autoComplete="current-password"
                    className="focus:ring-0 focus-visible:ring-0 border-none"
                    placeholder="Password conformation"
                    type={!showRepasword ? "password" : "text"}
                    {...field}
                  />
                  {!showPassword ? (
                    <Eye
                      onClick={() => setShowRepassword(!showRepasword)}
                      className="cursor-pointer "
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setShowRepassword(!showRepasword)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-80 h-10 rounded-3xl bg-flame" type="submit">
          Next
        </Button>
        <p className="text-center">
          <Trans
            i18nKey="have-account"
            components={{
              1: <NavLink to={"/login"} className="text-flame" />,
            }}
          />
        </p>
      </div>
    </div>
  );
}
