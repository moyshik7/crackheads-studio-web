"use client";

import { ArrowUp, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from "next/image"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <Image className="w-20 h-20 rounded-full" src="/images/logo.png" height="256" width="256" alt="Crackheads Studio Logo" />
              </div>
              <span className="font-bold text-lg">
                Crackheads Studio
              </span>
            </div>
            <div className="mt-12 w-full flex flex-row justify-start">
              <a href="#" className="mr-5 ml-5">
                <Facebook />
              </a>
              <a href="https://instagram.com/crackheads.studio" target="_blank" className="mr-5 ml-5">
                <Instagram />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Affilate</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ecommerce</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">SAAS</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hosting</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cyber Security</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Web Dev</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">App Dev</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">SEO</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">UI / UX</a></li>
              </ul>
            </div>
          </div>
          
          <Button 
            onClick={scrollToTop}
            variant="outline" 
            size="icon" 
            className="rounded-full mt-8 md:mt-0"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;