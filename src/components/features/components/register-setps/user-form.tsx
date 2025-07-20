import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../../../../lib/schemas/register-form-schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import MessageFeedback from "@/components/custom/messsgg-feedback";
import { Trans, useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface Step1FormProps {
  onSubmit: (data: z.infer<typeof step1Schema>) => void;
  defaultValues?: z.infer<typeof step1Schema>;
}

const Step1Form = ({ onSubmit, defaultValues }: Step1FormProps) => {
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: defaultValues || {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  return (
    <div className="">
      {/* Welcom massage */}
      <h2 className=" laptop-lg:mb-10 mb-5 flex flex-col items-center justify-center font-baloo font-normal space-y-1 text-2xl leading-[140%] tracking-none capitalize ">
        <span className="text-base">{t("hey-there")}</span>

        <span className="text-[35px] laptop-lg:text-[48px] font-extrabold">{t("welcom-back")}</span>
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 laptop-lg:space-y-4 grow border flex  flex-col items-center justify-strat  border-light-gray/10 rounded-[50px] max-h-[480px] overflow-y-auto p-3"
        >
          <h3 className="laptop-sm:mb-2 laptop-lg:mb-6 text-center font-baloo text-xl laptop-lg:text-2xl font-extrabold tracking-none leading-[140%] capitalize">
            {t("register")}
          </h3>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">{t("first-name-label")}</FormLabel>
                <FormControl>
                  <Input
                    className="w-[300px] h-10  laptop-lg:h-12  laptop-sm:h-9 rounded-2xl border px-4 py-2"
                    placeholder={t("first-name-placeholder")}
                    {...field}
                  />
                </FormControl>
                <MessageFeedback messageKey={form.formState.errors.firstName?.message} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">{t("last-name-label")}</FormLabel>
                <FormControl>
                  <Input
                    className="w-[300px] h-10  laptop-lg:h-12  rounded-2xl border px-4 py-2"
                    placeholder={t("last-name-placeholder")}
                    {...field}
                  />
                </FormControl>
                <MessageFeedback messageKey={form.formState.errors.lastName?.message} />{" "}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">{t("email-label")}</FormLabel>
                <FormControl>
                  <Input
                    className="w-[300px] h-10  laptop-lg:h-12  rounded-2xl border px-4 py-2"
                    type="email"
                    placeholder={t("email-placeholder")}
                    {...field}
                  />
                </FormControl>
                <MessageFeedback messageKey={form.formState.errors.email?.message} />{" "}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">{t("passwrod-label")}</FormLabel>
                <FormControl>
                  <Input
                    className="w-[300px] h-10  laptop-lg:h-12  rounded-2xl border px-4 py-2"
                    type="password"
                    placeholder={t("passwrod-placeholder")}
                    {...field}
                  />
                </FormControl>
                <MessageFeedback messageKey={form.formState.errors.password?.message} />{" "}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">{t("confirm-password-label")}</FormLabel>
                <FormControl>
                  <Input
                    className="w-[300px] h-10  laptop-lg:h-12  rounded-2xl border mb-3 px-4 py-2"
                    type="password"
                    placeholder={t("confirm-password-placeholder")}
                    {...field}
                  />
                </FormControl>
                <MessageFeedback messageKey={form.formState.errors.rePassword?.message} />{" "}
              </FormItem>
            )}
          />
          <NavLink
            to={"/forget-password"}
            className={
              "underline self-end font-baloo font-bold leading-[140%] tracking-none text-base text-end text-flame "
            }
          >
            {t("forgot-password")}
          </NavLink>
          <Button
            className="md:w-[300px] w-full block  rounded-full  laptop-lg:h-10  bg-flame "
            type="submit"
          >
            {t("register")}
          </Button>
          <p>
            <Trans
              i18nKey="have-account"
              components={{
                1: <NavLink to={"/login"} className="text-flame" />,
              }}
            />
          </p>
        </form>
      </Form>
    </div>
  );
};

export default Step1Form;
