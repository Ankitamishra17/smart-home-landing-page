export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-primary/10 mt-0">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-foreground">SmartHome Pro</h3>
          <p className="text-muted-foreground leading-relaxed">
            Making homes intelligent, secure and energy-efficient.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-foreground">Support</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-foreground">Newsletter</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-background border border-primary/20 mb-3 focus:border-primary outline-none"
          />
          <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-12">
        © {new Date().getFullYear()} SmartHome Pro. All rights reserved.
      </p>
    </footer>
  )
}
 
export default Footer