const Footer = () => {
  return (
    <footer className="text-light py-3 fw-bold" style={{ backgroundColor: '#060c42' }}>
      <div className="container d-flex flex-column align-items-center text-center">
        <div className="d-flex flex-column flex-sm-row gap-3 mb-2">
          <a href="#privacy" className="text-decoration-none text-light">Privacy Policy</a>
          <a href="#refund" className="text-decoration-none text-light">Refund Policy</a>
        </div>
        <p className="mb-0">My Store © 2024</p>
      </div>
    </footer>
  );
};
