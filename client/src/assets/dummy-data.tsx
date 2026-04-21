import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'rag & drop your assets. We auto-optimmize formats and sizes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optimized models deliever output in seconds with great fidelity.'
    },
    
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with shot-form, socila-ready videos.'
    }
];

export const plansData = [ 
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25,
        features: [
            '25 Credits',
            'Standard Quality',
            'No watermark',
            'slower generation speed',
            'Email support' 
        ]
    },
    { 
        id: 'pro',
        name: 'pro',
        price: '$29',
        desc: 'Creators & small Teams',
        credits: 80,
        features: [
            '80 Credits',
            'HD quality',
            'No watermark',
            'video generation',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'ultra',
        price: '$99',
        desc: 'Scale across teams and agencies',
        credits: 300,
        features: [
            '300 Credits',
            'FHD quality',
            'No watermark',
            'Fast geneartion speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'how does the AI generation work?',
        answer: 'AI generation works by using advanced machine learning models trained on vast amounts of data. These models understand patterns in text, images, and videos, allowing them to create new content based on your input. '
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes. You fully own the images generated using your inputs on our platform. You can use them for commercial, marketing, and branding purposes without restrictions.'
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes, you can cancel your subscription anytime. There are no long-term commitments or hidden fees.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We support popular image formats like JPG, PNG, and WEBP.You can also add text prompts and product details to guide the AI generation process.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];