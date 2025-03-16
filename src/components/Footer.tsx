import datita from "./data";

const Footer = () => {
    const { body } = datita.footer
    return (
      <footer className="bg-gray-900 border-t border-pink-800/20  flex items-center w-full h-12 bottom-0 left-0 z-50 shadow-lg">
        <div className="mx-auto text-center text-gray-100">
          <p className="text-base">{body}</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;