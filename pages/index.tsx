import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="mx-64">
      <div className="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 rounded-box">
        <div className="col-span-3 flex justify-center">
          <img
            className="max-w-xs"
            src="https://www.arweave.net/Xq6KF3E4VKpRAlT7bZJELNLC35eC25AseDYsxq0fT-k?ext=gif"
            alt="Cryptolizer Genesis #0"
          />
        </div>
        <div className="col-span-3 ">
          <h1># Cryptolizers</h1>
          <br />
          <h2>## What are we</h2>
          <br />
          <p>
            Cryptolizers are the first nft that has interactible utility. Simple
            connect your computers sound or audius playlist and watch your nft
            come alive
          </p>
          <br />
          <p>Share your custom link with your friends to show off.</p>
          <br />
          <h2>## Try it out</h2>
          <br />
          <p>
            You can go to /design to play around with different color pallets
            and share them in the discord.
          </p>
          <br />
          <h2>## Contact</h2>
          <br />
          <p>Follow me on twitter @gagebachik</p>
          <br />
        </div>
      </div>
    </main>
  );
};

export default Home;
