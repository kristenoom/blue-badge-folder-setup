function Footer() {
    const today = new Date();
    const copyrightYear = today.getFullYear();
    
    return (
        <div>&copy; {copyrightYear} EFA
        <br /><br />
        </div>
    );
}

export default Footer;