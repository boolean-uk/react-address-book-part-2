function MainContent({ title, children }) {
  return (
    <main className="main-content">
      <h2>{title}</h2>
      {children}
    </main>
  );
}

export default MainContent;
