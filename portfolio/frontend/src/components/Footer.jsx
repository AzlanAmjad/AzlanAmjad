function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black flex justify-center items-center p-20">
            <p>&copy; {currentYear} Azlan Amjad. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
