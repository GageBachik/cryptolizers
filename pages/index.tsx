import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="mx-64 sm:mx-16">
      <div className="grid place-items-center h-screen">
        <div className="col-span-3">
          <img
            className="max-w-xs"
            src="https://www.arweave.net/Xq6KF3E4VKpRAlT7bZJELNLC35eC25AseDYsxq0fT-k?ext=gif"
            alt="Cryptolizer Genesis #0"
          />
        </div>
        <div className="col-span-3 prose">
          <h1>
            <span className="text-purple-600">#</span> Cryptolizers
          </h1>
          <h2>
            <span className="text-purple-600">##</span> What are we
          </h2>
          <p>
            Cryptolizers are the first nft that has interactible utility. Simple
            connect your computers sound or audius playlist and watch your nft
            come alive
          </p>
          <p>Share your custom link with your friends to show off.</p>
          <h2>
            <span className="text-purple-600">##</span> Try it out
          </h2>
          <p>
            You can go to /design to play around with different color pallets
            and share them in the discord.
          </p>
          <h2>
            <span className="text-purple-600">##</span> Contact
          </h2>
          <p>Follow me on twitter @gagebachik</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
