const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t py-4">
      <p className="text-center text-xs text-black">
        {currentYear} Copyright &copy; All Right Reserved | Created By
        <a
          href="https://github.com/boolean405"
          target="_blank"
          className="text-blue-500 hover:text-black dark:hover:text-white"
        >
          &nbsp;Boolean
        </a>
      </p>
    </footer>
  );
};

export default Footer;
