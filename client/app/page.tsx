import Header from "./component/layout/header";
import HomeLayout from "./component/home/homelayout";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#17191c]">
      <Header/>
      <HomeLayout />
    </main>

    
  );
}
