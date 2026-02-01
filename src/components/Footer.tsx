import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Abhishek B. All rights reserved.</p>
        <div className="flex items-center gap-4">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
