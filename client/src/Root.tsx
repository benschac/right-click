import React from "react";
import css from "./Root.module.css";

export const Root: React.FC = () => {
  return (
    <>
      <header>
        <nav className={css.header}>
          <h5 className={css.app}>app</h5>
          <h5 className={css.about}>about</h5>
          <h5 className={css.github}>github</h5>
        </nav>
      </header>
      <main>
        <section className={css.hero}>
          <div className={css.contentWrapper}>
            <h1>Right Click</h1>
            <h2>Store your wallets NFT metadata with a single click.</h2>
          </div>
          <div className={css.heroImg}>
            <img src="https://lh3.googleusercontent.com/K6uP6w4kuAT3P1kbO7gcD0sxzwk2FoZA3FWETC4DSspPKkBZa3ct7N_eMsJzUQiE8xkltJ-9Ds7dzz0XpdaB-qvRf6K6xHRUdZ7k=w600" />
          </div>
        </section>
      </main>
    </>
  );
};
