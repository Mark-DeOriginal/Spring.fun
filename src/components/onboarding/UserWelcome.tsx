export const UserWelcome = () => {
  return (
    <section className="user-welcome-section">
      <div className="header">
        <h1 className="text-xl tablet-sm:text-2xl font-extrabold tracking-tight mb-4 text-center text-springBlueLight-400 dark:text-offWhite">
          Welcome to Spring
        </h1>
      </div>

      <div className="body text-springBlueLight-400 dark:text-springBlueLight-100 text-center font-medium">
        <p>
          Now, you can execute trades almost instantly without network delay.
        </p>
        <p>
          Create TON jettons that are instantly tradeable using our virtual
          liquidity.
        </p>
        <p>
          Trade without fear of getting rugged. <br />
          Thanks to our Anti-rug System.
        </p>
        <p>Again, you're welcome to Spring.</p>
      </div>
    </section>
  );
};

export default UserWelcome;
