import classes from './Header.module.css';

const MainPageHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.bg}></div>
      <div className={classes.card}>
        <h1 className="heading-serif">New to Udemy? Lucky you.</h1>
        <p>Courses start at E£169.99. Get your new-student offer before it expires.</p>
      </div>
    </header>
  );
};

export default MainPageHeader;
