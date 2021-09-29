import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <main className="p-4 lg:p-18">
      <div className="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">
        <NavBar />
      </div>
    </main>
  );
};

export default Home;
