import { lazy, Suspense, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { useTranslation } from "react-i18next";
import { baseRegisterSchema } from "@/lib/schemas/register-form-schema";
import useRegister from "../hooks/use-register";
import FormWrapper from "../../components/register-setps/form-wraper";
import AuthStaticSection from "@/components/common/auth-static-section/auth-static-sec";

const Step1Form = lazy(() => import("@/components/features/components/register-setps/user-form"));
const Step2Form = lazy(() => import("@/components/features/components/register-setps/gender-form"));
const Step3Form = lazy(() => import("@/components/features/components/register-setps/age-form"));
const Step4Form = lazy(() => import("@/components/features/components/register-setps/weight-form"));
const Step5Form = lazy(() => import("@/components/features/components/register-setps/height-form"));
const Step6Form = lazy(() => import("@/components/features/components/register-setps/goal-form"));
const Step7Form = lazy(
  () => import("@/components/features/components/register-setps/activity-level-form")
);

const MultiStepForm = () => {
  const { t } = useTranslation();
  const { register, error, isPending } = useRegister();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    gender: undefined,
    height: 150,
    age: 25,
    weight: 35,
    goal: undefined,
    activityLevel: undefined,
  });

  // Handle navigation to the next step
  const handleNext = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  // Handle navigation to the previous step
  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  // Handle final submission
  const handleSubmit = async (data: any) => {
    const finalData = { ...formData, ...data };
    const finalResult = baseRegisterSchema.safeParse(finalData);
    if (!finalResult.success) {
      console.log("Final validation failed:", finalResult.error);
    } else {
      console.log("Final form data:", finalResult.data);
      register(finalResult.data);
    }
  };

  // Progress bar
  const currentStep = 1;
  const totalSteps = 6;
  const progressPercentage = (currentStep / totalSteps) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="flex flex-col md:flex-row justify-center max-h-screen items-center">
      <div>
        <AuthStaticSection />
      </div>
      <div className="min-w-[480px]   mx-auto p-4">
        {error && <p className="text-red-500 p-3 font-semibold">{error.error}</p>}
        <Card className="border-none">
          <CardContent>
            {/* Progress Bar */}
            {step >= 2 && (
              <div className="  flex items-center justify-center p-2">
                <div className="relative w-16 h-w-16">
                  {/* SVG Progress Circle */}
                  <svg className="w-full h-full transform  -rotate-90" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle cx="50" cy="50" r="45" strokeWidth="6" fill="none" opacity="0.3" />

                    {/* Progress Arc */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#FF4100"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                    />
                  </svg>

                  {/* Step Counter */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-baloo font-medium  text-2xl tracking-none  text-white">
                      {step - 1}/{totalSteps}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Render the appropriate step */}
            <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
              {step === 1 && <Step1Form onSubmit={handleNext} defaultValues={formData} />}
              {step === 2 && (
                <FormWrapper
                  title={t("auth-form-title")}
                  description={t("we-need-to-know-your-gender")}
                >
                  <Step2Form
                    onSubmit={handleNext}
                    onBack={handleBack}
                    defaultValues={
                      formData.gender !== undefined ? { gender: formData.gender } : undefined
                    }
                  />
                </FormWrapper>
              )}
              {step === 3 && (
                <Step3Form onSubmit={handleNext} onBack={handleBack} defaultValues={formData} />
              )}
              {step === 4 && (
                <Step4Form onSubmit={handleNext} onBack={handleBack} defaultValues={formData} />
              )}
              {step === 5 && (
                <Step5Form onSubmit={handleNext} onBack={handleBack} defaultValues={formData} />
              )}
              {step === 6 && (
                <Step6Form
                  onSubmit={handleNext}
                  onBack={handleBack}
                  defaultValues={formData.goal !== undefined ? { goal: formData.goal } : undefined}
                />
              )}
              {step === 7 && (
                <Step7Form
                  onSubmit={handleSubmit}
                  onBack={handleBack}
                  isPending={isPending}
                  defaultValues={
                    formData.activityLevel !== undefined
                      ? { activityLevel: formData.activityLevel }
                      : undefined
                  }
                />
              )}
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MultiStepForm;
