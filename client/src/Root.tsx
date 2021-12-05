import React from "react";
import css from "./Root.module.css";

export const Root: React.FC = () => {
  return (
    <>
      <header>
        <nav className={css.header}>
          <span className={css.logo}>right-click</span>
          {/* Play about with grid a little more */}
          <div className={css.app}>app</div>
          <div className={css.about}>about</div>
          <div className={css.github}>github</div>
        </nav>
      </header>
      <main>
        <h1>Right Click</h1>
      </main>
    </>
  );
};
