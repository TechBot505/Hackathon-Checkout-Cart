'use client';

import { useState, useEffect } from 'react';
import { Kanit } from 'next/font/google';
import {
  ShoppingCart,
  Truck,
  CreditCard,
  ArrowRight,
  Box,
  Sparkles,
  AlertCircle,
  Package,
  PackageCheck,
  RefreshCw,
  Plus,
  Minus,
} from 'lucide-react';

const kanit = Kanit({ subsets: ['latin'], weight: '400' });

const availableProducts = [
  { id: '1', name: 'Premium Headphones', price: 299.99, image: 'https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=500&q=80' },
  { id: '2', name: 'Wireless Mouse', price: 79.99, image: 'https://images.unsplash.com/photo-1631749352438-7d576312185d?w=500&q=80' },
  { id: '3', name: 'Mechanical Keyboard', price: 159.99, image: 'https://images.unsplash.com/photo-1606075014584-5ccf554b50db?w=500&q=80' },
  { id: '4', name: 'Gaming Monitor', price: 499.99, image: 'https://images.unsplash.com/flagged/photo-1551954810-43cd6aef5b1f?w=500&q=80' },
];

const offers = [
  { id: 1, name: 'Smartphone', offer: '15% off', image: 'https://images.unsplash.com/photo-1568378711447-f5eef04d85b5?w=500&q=80' },
  { id: 2, name: 'Laptop', offer: 'Free shipping', image: 'https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?w=500&q=80' },
  { id: 3, name: 'Smartwatch', offer: 'Buy one get one 50% off', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
  { id: 4, name: 'Tablet', offer: '$50 off', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80' },
];

const BackgroundIcons = () => {
  const icons = [
    { Icon: Package, size: 40, left: '5%', top: '10%', rotate: 0, animation: 'float', duration: 3, opacity: 0.1 },
    { Icon: Truck, size: 50, left: '15%', top: '30%', rotate: 0, animation: 'rotate', duration: 20, opacity: 0.05 },
    { Icon: PackageCheck, size: 30, left: '25%', top: '50%', rotate: -10, animation: 'pulse', duration: 2, opacity: 0.15 },
    { Icon: Box, size: 35, left: '35%', top: '70%', rotate: 20, animation: 'float', duration: 4, opacity: 0.1 },
    { Icon: CreditCard, size: 45, left: '45%', top: '20%', rotate: -15, animation: 'pulse', duration: 2.5, opacity: 0.2 },
    { Icon: ArrowRight, size: 25, left: '55%', top: '40%', rotate: 45, animation: 'float', duration: 3.5, opacity: 0.05 },
    { Icon: RefreshCw, size: 30, left: '65%', top: '60%', rotate: 0, animation: 'rotate', duration: 25, opacity: 0.1 },
    { Icon: Package, size: 35, left: '75%', top: '80%', rotate: 10, animation: 'pulse', duration: 2, opacity: 0.15 },
    { Icon: Truck, size: 40, left: '85%', top: '25%', rotate: 0, animation: 'rotate', duration: 30, opacity: 0.05 },
    { Icon: Box, size: 50, left: '95%', top: '45%', rotate: 25, animation: 'float', duration: 4.5, opacity: 0.1 },
    { Icon: PackageCheck, size: 35, left: '10%', top: '85%', rotate: -5, animation: 'pulse', duration: 3, opacity: 0.05 },
    { Icon: CreditCard, size: 40, left: '20%', top: '75%', rotate: 15, animation: 'float', duration: 3.5, opacity: 0.15 },
    { Icon: ArrowRight, size: 30, left: '80%', top: '15%', rotate: 90, animation: 'pulse', duration: 2.5, opacity: 0.1 },
    { Icon: RefreshCw, size: 45, left: '90%', top: '55%', rotate: 0, animation: 'rotate', duration: 20, opacity: 0.05 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {icons.map(({ Icon, size, left, top, rotate, animation, duration, opacity }, index) => (
        <div
          key={index}
          className="absolute"
          style={{ left, top }}
        >
          <Icon
            size={size}
            className={`text-[#B88B4A] ${animation}`}
            style={{
              transform: `rotate(${rotate}deg)`,
              animationDuration: `${duration}s`,
              opacity,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 backdrop-blur-lg bg-white/60 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShoppingCart className="text-[#533E2D]" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold text-[#533E2D]">LuxeCart</h1>
        </div>
        <button
          className="bg-[#A27035] cursor-pointer hover:bg-[#533E2D] text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <Sparkles size={16} />
          View Offers
        </button>
      </div>
    </div>
  );
};

const SurveyForm = ({ onClose }: { onClose: () => void }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  interface SurveyFormProps {
    onClose: () => void;
  }

  interface FeedbackData {
    rating: number;
    feedback: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const feedbackData: FeedbackData = { rating, feedback };
    console.log(feedbackData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 animate-fade-in text-center">
        <Sparkles size={60} className="mx-auto text-[#B88B4A] mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-[#242331]/70">Your feedback has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 animate-slide-up relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B88B4A] rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
      
      <h3 className="text-2xl font-bold mb-6 text-center">How was your experience?</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className="cursor-pointer transform transition-transform hover:scale-110"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            >
              <Sparkles 
                size={40} 
                className={`${
                  (hoverRating || rating) >= star 
                    ? 'text-[#B88B4A]' 
                    : 'text-gray-300'
                } transition-colors duration-200`} 
              />
            </div>
          ))}
        </div>
        
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Please share your thoughts about your shopping experience..."
          className="w-full h-32 p-4 border border-[#B88B4A] rounded-lg focus:ring-2 focus:ring-[#533E2D] resize-none"
          required
        ></textarea>
        
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border cursor-pointer border-[#533E2D] text-[#533E2D] rounded-xl hover:bg-[#533E2D] hover:text-white transition-all duration-300"
          >
            Skip
          </button>
          <button
            type="submit"
            className="bg-[#533E2D] cursor-pointer hover:bg-[#A27035] text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#533E2D]/95 text-white py-12 mt-16 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart size={24} />
              <h3 className="text-xl font-bold">LuxeCart</h3>
            </div>
            <p className="text-white/80 mb-4">
              Premium shopping experience with quality products and excellent customer service.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <div key={social} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">
                  {social.charAt(0)}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'About Us', 'Contact', 'FAQ'].map((link) => (
                <li key={link} className="hover:text-[#B88B4A] cursor-pointer transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to receive updates on new products and special promotions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 text-white placeholder-white/60 px-4 py-2 rounded-l-lg flex-1 focus:outline-none focus:bg-white/20"
              />
              <button className="bg-[#B88B4A] cursor-pointer hover:bg-[#A27035] px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/60">
          <p>© {new Date().getFullYear()} LuxeCart. All rights reserved.</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default function ShoppingCartForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cart, setCart] = useState<Array<{ productId: string; quantity: number }>>([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
  });
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
const [showSurvey, setShowSurvey] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowSurvey(true);
      }, 3000);
    }
  }, [showSuccess]);

  const validPromoCodes = {
    DISCOUNT10: 10,
    SAVE20: 20,
  };

  const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];

  const subtotal = cart.reduce((sum, item) => {
    const product = availableProducts.find((p) => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const discount = appliedPromo ? (subtotal * appliedPromo.discount) / 100 : 0;
  const tax = (subtotal - discount) * 0.10;
  const deliveryCharge = 10;
  const total = subtotal - discount + tax + deliveryCharge;

  const addToCart = () => {
    if (!selectedProductId || quantity < 1) return;
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.productId === selectedProductId);
      if (existingItemIndex >= 0) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prevCart, { productId: selectedProductId, quantity }];
      }
    });
    setSelectedProductId('');
    setQuantity(1);
  };

  const incrementQuantity = (productId: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decrementQuantity = (productId: string) => {
    setCart(prevCart => {
      const newCart = prevCart.map(item =>
        item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      return newCart.filter(item => item.quantity > 0);
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.productId !== productId));
  };

  const applyPromoCode = () => {
    const code = promoCode.toUpperCase();
    const discount = validPromoCodes[code as keyof typeof validPromoCodes];
    if (discount) {
      setAppliedPromo({ code, discount });
      setErrors((prev) => ({ ...prev, promo: '' }));
    } else {
      setAppliedPromo(null);
      setErrors((prev) => ({ ...prev, promo: 'Invalid promo code' }));
    }
  };

  const proceedToDelivery = () => {
    if (cart.length === 0) {
      setErrors({ cart: 'Please add at least one product to the cart' });
      return;
    }
    setErrors({});
    setCurrentStep(2);
  };

  const proceedToPayment = () => {
    const requiredFields: (keyof typeof deliveryDetails)[] = ['name', 'street', 'city', 'state', 'zip', 'country', 'phone'];
    const missingFields = requiredFields.filter((field) => !deliveryDetails[field]);
    if (missingFields.length > 0) {
      setErrors({ delivery: 'Please fill out all delivery details' });
      return;
    }
    setErrors({});
    setCurrentStep(3);
  };

  const proceedToPay = () => {
    if (!paymentMethod) {
      setErrors({ payment: 'Please select a payment method' });
      return;
    }
    setErrors({});
    setShowSuccess(true);
  };

  return (
    <div className={`${kanit.className} min-h-screen bg-[#FAFAFF] text-[#242331] relative overflow-hidden`}>
      <Navbar />
      <BackgroundIcons />
      <div className="hidden lg:block absolute top-0 left-0 w-64 h-64 bg-[#B88B4A] rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="hidden lg:block absolute bottom-0 right-0 w-96 h-96 bg-[#533E2D] rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10 mt-16">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#533E2D] tracking-tight">Shopping Cart</h1>
          <p className="text-xl text-[#242331]/80">Select products, enter delivery details, and complete your purchase</p>
        </div>

        <div className="relative mb-16 pt-8">
          <div className="absolute left-0 right-0 top-1/2 h-2 bg-[#B88B4A] rounded-full -translate-y-1/2">
            <div
              className="h-full bg-[#533E2D] rounded-full transition-all duration-500"
              style={{ width: `${(currentStep - 1) * 50}%` }}
            />
          </div>
          <div className="relative z-10 flex justify-between">
            {[
              { id: 1, name: 'Cart', icon: ShoppingCart },
              { id: 2, name: 'Delivery', icon: Truck },
              { id: 3, name: 'Payment', icon: CreditCard },
            ].map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer ${
                    currentStep >= step.id ? 'bg-[#533E2D] text-white' : 'bg-[#B88B4A] text-[#533E2D]'
                  } transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                >
                  <step.icon size={28} />
                </div>
                <span className="mt-4 text-sm font-medium">{step.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 animate-slide-up relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B88B4A] rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />

          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="bg-[#FAFAFF] p-8 rounded-xl animate-fade-in shadow-lg border border-[#B88B4A]">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
                  <Box className="text-[#533E2D]" />
                  Add Product to Cart
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Product</label>
                    <select
                      suppressHydrationWarning={true}
                      value={selectedProductId}
                      onChange={(e) => setSelectedProductId(e.target.value)}
                      className="w-full bg-white border border-[#B88B4A] rounded-lg p-3 text-[#242331] cursor-pointer focus:ring-2 focus:ring-[#533E2D] transition-all"
                    >
                      <option value="">Choose a product</option>
                      {availableProducts.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} - ${p.price.toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Quantity</label>
                    <input
                      suppressHydrationWarning={true}
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      className="w-full bg-white border border-[#B88B4A] rounded-lg p-3 focus:ring-2 focus:ring-[#533E2D]"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      suppressHydrationWarning={true}
                      onClick={addToCart}
                      className="bg-[#A27035] hover:bg-[#533E2D] text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {cart.length > 0 && (
                <div className="bg-[#FAFAFF] p-8 rounded-xl animate-fade-in shadow-lg border border-[#B88B4A]">
                  <h3 className="text-xl font-semibold mb-6">Your Cart</h3>
                  <div className="space-y-4">
                    {cart.map((item, index) => {
                      const product = availableProducts.find((p) => p.id === item.productId);
                      return product ? (
                        <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                          <div className="flex items-center gap-4">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                            <p className="font-medium">{product.name}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <button onClick={() => decrementQuantity(item.productId)} className="text-[#533E2D] hover:text-[#A27035] cursor-pointer"><Minus className='h-4 w-4' /></button>
                              <span>{item.quantity}</span>
                              <button onClick={() => incrementQuantity(item.productId)} className="text-[#533E2D] hover:text-[#A27035] cursor-pointer"><Plus className='h-4 w-4' /></button>
                            </div>
                            <p className="font-semibold">${(product.price * item.quantity).toFixed(2)}</p>
                            <button onClick={() => removeFromCart(item.productId)} className="text-[#533E2D] hover:text-[#A27035] cursor-pointer">Remove</button>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                  <div className="mt-6 p-4 bg-[#533E2D] text-white rounded-lg shadow">
                    <p className="text-xl font-bold">Total: ${subtotal.toFixed(2)}</p>
                  </div>
                </div>
              )}

              {errors.cart && (
                <p className="text-red-500 text-sm animate-bounce flex items-center gap-2">
                  <AlertCircle size={16} />
                  {errors.cart}
                </p>
              )}

              <div className="flex justify-center">
                <button
                  suppressHydrationWarning={true}
                  onClick={proceedToDelivery}
                  className="bg-[#533E2D] hover:bg-[#A27035] text-white px-10 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
                >
                  Proceed to Delivery
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-6">Delivery Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(['name', 'street', 'city', 'state', 'zip', 'country', 'phone'] as (keyof typeof deliveryDetails)[]).map(
                  (field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium mb-2 capitalize">{field}</label>
                      <input
                        suppressHydrationWarning={true}
                        type="text"
                        value={deliveryDetails[field]}
                        onChange={(e) => setDeliveryDetails({ ...deliveryDetails, [field]: e.target.value })}
                        placeholder={`Enter ${field}`}
                        className="w-full bg-white border border-[#B88B4A] rounded-lg p-3 focus:ring-2 focus:ring-[#533E2D]"
                      />
                    </div>
                  )
                )}
              </div>
              {errors.delivery && (
                <p className="text-red-500 text-sm animate-bounce flex items-center gap-2">
                  <AlertCircle size={16} />
                  {errors.delivery}
                </p>
              )}
              <div className="flex justify-center">
                <button
                  suppressHydrationWarning={true}
                  onClick={proceedToPayment}
                  className="bg-[#533E2D] hover:bg-[#A27035] text-white px-10 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
                >
                  Proceed to Payment
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && !showSuccess && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-6">Payment</h3>

              <div className="bg-[#FAFAFF] p-8 rounded-xl shadow-lg border border-[#B88B4A]">
                <h4 className="text-lg font-semibold mb-4">Promo Code</h4>
                <div className="flex gap-4">
                  <input
                    suppressHydrationWarning={true}
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 bg-white border border-[#B88B4A] rounded-lg p-3 focus:ring-2 focus:ring-[#533E2D]"
                  />
                  <button
                    suppressHydrationWarning={true}
                    onClick={applyPromoCode}
                    className="bg-[#A27035] hover:bg-[#533E2D] text-white px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {errors.promo && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} />
                    {errors.promo}
                  </p>
                )}
                {appliedPromo && (
                  <p className="text-green-500 text-sm mt-2">Promo code applied: {appliedPromo.discount}% off</p>
                )}
              </div>

              <div className="bg-[#FAFAFF] p-8 rounded-xl shadow-lg border border-[#B88B4A]">
                <h4 className="text-lg font-semibold mb-4">Bill Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charge</span>
                    <span>${deliveryCharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAFF] p-8 rounded-xl shadow-lg border border-[#B88B4A]">
                <h4 className="text-lg font-semibold mb-4">Payment Method</h4>
                <select
                  suppressHydrationWarning={true}
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full bg-white border border-[#B88B4A] rounded-lg p-3 focus:ring-2 focus:ring-[#533E2D] cursor-pointer"
                >
                  <option value="">Select Payment Method</option>
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
                {errors.payment && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} />
                    {errors.payment}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  suppressHydrationWarning={true}
                  onClick={proceedToPay}
                  className="bg-[#533E2D] hover:bg-[#A27035] text-white px-10 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
                >
                  Proceed to Pay
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          )}

          {showSuccess && (
            <div className="text-center py-12 animate-fade-in">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#B88B4A] blur-xl opacity-50" />
                <Sparkles size={80} className="relative text-[#533E2D]" />
              </div>
              <h2 className="text-3xl font-bold mt-6 mb-3">Order Placed Successfully!</h2>
              <p className="text-[#242331]/70 text-lg">Thank you for your purchase. Your order will be delivered soon.</p>
            </div>
          )}

{showSurvey && (
        <SurveyForm onClose={() => setShowSurvey(false)} />
      )}
        </div>

        <div id="offers-section" className="bg-white rounded-2xl p-8 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B88B4A] rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-3xl font-bold mb-8 text-center text-[#533E2D] relative z-10">Latest Offers</h2>
          <div className="relative">
            <div className="flex gap-6 animate-marquee">
              {[...offers, ...offers].map((offer, index) => (
                <div
                  key={`${offer.id}-${index}`}
                  className="flex-none w-72 p-6 bg-[#FAFAFF] rounded-xl shadow-lg animate-fade-in border border-[#B88B4A] hover:shadow-xl transition-shadow duration-300"
                >
                  <img src={offer.image} alt={offer.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-[#242331]">{offer.name}</h3>
                  <p className="text-[#533E2D] font-medium">{offer.offer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .float {
          animation: float infinite;
        }
        .rotate {
          animation: rotate linear infinite;
        }
        .pulse {
          animation: pulse infinite;
        }
      `}</style>
    </div>
  );
}