const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t">
      <p className="text-center text-xs text-black">
        {currentYear} Copyright &copy; | All Right Reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
