function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-30 bg-black/80 flex justify-center items-center p-20">
            <p className="text-white/80">
                &copy; {currentYear} Azlan Amjad. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
