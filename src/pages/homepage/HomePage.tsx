import { HeroBanner } from "@components/herobanner/HeroBanner";
import { MainLayout } from "@templates/mainlayout/MainLayout";

export function HomePage() {
  return (
    <MainLayout>
      <HeroBanner
        title="Welcome"
        subtitle="The goal of this portfolio is to give you an overview of my competences and skills."
        backgroundImageUrl="/img/background.jpg"
        fullScreen={true}
      />
    </MainLayout>
  );
}
