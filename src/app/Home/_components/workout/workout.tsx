import HeadingTitle from "@/components/common/headingTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FullBody from "./_components/full-body";

export default function WorkoutSection() {
  return (
    <>
      <HeadingTitle className="mt-6 text-foreground text-center max-w-[637px] mx-auto">
        Transform your body with our Dynamic
        <span className="text-flame ms-1">upcoming workouts</span>
      </HeadingTitle>

      <Tabs defaultValue="Full Body" className="w-full text-center font-baloo">
        <TabsList>
          <TabsTrigger value="Full Body">Full Body</TabsTrigger>
          <TabsTrigger value="Chest">Chest</TabsTrigger>
          <TabsTrigger value="Arm">Arm</TabsTrigger>
          <TabsTrigger value="Shoulder">Shoulder</TabsTrigger>
          <TabsTrigger value="Back">Back</TabsTrigger>
          <TabsTrigger value="Legs">Legs</TabsTrigger>
          <TabsTrigger value="Stomach">Stomach</TabsTrigger>
        </TabsList>
        <TabsContent value="Full Body">
          <FullBody />
        </TabsContent>
        <TabsContent value="Chest">
          <h3>Chest</h3>
        </TabsContent>
        <TabsContent value="Arm">
          <h3>Arm</h3>
        </TabsContent>
        <TabsContent value="Shoulder">
          <h3>Shoulder</h3>
        </TabsContent>
        <TabsContent value="Back">
          <h3>Back</h3>
        </TabsContent>
        <TabsContent value="Legs">
          <h3>Legs</h3>
        </TabsContent>
        <TabsContent value="Stomach">
          <h3>Stomach</h3>
        </TabsContent>
      </Tabs>
    </>
  );
}
