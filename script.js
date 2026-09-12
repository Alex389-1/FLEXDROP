/**
 * FLEXDROP - Complete Interactive Store Logic
 * Handles: Product catalogues, Cart, Checkout, Demo OTP, Simulation Payments,
 *          Order Tracking ("My Orders"), Custom Orders, and Policy Modals.
 */

/* ══════════════════════════════════════════════════════════════════
   1. PRODUCT CATALOGUES (Grocery, Stationery, Medicine)
══════════════════════════════════════════════════════════════════ */

const groceryProducts = [
  // 1. Grains & Dal
  {
    id: 101,
    category: 'Grains & Dal',
    name: 'India Gate Basmati Rice Feast',
    weight: '5 kg',
    price: 420,
    originalPrice: 510,
    emoji: '🌾',
    badge: 'Best Seller',
    rating: 4.8,
    reviewsCount: 164,
    description: 'Aged to perfection, India Gate Feast Basmati Rice features long, slender grains that elongate up to twice their original size when cooked. Ideal for royal biryanis, fragrant pulao, and everyday gourmet feasts with an irresistible aroma.',
    highlights: ['100% Aged Long Grain', 'Non-sticky Fluffy Texture', 'Naturally Aromatic', 'Double Polished & Cleaned'],
    reviews: [
      { author: 'Vikram Rajput', city: 'Ranchi', rating: 5, date: '2 days ago', verified: true, comment: 'The aroma filled the entire home when cooked! Grains are long, separate and don’t stick together. 15 minute delivery was super impressive.' },
      { author: 'Meera Kulkarni', city: 'Jamshedpur', rating: 5, date: '1 week ago', verified: true, comment: 'Regularly buy India Gate from FlexDrop. Pristine packaging with manufacturer batch seal intact.' },
      { author: 'Rajesh Verma', city: 'Dhanbad', rating: 4.5, date: '2 weeks ago', verified: true, comment: 'Great quality rice at ₹420, which is lower than local kirana store price. Highly recommended!' }
    ]
  },

  // 2. Pickles & Masalas
  {
    id: 107,
    category: 'Pickles',
    name: "Mother's Recipe Mango Pickle",
    weight: '500 g',
    price: 120,
    originalPrice: 145,
    emoji: '🥒',
    badge: 'Authentic',
    rating: 4.7,
    reviewsCount: 118,
    description: 'Prepared using hand-picked raw Ramkela mangoes blended with authentic mustard seeds, cold-pressed oil, and aromatic Rajasthani spices. Provides the classic tangy Indian grandmother recipe taste.',
    highlights: ['Traditional Village Recipe', 'No Artificial Colors', 'Packed in Hygienic Jar', 'Rich Mustard Oil Infusion'],
    reviews: [
      { author: 'Ananya Roy', city: 'Bokaro', rating: 5, date: '4 days ago', verified: true, comment: 'Exact home-made taste! Tangy, mildly spiced and full of tender mango pieces. Perfect with hot parathas.' },
      { author: 'Sunil Kumar', city: 'Ranchi', rating: 4.5, date: '2 weeks ago', verified: true, comment: 'Oil level and spice balance is on point. Glass jar arrived securely bubble-wrapped.' }
    ]
  },

  // 3. Oil & Ghee
  {
    id: 111,
    category: 'Oil & Ghee',
    name: 'Amul Pure Desi Ghee Tub',
    weight: '1 L',
    price: 620,
    originalPrice: 690,
    emoji: '🫙',
    badge: '100% Pure',
    rating: 4.9,
    reviewsCount: 289,
    description: 'Crafted from fresh pure milk fat using traditional cream churn methods. Known for its rich granular texture (danedar), distinct golden hue, and mouth-watering aroma that enriches dals, rotis, and sweets.',
    highlights: ['Danedar Granular Texture', '100% Pure Cow & Buffalo Milk Fat', 'Zero Preservatives', 'Rich in Vitamin A, D, E'],
    reviews: [
      { author: 'Kavita Agarwal', city: 'Ranchi', rating: 5, date: 'Yesterday', verified: true, comment: 'Amul pure ghee has the best danedar texture. Fresh batch with 9 months shelf life remaining. Top notch service!' },
      { author: 'Pradeep Pandey', city: 'Hazaribagh', rating: 5, date: '5 days ago', verified: true, comment: 'Pure aroma when poured over hot dal tadka. Flexdrop delivered in 12 minutes flat.' }
    ]
  },

  // 4. Vegetables
  {
    id: 114,
    category: 'Vegetables',
    name: 'Fresh Nashik Red Onions',
    weight: '2 kg',
    price: 65,
    originalPrice: 80,
    emoji: '🧅',
    badge: 'Farm Fresh',
    rating: 4.6,
    reviewsCount: 94,
    description: 'Directly sourced from trusted local farmers in Nashik. Firm, dry skin, rich pungent flavor, and balanced sweetness suitable for curries, salads, and gravies.',
    highlights: ['Farm Fresh Daily Batch', 'Hand-sorted & Cleaned', 'Crisp & Pungent', 'Zero Damaged Bulbs Guarantee'],
    reviews: [
      { author: 'Suman Gupta', city: 'Ranchi', rating: 5, date: '3 days ago', verified: true, comment: 'Every onion was solid and dry, without any rotten or sprouted ones. Better quality than local market.' },
      { author: 'Rameshwar Mahato', city: 'Ramgarh', rating: 4, date: '1 week ago', verified: true, comment: 'Good size onions and weighed exactly 2.05 kg on my digital scale.' }
    ]
  },

  // 5. Dairy
  {
    id: 120,
    category: 'Dairy',
    name: 'Amul Malai Paneer Fresh Block',
    weight: '200 g',
    price: 92,
    originalPrice: 100,
    emoji: '🧀',
    badge: 'Soft & Fresh',
    rating: 4.8,
    reviewsCount: 210,
    description: 'Rich, velvety, and exceptionally soft cottage cheese made from pasteurised cow and buffalo milk. Holds its shape when simmered in Shahi Paneer, Kadai Paneer, or grilled on skewers.',
    highlights: ['Melt-in-Mouth Softness', 'Vacuum Sealed Freshness', 'High Protein & Calcium', 'Chilled Cold-Chain Maintained'],
    reviews: [
      { author: 'Priyanka Das', city: 'Ranchi', rating: 5, date: 'Today', verified: true, comment: 'Arrived chilled in an insulated ice bag! Made paneer butter masala tonight and it was melt-in-mouth soft.' },
      { author: 'Deepak Sinha', city: 'Dhanbad', rating: 5, date: '4 days ago', verified: true, comment: 'Super fresh, doesn’t turn rubbery upon cooking. Always buy Amul paneer from here.' }
    ]
  },

  // 6. Snacks
  {
    id: 122,
    category: 'Snacks',
    name: "Haldiram's Nagpur Aloo Bhujia",
    weight: '400 g',
    price: 110,
    originalPrice: 125,
    emoji: '🍿',
    badge: 'Crunchy',
    rating: 4.8,
    reviewsCount: 340,
    description: 'The nation’s favorite crunchy potato-mint extruded snack flavored with red chili, clove, black pepper, and hing. The ultimate companion for your evening cup of chai.',
    highlights: ['Crisp & Extra Crunchy', 'Tossed with Mint & Spices', 'Zero Trans Fat', 'Zip-lock Freshness Pack'],
    reviews: [
      { author: 'Rohit Tiwari', city: 'Ranchi', rating: 5, date: 'Yesterday', verified: true, comment: 'Classic Haldiram taste with that spicy mint kick. Packet was completely fresh and crispy.' },
      { author: 'Sneha Roy', city: 'Jamshedpur', rating: 5, date: '6 days ago', verified: true, comment: 'Best tea-time snack ever. Expiry date is 6 months away.' }
    ]
  },

  // 7. Beverages
  {
    id: 125,
    category: 'Beverages',
    name: 'Tata Tea Gold Leaf Tea',
    weight: '500 g',
    price: 310,
    originalPrice: 350,
    emoji: '☕',
    badge: 'Rich Taste',
    rating: 4.9,
    reviewsCount: 275,
    description: 'A delicate master blend of fine Assam CTC teas infused with gently rolled long leaves. Delivers an enticing amber liquor with an uplifting aroma and strong lingering taste.',
    highlights: ['Gently Rolled Long Leaves', 'Selected Assam Harvest', 'Strong Kadak Liquor', 'Aroma Sealed Pack'],
    reviews: [
      { author: 'Bimal Murmu', city: 'Ranchi', rating: 5, date: '2 days ago', verified: true, comment: 'Morning chai feels incomplete without Tata Gold. Beautiful color and authentic tea leaf scent.' },
      { author: 'Neha Jha', city: 'Dhanbad', rating: 4.5, date: '1 week ago', verified: true, comment: 'Great discount compared to retail store. Very fast delivery.' }
    ]
  },

  // 8. Personal Care
  {
    id: 128,
    category: 'Personal Care',
    name: 'Dettol Original Bathing Soap (Pack of 3)',
    weight: '3x125 g',
    price: 160,
    originalPrice: 185,
    emoji: '🧼',
    badge: 'Germ Defense',
    rating: 4.7,
    reviewsCount: 190,
    description: 'Trusted antibacterial protection that removes 99.9% of body odor-causing bacteria. Contains pure pine fragrance and moisturizing glycerin to keep skin fresh and protected all day.',
    highlights: ['99.9% Germ Defense', 'Classic Pine Freshness', 'Dermatologically Tested', 'Triple Value Saver Pack'],
    reviews: [
      { author: 'Sanjay Mishra', city: 'Ranchi', rating: 5, date: '3 days ago', verified: true, comment: 'The trusted Dettol fragrance we have grown up with. Value pack of 3 is very economical.' },
      { author: 'Rashmi Verma', city: 'Bokaro', rating: 4.5, date: '2 weeks ago', verified: true, comment: 'Leaves skin feeling thoroughly clean and hygienic. Delivered undamaged.' }
    ]
  },

  // 9. Cleaning
  {
    id: 131,
    category: 'Cleaning',
    name: 'Surf Excel Easy Wash Detergent Powder',
    weight: '1 kg',
    price: 142,
    originalPrice: 160,
    emoji: '🧺',
    badge: 'Tough Stains',
    rating: 4.8,
    reviewsCount: 220,
    description: 'Superfine powder engineered with advanced optical brighteners and stain-lifting enzymes. Dissolves instantly in water to tackle tough stains on collars, cuffs, and tea spills without rough brushing.',
    highlights: ['Fast Dissolve Technology', 'Safe on Colors & Whites', 'Uplifting Clean Fragrance', 'Protects Garment Fibres'],
    reviews: [
      { author: 'Geeta Devi', city: 'Ranchi', rating: 5, date: '5 days ago', verified: true, comment: 'Takes out turmeric and ink stains effortlessly from school uniforms. Very pleased.' },
      { author: 'Manoj Tirkey', city: 'Khunti', rating: 4.5, date: '1 week ago', verified: true, comment: 'Good quality washing powder, packed well with waterproof wrap.' }
    ]
  }
];

const stationeryProducts = [
  // 1. Writing
  {
    id: 205,
    type: 'stationery',
    subGroup: 'Writing',
    name: 'Reynolds 045 Fine Ball Pens (Pack of 5)',
    weight: 'Pack of 5',
    price: 50,
    originalPrice: 60,
    emoji: '🖊️',
    badge: 'Smooth Ink',
    rating: 4.7,
    reviewsCount: 180,
    description: 'The iconic 045 Carbure fine tip ball pen with laser-tip precision. Ensures smudge-proof, ultra-smooth writing for school exams, office note-taking, and daily signatures.',
    highlights: ['0.7 mm Fine Laser Tip', 'Non-smudging Blue Ink', 'Comfortable Grip Barrel', 'Long Writing Length'],
    reviews: [
      { author: 'Aditya Raj', city: 'Ranchi', rating: 5, date: '2 days ago', verified: true, comment: 'Classic Reynolds 045! Writes buttery smooth right out of the box with zero blotches.' },
      { author: 'Karan Mehra', city: 'Jamshedpur', rating: 4.5, date: '1 week ago', verified: true, comment: 'Perfect for long college lecture notes. 5 pens for ₹50 is a steal.' }
    ]
  },

  // 2. Notebooks
  {
    id: 201,
    type: 'stationery',
    subGroup: 'Notebooks',
    name: 'Classmate Long Notebook Ruled (172 pgs)',
    weight: 'Single Book',
    price: 65,
    originalPrice: 75,
    emoji: '📓',
    badge: 'Eco Paper',
    rating: 4.9,
    reviewsCount: 230,
    description: 'Made with eco-friendly chlorine-free elemental paper that prevents ink bleeding across sides. Features an attractive cover design and dedicated index page for neat academic organization.',
    highlights: ['High Brightness 70 GSM Paper', 'Bleed-resistant Chlorine Free', 'Sturdy Spine Binding', 'Engaging Cover Trivia'],
    reviews: [
      { author: 'Shreya Sinha', city: 'Ranchi', rating: 5, date: 'Yesterday', verified: true, comment: 'ITC Classmate paper quality is unmatched. Gel pens glide effortlessly with no ink see-through.' },
      { author: 'Vivek Ranjan', city: 'Dhanbad', rating: 5, date: '4 days ago', verified: true, comment: 'Book arrived in crisp, unbent condition. Excellent packaging.' }
    ]
  },

  // 3. Art
  {
    id: 209,
    type: 'stationery',
    subGroup: 'Art',
    name: 'Camel Oil Pastel Set 25 Shades',
    weight: '25 Shades',
    price: 120,
    originalPrice: 140,
    emoji: '🎨',
    badge: 'Vibrant',
    rating: 4.8,
    reviewsCount: 115,
    description: 'Creamy, rich, and highly blendable oil pastels with intense pigmentation. Comes with a complimentary scraping tool to create mesmerizing textures, gradations, and overlay art effects.',
    highlights: ['25 Vibrant Pigmented Shades', 'Intermixable & Easy Blend', 'Non-toxic & Child Safe', 'Includes Scraping Tool'],
    reviews: [
      { author: 'Tanvi Paul', city: 'Ranchi', rating: 5, date: '3 days ago', verified: true, comment: 'Colors are super vibrant and creamy. My daughter loved making sunset landscapes with them.' },
      { author: 'Alok Nandi', city: 'Bokaro', rating: 4.5, date: '2 weeks ago', verified: true, comment: 'High quality pastels from Kokuyo Camlin. Smooth on textured drawing sheets.' }
    ]
  },

  // 4. Office
  {
    id: 212,
    type: 'stationery',
    subGroup: 'Office',
    name: 'Kangaro Stapler No. 10 with Pins Box',
    weight: '1 Set',
    price: 85,
    originalPrice: 99,
    emoji: '📎',
    badge: 'Heavy Duty',
    rating: 4.8,
    reviewsCount: 140,
    description: 'Durable steel mechanism stapler with quick-loading chamber and built-in staple remover. Comes bundled with 1000 premium zinc-coated staples suitable for school assignments and office files.',
    highlights: ['Staples up to 20 sheets', 'All-Steel Mechanism', 'Integrated Pin Remover', 'Includes 1000 No. 10 Pins'],
    reviews: [
      { author: 'Rakesh Sahu', city: 'Ranchi', rating: 5, date: '4 days ago', verified: true, comment: 'Kangaro is the gold standard for staplers in India. Sturdy metal body that never jams.' },
      { author: 'Nalini Swaminathan', city: 'Jamshedpur', rating: 5, date: '1 week ago', verified: true, comment: 'Compact desktop size, punches through 15-20 sheets smoothly.' }
    ]
  }
];

const medicineProducts = [
  // 1. First Aid
  {
    id: 304,
    type: 'medicine',
    subGroup: 'FirstAid',
    name: 'Dettol Antiseptic Disinfectant Liquid',
    weight: '250 ml',
    price: 115,
    originalPrice: 130,
    emoji: '🧴',
    badge: 'Germ Defense',
    rating: 4.9,
    reviewsCount: 310,
    description: 'Legendary hospital-grade antiseptic formulated with Chloroxylenol. Provides effective wound disinfection for minor cuts, scrapes, insect bites, and personal hygiene washes.',
    highlights: ['Proven Antiseptic Disinfectant', 'Soothes Minor Cuts & Scratches', 'Versatile Household First-Aid', 'Original Medical Aroma'],
    reviews: [
      { author: 'Dr. S. K. Mahapatra', city: 'Ranchi', rating: 5, date: 'Yesterday', verified: true, comment: 'Essential first aid item in every Indian household. FlexDrop emergency 15 min delivery is a lifesaver.' },
      { author: 'Kiran Bala', city: 'Hazaribagh', rating: 5, date: '5 days ago', verified: true, comment: 'Original bottle with tamper-proof seal. Delivered quickly.' }
    ]
  },

  // 2. OTC Tablets
  {
    id: 311,
    type: 'medicine',
    subGroup: 'OTC',
    name: 'Crocin Pain Relief Paracetamol',
    weight: 'Strip of 15',
    price: 52,
    originalPrice: 58,
    emoji: '💊',
    badge: 'Fever & Pain',
    rating: 4.8,
    reviewsCount: 260,
    description: 'Trusted Paracetamol (650 mg) tablet designed with fast-release technology. Provides rapid, targeted relief from headache, body ache, fever, toothache, and muscular cramps.',
    highlights: ['Rapid Optizorb Dissolution', 'Gentle on Stomach', 'Relieves Fever & Headache', 'Standard Strip of 15 Tabs'],
    reviews: [
      { author: 'Gautam Chandra', city: 'Ranchi', rating: 5, date: '3 days ago', verified: true, comment: 'Super fast fever and headache relief. Needed this urgently at night and got it in 14 mins.' },
      { author: 'Ankita Sen', city: 'Dhanbad', rating: 4.5, date: '1 week ago', verified: true, comment: 'Genuine pharmacy stock with long expiry date (2028).' }
    ]
  },

  // 3. Topical Creams & Gels
  {
    id: 301,
    type: 'medicine',
    subGroup: 'Topical',
    name: 'Volini Fast Pain Relief Gel',
    weight: '30 g',
    price: 105,
    originalPrice: 120,
    emoji: '🧴',
    badge: 'Deep Action',
    rating: 4.9,
    reviewsCount: 195,
    description: 'Scientifically formulated with Diclofenac Diethylamine, Methyl Salicylate, and Menthol. Deeply penetrates skin layers to alleviate joint inflammation, backache, neck stiffness, and gym sprains.',
    highlights: ['Deep Penetration Formula', 'Instant Warming & Cooling Sensation', 'Non-greasy Quick Absorbing', 'Doctor Recommended'],
    reviews: [
      { author: 'Harish Pathak', city: 'Ranchi', rating: 5, date: '2 days ago', verified: true, comment: 'Applied it on my lower back strain before bed and the relief was noticeable in 10 minutes.' },
      { author: 'Sarita Topno', city: 'Bokaro', rating: 5, date: '6 days ago', verified: true, comment: 'Excellent pain relief gel. Soothing menthol cooling sensation.' }
    ]
  },

  // 4. Hygiene
  {
    id: 324,
    type: 'medicine',
    subGroup: 'Hygiene',
    name: 'Lifebuoy Alcohol Hand Sanitizer',
    weight: '200 ml',
    price: 85,
    originalPrice: 100,
    emoji: '🤲',
    badge: '70% Alcohol',
    rating: 4.7,
    reviewsCount: 160,
    description: 'Instant rinse-free hand sanitizer with 70% ethyl alcohol and vitamin E beads. Kills 99.9% illness-causing germs in seconds without drying out your skin or hands.',
    highlights: ['70% Hospital Grade Alcohol', 'Kills 99.9% Germs in 10s', 'Infused with Vitamin E Moisturizers', 'Non-sticky Fast Drying'],
    reviews: [
      { author: 'Ritu Singh', city: 'Ranchi', rating: 5, date: '4 days ago', verified: true, comment: 'Doesn’t feel sticky at all and leaves hands feeling soft with a subtle clean scent.' },
      { author: 'Abhishek Roy', city: 'Dhanbad', rating: 4.5, date: '2 weeks ago', verified: true, comment: 'Convenient 200ml pump bottle, great for dining tables and offices.' }
    ]
  }
];

// Combine all into master search lookup
const allProductsMaster = [...groceryProducts, ...stationeryProducts, ...medicineProducts];

/* ══════════════════════════════════════════════════════════════════
   2. STATE MANAGEMENT & LOCAL STORAGE
══════════════════════════════════════════════════════════════════ */

let cart = [];
let orders = [];
let activeGroceryCategory = 'All';
let currentDemoOtp = '582914';
let otpTimerInterval = null;
let currentAddressData = {};

/* ── CUSTOM REVIEWS PERSISTENCE (LocalStorage + Server File) ── */
function loadPersistedReviews() {
  try {
    const saved = localStorage.getItem('flexdrop_product_reviews');
    if (!saved) return;
    const reviewsMap = JSON.parse(saved);
    if (!reviewsMap || typeof reviewsMap !== 'object') return;

    allProductsMaster.forEach(p => {
      const addedReviews = reviewsMap[p.id];
      if (Array.isArray(addedReviews) && addedReviews.length > 0) {
        if (!p.reviews) p.reviews = [];
        // Prevent duplicate insertions if called multiple times
        const existingKeys = new Set(p.reviews.map(r => `${r.author}|${r.comment}`));
        const freshReviews = addedReviews.filter(r => !existingKeys.has(`${r.author}|${r.comment}`));
        if (freshReviews.length > 0) {
          p.reviews = [...freshReviews, ...p.reviews];
          p.reviewsCount = (p.reviewsCount || 0) + freshReviews.length;
        }
      }
    });
  } catch (e) {
    console.warn('Failed to load persisted reviews from localStorage:', e);
  }
}

function saveCustomReviewToStorage(id, newReview, productName) {
  try {
    let reviewsMap = {};
    const saved = localStorage.getItem('flexdrop_product_reviews');
    if (saved) {
      reviewsMap = JSON.parse(saved) || {};
    }
    if (!reviewsMap[id]) {
      reviewsMap[id] = [];
    }
    reviewsMap[id].unshift(newReview);
    localStorage.setItem('flexdrop_product_reviews', JSON.stringify(reviewsMap));
  } catch (e) {
    console.warn('Could not save review to localStorage:', e);
  }

  // Also sync to server reviews log
  try {
    fetch('/api/save-review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: id, productName: productName || '', ...newReview })
    }).catch(e => console.warn('Could not sync review to server:', e));
  } catch (e) {}
}

function loadStoreState() {
  loadPersistedReviews();
  try {
    const savedCart = localStorage.getItem('flexdrop_cart');
    if (savedCart) cart = JSON.parse(savedCart);

    const savedOrders = localStorage.getItem('flexdrop_orders');
    if (savedOrders) orders = JSON.parse(savedOrders);
  } catch (e) {
    console.warn('Failed to parse saved store state from localStorage:', e);
  }
  updateCartUI();
  updateOrdersCountUI();
  loadUserDetailsFromStorage();
  setTimeout(attachUserFormAutoSave, 300);
}

/* ── 1-CLICK RESET: CLEAR ALL CACHED DATA ── */
window.clearAllCachedData = function() {
  const confirmed = confirm(
    "🧹 Clear All Cached Demo Data?\n\nThis will reset:\n• Shopping Cart items\n• Placed demo orders & tracking\n• Saved delivery address & profile\n• Customer submitted reviews\n• AI Chatbot history\n• Server log files\n\nAre you sure you want to reset everything to fresh state?"
  );
  if (!confirmed) return;

  // Clear all localStorage keys
  try {
    localStorage.removeItem('flexdrop_cart');
    localStorage.removeItem('flexdrop_orders');
    localStorage.removeItem('flexdrop_saved_user');
    localStorage.removeItem('flexdrop_product_reviews');
    localStorage.removeItem('flexdrop_chat_history_v1');
  } catch (e) {}

  // Wipe server demo logs
  try {
    fetch('/api/clear-all-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).catch(() => {});
  } catch (e) {}

  alert('✨ All cached data has been cleared successfully! Reloading...');
  window.location.reload();
};

function saveCartState() {
  try {
    localStorage.setItem('flexdrop_cart', JSON.stringify(cart));
  } catch (e) {
    console.warn('Could not save cart state:', e);
  }
}

function saveOrdersState() {
  try {
    localStorage.setItem('flexdrop_orders', JSON.stringify(orders));
  } catch (e) {
    console.warn('Could not save orders state:', e);
  }
}

/* ── USER DETAILS PERSISTENCE (LocalStorage + Server File) ── */
function saveUserDetailsToStorage(data) {
  try {
    localStorage.setItem('flexdrop_saved_user', JSON.stringify(data));
  } catch (e) {
    console.warn('Could not save user details to localStorage:', e);
  }
}

function saveUserDetailsToServer(data) {
  try {
    fetch('/api/save-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch(e => console.warn('Could not sync user details to server:', e));
  } catch (e) {}
}

function loadUserDetailsFromStorage() {
  try {
    const saved = localStorage.getItem('flexdrop_saved_user');
    if (!saved) return;
    const data = JSON.parse(saved);
    if (!data) return;

    if (data.name && document.getElementById('fName')) document.getElementById('fName').value = data.name;
    if (data.rawPhone && document.getElementById('fPhone')) {
      document.getElementById('fPhone').value = data.rawPhone;
    } else if (data.phone && document.getElementById('fPhone')) {
      const parts = data.phone.split(' ');
      document.getElementById('fPhone').value = parts.length > 1 ? parts.slice(1).join(' ') : parts[0];
    }
    if (data.cc && document.getElementById('fCC')) document.getElementById('fCC').value = data.cc;
    if (data.line1 && document.getElementById('fLine1')) document.getElementById('fLine1').value = data.line1;
    if (data.line2 && document.getElementById('fLine2')) document.getElementById('fLine2').value = data.line2;
    if (data.city && document.getElementById('fCity')) document.getElementById('fCity').value = data.city;
    if (data.pin && document.getElementById('fPin')) document.getElementById('fPin').value = data.pin;
    if (data.state && document.getElementById('fState')) document.getElementById('fState').value = data.state;
    if (data.landmark && document.getElementById('fLandmark')) document.getElementById('fLandmark').value = data.landmark;

    if (data.addrType) {
      document.querySelectorAll('.addr-type-row .atype').forEach(b => {
        if (b.textContent.trim().toLowerCase().includes(data.addrType.toLowerCase())) {
          document.querySelectorAll('.addr-type-row .atype').forEach(x => x.classList.remove('sel'));
          b.classList.add('sel');
        }
      });
    }

    currentAddressData = { ...data };
  } catch (e) {
    console.warn('Failed to load saved user details:', e);
  }
}

function attachUserFormAutoSave() {
  const fields = ['fName', 'fPhone', 'fCC', 'fLine1', 'fLine2', 'fCity', 'fPin', 'fState', 'fLandmark'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', autoSaveCurrentFormDetails);
      el.addEventListener('change', autoSaveCurrentFormDetails);
    }
  });
}

function autoSaveCurrentFormDetails() {
  const name = document.getElementById('fName')?.value.trim();
  const phone = document.getElementById('fPhone')?.value.trim();
  const line1 = document.getElementById('fLine1')?.value.trim();
  const line2 = document.getElementById('fLine2')?.value.trim();
  const city = document.getElementById('fCity')?.value.trim();
  const pin = document.getElementById('fPin')?.value.trim();
  const state = document.getElementById('fState')?.value || 'Jharkhand';
  const landmark = document.getElementById('fLandmark')?.value.trim();
  const cc = document.getElementById('fCC')?.value || '+91';
  const typeElem = document.querySelector('.addr-type-row .atype.sel');
  const addrType = typeElem ? typeElem.textContent.trim() : 'Home';

  const data = {
    name,
    phone: `${cc} ${phone}`,
    rawPhone: phone,
    cc,
    line1,
    line2,
    city,
    pin,
    state,
    landmark,
    addrType
  };
  saveUserDetailsToStorage(data);
}

/* ══════════════════════════════════════════════════════════════════
   3. PRODUCT CARD RENDERING
══════════════════════════════════════════════════════════════════ */

function renderProductCard(p) {
  const isStationery = p.type === 'stationery';
  const isMedicine = p.type === 'medicine';
  const cardClass = isStationery ? 'stationery-card' : isMedicine ? 'medicine-card' : '';
  const badgeClass = isStationery ? 'stationery' : isMedicine ? 'medicine' : (p.badge === 'Offer' ? 'offer' : '');

  const cartItem = cart.find(c => c.id === p.id);
  const qty = cartItem ? cartItem.qty : 0;

  const btnHtml = qty > 0
    ? `<div class="qty-control">
         <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
         <span class="qty-num">${qty}</span>
         <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
       </div>`
    : `<button class="add-btn" onclick="addToCart(${p.id})">
         <span>+</span> Add
       </button>`;

  const ratingVal = p.rating || 4.8;
  const reviewsCount = p.reviewsCount || (p.reviews ? p.reviews.length : 0);
  const snippet = p.description ? (p.description.length > 60 ? p.description.slice(0, 58) + '...' : p.description) : '';

  return `
    <div class="product-card ${cardClass}" id="pcard-${p.id}" onclick="openProductModal(${p.id})">
      ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
      <div class="product-emoji">${p.emoji || '📦'}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating-bar">
        <span class="p-stars">★ ${ratingVal}</span>
        <span class="p-rev-count">(${reviewsCount})</span>
      </div>
      ${snippet ? `<div class="product-desc-snippet">${snippet}</div>` : ''}
      <div class="product-weight">${p.weight}</div>
      <div class="product-price">
        ₹${p.price}
        ${p.originalPrice && p.originalPrice > p.price ? `<span class="original">₹${p.originalPrice}</span>` : ''}
      </div>
      <div class="card-btn-container" onclick="event.stopPropagation()">
        ${btnHtml}
      </div>
      <div class="card-details-hint">View Details & Reviews ➔</div>
    </div>
  `;
}

function renderAllGrids() {
  // 1. Grocery Grid
  const groceryGrid = document.getElementById('productsGrid');
  if (groceryGrid) {
    const list = activeGroceryCategory === 'All'
      ? groceryProducts
      : groceryProducts.filter(p => p.category === activeGroceryCategory);
    groceryGrid.innerHTML = list.map(renderProductCard).join('');
  }

  // 2. Stationery Grid
  const stationeryGrid = document.getElementById('stationeryGrid');
  if (stationeryGrid) {
    stationeryGrid.innerHTML = stationeryProducts.map(renderProductCard).join('');
  }

  // 3. Medicine Grid
  const medicineGrid = document.getElementById('medicineGrid');
  if (medicineGrid) {
    medicineGrid.innerHTML = medicineProducts.map(renderProductCard).join('');
  }
}

/* ══════════════════════════════════════════════════════════════════
   4. CATEGORY & SEARCH FILTERS
══════════════════════════════════════════════════════════════════ */

window.filterCat = function(category, btn) {
  activeGroceryCategory = category;
  document.querySelectorAll('#categories .cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const groceryGrid = document.getElementById('productsGrid');
  const heading = document.getElementById('productsHeading');
  if (heading) heading.textContent = category === 'All' ? '🔥 All Products' : `🛒 ${category}`;

  if (groceryGrid) {
    const filtered = category === 'All'
      ? groceryProducts
      : groceryProducts.filter(p => p.category === category);
    groceryGrid.innerHTML = filtered.length
      ? filtered.map(renderProductCard).join('')
      : `<div style="grid-column: 1/-1; text-align:center; padding:30px; color:#7A6652;">No items found in this category.</div>`;
  }
};

window.filterStationery = function(group, btn) {
  document.querySelectorAll('.stationery-cat').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const grid = document.getElementById('stationeryGrid');
  if (grid) {
    const list = (!group || group === 'All')
      ? stationeryProducts
      : stationeryProducts.filter(p => p.subGroup === group);
    grid.innerHTML = list.length
      ? list.map(renderProductCard).join('')
      : `<div style="grid-column: 1/-1; text-align:center; padding:30px; color:#7A6652;">No items found in this section.</div>`;
  }
};

window.filterMedicine = function(group, btn) {
  document.querySelectorAll('.medicine-cat').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const grid = document.getElementById('medicineGrid');
  if (grid) {
    const list = (!group || group === 'All')
      ? medicineProducts
      : medicineProducts.filter(p => p.subGroup === group);
    grid.innerHTML = list.length
      ? list.map(renderProductCard).join('')
      : `<div style="grid-column: 1/-1; text-align:center; padding:30px; color:#7A6652;">No items found in this section.</div>`;
  }
};

/* ══════════════════════════════════════════════════════════════════
   4B. PRODUCT DETAILS & REVIEWS MODAL
══════════════════════════════════════════════════════════════════ */

window.openProductModal = function(id) {
  const p = allProductsMaster.find(x => x.id === id);
  if (!p) return;

  const overlay = document.getElementById('prodModalOverlay');
  const modal = document.getElementById('prodModal');
  if (!overlay || !modal) return;

  const isStationery = p.type === 'stationery';
  const isMedicine = p.type === 'medicine';
  const tagText = isStationery ? `Stationery • ${p.subGroup}` : isMedicine ? `Health • ${p.subGroup}` : `Grocery • ${p.category}`;

  const cartItem = cart.find(c => c.id === p.id);
  const qty = cartItem ? cartItem.qty : 0;

  const discountPercent = p.originalPrice && p.originalPrice > p.price
    ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
    : 0;

  const roundedRating = Math.round(p.rating || 5);
  const starsHtml = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);

  const highlightsHtml = (p.highlights || []).map(h => `
    <div class="pm-highlight-pill"><span class="check">✓</span> ${h}</div>
  `).join('');

  const reviewsList = p.reviews || [];
  const reviewsHtml = reviewsList.length > 0
    ? reviewsList.map(r => `
        <div class="pm-review-card">
          <div class="pm-review-header">
            <div class="pm-reviewer-info">
              <span class="pm-reviewer-name">${r.author}</span>
              <span class="pm-reviewer-city">• ${r.city || 'India'}</span>
              ${r.verified ? '<span class="pm-verified-badge">✓ Verified Buyer</span>' : ''}
            </div>
            <span class="pm-review-date">${r.date}</span>
          </div>
          <div class="pm-review-stars">${'★'.repeat(Math.floor(r.rating))}${r.rating % 1 >= 0.5 ? '½' : ''}</div>
          <div class="pm-review-text">${r.comment}</div>
        </div>
      `).join('')
    : '<div class="pm-no-reviews">No reviews yet. Be the first to review this product!</div>';

  const modalBtnHtml = qty > 0
    ? `<div class="qty-control" style="width:140px;">
         <button class="qty-btn" onclick="changeQtyModal(${p.id}, -1)">−</button>
         <span class="qty-num">${qty}</span>
         <button class="qty-btn" onclick="changeQtyModal(${p.id}, 1)">+</button>
       </div>`
    : `<button class="add-btn" style="width:140px; padding:10px 0;" onclick="addToCartModal(${p.id})">
         <span>+</span> Add to Cart
       </button>`;

  modal.innerHTML = `
    <div class="pm-head">
      <div class="pm-head-meta">
        <span class="pm-tag">${tagText}</span>
        ${p.badge ? `<span class="pm-badge">${p.badge}</span>` : ''}
      </div>
      <button class="close-x" style="background:rgba(0,0,0,0.06); color:#1A1200;" onclick="closeProductModal()">✕</button>
    </div>

    <div class="pm-scrollable-body">
      <div class="pm-hero">
        <div class="pm-emoji-wrapper">
          <span class="pm-big-emoji">${p.emoji || '📦'}</span>
        </div>
        <div class="pm-title-section">
          <h2 class="pm-product-title">${p.name}</h2>
          <div class="pm-weight-label">Pack size: <strong>${p.weight}</strong></div>
          <div class="pm-rating-row">
            <span class="pm-stars-gold">${starsHtml}</span>
            <span class="pm-rating-val">${p.rating || 4.8} / 5</span>
            <span class="pm-rating-count">(${p.reviewsCount || reviewsList.length} customer reviews)</span>
          </div>
          <div class="pm-price-row">
            <span class="pm-current-price">₹${p.price}</span>
            ${p.originalPrice && p.originalPrice > p.price ? `<span class="pm-original-price">₹${p.originalPrice}</span>` : ''}
            ${discountPercent > 0 ? `<span class="pm-discount-pill">${discountPercent}% OFF</span>` : ''}
          </div>
        </div>
      </div>

      <div class="pm-section">
        <h4 class="pm-sec-title">Key Highlights</h4>
        <div class="pm-highlights-grid">
          ${highlightsHtml}
        </div>
      </div>

      <div class="pm-section">
        <h4 class="pm-sec-title">Product Description</h4>
        <p class="pm-description-text">${p.description || 'Authentic top-grade product delivered directly from authorized distributors. Carefully packed to ensure maximum freshness.'}</p>
      </div>

      <div class="pm-section">
        <div class="pm-reviews-header">
          <div>
            <h4 class="pm-sec-title" style="margin-bottom:2px;">Customer Reviews & Ratings</h4>
            <div style="font-size:12px; color:#7A6652;">Real feedback from verified FlexDrop shoppers</div>
          </div>
          <div class="pm-rating-score-box">
            <span class="score-num">${p.rating || 4.8}</span>
            <span class="score-stars">★ ★ ★ ★ ★</span>
          </div>
        </div>

        <div class="pm-reviews-list" id="pmReviewsList-${p.id}">
          ${reviewsHtml}
        </div>

        <div class="pm-write-review-box">
          <h5 class="pm-write-title">✍️ Write a Review for this Item</h5>
          <div class="pm-form-row">
            <input type="text" id="revAuthor-${p.id}" placeholder="Your Name (e.g. Rahul Verma)" class="pm-input">
            <select id="revRating-${p.id}" class="pm-input pm-select">
              <option value="5">★★★★★ (5 Stars - Excellent)</option>
              <option value="4">★★★★☆ (4 Stars - Very Good)</option>
              <option value="3">★★★☆☆ (3 Stars - Average)</option>
              <option value="2">★★☆☆☆ (2 Stars - Below Average)</option>
              <option value="1">★☆☆☆☆ (1 Star - Poor)</option>
            </select>
          </div>
          <textarea id="revComment-${p.id}" placeholder="Share your experience with this item, freshness, packaging..." class="pm-input pm-textarea"></textarea>
          <div style="text-align: right; margin-top:8px;">
            <button class="pm-submit-review-btn" onclick="submitProductReview(${p.id})">Post Customer Review</button>
          </div>
        </div>
      </div>
    </div>

    <div class="pm-sticky-footer">
      <div>
        <div style="font-size:11px; color:#7A6652; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Price</div>
        <div style="font-size:19px; font-weight:800; color:var(--saffron);">₹${p.price}</div>
      </div>
      <div id="pmFooterActions-${p.id}">
        ${modalBtnHtml}
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  syncDrawerOpenState();
};

window.closeProductModal = function() {
  const overlay = document.getElementById('prodModalOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
  syncDrawerOpenState();
};

window.closeProductModalIfBg = function(e) {
  if (e.target.id === 'prodModalOverlay') {
    closeProductModal();
  }
};

window.addToCartModal = function(id) {
  addToCart(id);
  refreshProductModalActions(id);
};

window.changeQtyModal = function(id, delta) {
  changeQty(id, delta);
  refreshProductModalActions(id);
};

function refreshProductModalActions(id) {
  const p = allProductsMaster.find(x => x.id === id);
  if (!p) return;
  const container = document.getElementById(`pmFooterActions-${id}`);
  if (!container) return;

  const cartItem = cart.find(c => c.id === id);
  const qty = cartItem ? cartItem.qty : 0;

  container.innerHTML = qty > 0
    ? `<div class="qty-control" style="width:140px;">
         <button class="qty-btn" onclick="changeQtyModal(${p.id}, -1)">−</button>
         <span class="qty-num">${qty}</span>
         <button class="qty-btn" onclick="changeQtyModal(${p.id}, 1)">+</button>
       </div>`
    : `<button class="add-btn" style="width:140px; padding:10px 0;" onclick="addToCartModal(${p.id})">
         <span>+</span> Add to Cart
       </button>`;
}

window.submitProductReview = function(id) {
  const p = allProductsMaster.find(x => x.id === id);
  if (!p) return;

  const nameInput = document.getElementById(`revAuthor-${id}`);
  const ratingInput = document.getElementById(`revRating-${id}`);
  const commentInput = document.getElementById(`revComment-${id}`);

  const author = nameInput?.value.trim() || 'Verified Customer';
  const rating = parseFloat(ratingInput?.value || '5');
  const comment = commentInput?.value.trim();

  if (!comment) {
    alert('Please enter your review comments.');
    commentInput?.focus();
    return;
  }

  const now = new Date();
  const timeStr = now.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const newReview = {
    author,
    city: currentAddressData.city || 'Ranchi',
    rating,
    date: `Posted ${timeStr}`,
    verified: true,
    comment
  };

  if (!p.reviews) p.reviews = [];
  p.reviews.unshift(newReview);
  p.reviewsCount = (p.reviewsCount || 0) + 1;

  // Persist review to localStorage and Server Log
  saveCustomReviewToStorage(id, newReview, p.name);

  // Clear inputs
  if (nameInput) nameInput.value = '';
  if (commentInput) commentInput.value = '';

  // Re-render modal to display new review immediately
  openProductModal(id);
  // Also refresh product card in the grid
  refreshCardButton(id);
};

window.filterProducts = function() {
  const query = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';

  const groceryGrid = document.getElementById('productsGrid');
  const stationeryGrid = document.getElementById('stationeryGrid');
  const medicineGrid = document.getElementById('medicineGrid');

  if (!query) {
    renderAllGrids();
    return;
  }

  const matchFn = p =>
    p.name.toLowerCase().includes(query) ||
    (p.category && p.category.toLowerCase().includes(query)) ||
    (p.subGroup && p.subGroup.toLowerCase().includes(query));

  if (groceryGrid) {
    const gMatches = groceryProducts.filter(matchFn);
    groceryGrid.innerHTML = gMatches.length
      ? gMatches.map(renderProductCard).join('')
      : `<div style="grid-column: 1/-1; text-align:center; padding:20px; color:#7A6652;">No groceries matching "${query}"</div>`;
  }
  if (stationeryGrid) {
    const sMatches = stationeryProducts.filter(matchFn);
    stationeryGrid.innerHTML = sMatches.length
      ? sMatches.map(renderProductCard).join('')
      : `<div style="grid-column: 1/-1; text-align:center; padding:20px; color:#7A6652;">No stationery matching "${query}"</div>`;
  }
  if (medicineGrid) {
    const mMatches = medicineProducts.filter(matchFn);
    medicineGrid.innerHTML = mMatches.length
      ? mMatches.map(renderProductCard).join('')
      : `<div style="grid-column: 1/-1; text-align:center; padding:20px; color:#7A6652;">No medical items matching "${query}"</div>`;
  }
};

/* ══════════════════════════════════════════════════════════════════
   5. CART MANAGEMENT
══════════════════════════════════════════════════════════════════ */

window.addToCart = function(id) {
  const product = allProductsMaster.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCartState();
  updateCartUI();
  refreshCardButton(id);
};

window.changeQty = function(id, delta) {
  const itemIndex = cart.findIndex(c => c.id === id);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;
  if (cart[itemIndex].qty <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveCartState();
  updateCartUI();
  refreshCardButton(id);
};

function refreshCardButton(id) {
  const card = document.getElementById(`pcard-${id}`);
  if (!card) return;
  const product = allProductsMaster.find(p => p.id === id);
  if (!product) return;

  const temp = document.createElement('div');
  temp.innerHTML = renderProductCard(product);
  const newCard = temp.firstElementChild;
  card.replaceWith(newCard);
}

function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const originalSubtotal = cart.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.qty, 0);
  const discount = Math.max(0, originalSubtotal - subtotal);
  const delivery = subtotal >= 999 || subtotal === 0 ? 0 : 40;
  const total = subtotal + delivery;

  return { subtotal, discount, delivery, total };
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountElem = document.getElementById('cartCount');
  if (cartCountElem) cartCountElem.textContent = totalCount;

  const cartItemsElem = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');

  if (!cartItemsElem) return;

  if (cart.length === 0) {
    cartItemsElem.innerHTML = `
      <div class="empty-cart">
        <span>🛒</span>
        Your cart is empty.<br>Add items to get started!
      </div>`;
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  const { subtotal, discount, delivery, total } = calculateCartTotals();

  cartItemsElem.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji || '📦'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-sub">${item.weight} · ₹${item.price}</div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">₹${item.price * item.qty}</div>
        <div class="cart-item-qty">
          <button class="cqbtn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="cqbtn-num">${item.qty}</span>
          <button class="cqbtn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');

  if (cartFooter) cartFooter.style.display = 'block';

  const subElem = document.getElementById('subtotal');
  const delElem = document.getElementById('delivery');
  const discElem = document.getElementById('discount');
  const totElem = document.getElementById('total');

  if (subElem) subElem.textContent = `₹${subtotal}`;
  if (delElem) delElem.innerHTML = delivery === 0 ? '<span class="green">FREE</span>' : `₹${delivery}`;
  if (discElem) discElem.textContent = `-₹${discount}`;
  if (totElem) totElem.textContent = `₹${total}`;
}

/* ── HELPER: DRAWER / MODAL STATE SYNCHRONIZATION ── */
function syncDrawerOpenState() {
  setTimeout(() => {
    const isAnyOpen = !!(
      document.querySelector('.cart-drawer.open') ||
      document.querySelector('.orders-drawer.open') ||
      document.querySelector('.custom-drawer.open') ||
      document.querySelector('.prod-modal-overlay.open') ||
      document.querySelector('.cancel-modal-overlay.open') ||
      document.querySelector('#policyOverlay.open')
    );
    if (isAnyOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
  }, 10);
}

window.openCart = function() {
  document.getElementById('cartOverlay')?.classList.add('open');
  document.getElementById('cartDrawer')?.classList.add('open');
  goPanel('panelCart');
  syncDrawerOpenState();
};

window.closeCart = function() {
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.getElementById('cartDrawer')?.classList.remove('open');
  syncDrawerOpenState();
};

/* ══════════════════════════════════════════════════════════════════
   6. MULTI-STEP CHECKOUT & DEMO PAYMENT SIMULATION
══════════════════════════════════════════════════════════════════ */

window.goPanel = function(panelId) {
  const panels = ['panelCart', 'panelAddress', 'panelOtp', 'panelPay', 'panelSuccess'];
  panels.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === panelId) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
  });

  if (panelId === 'panelPay') {
    populatePaymentPanel();
  }
};

window.selAddrType = function(el) {
  document.querySelectorAll('.addr-type-row .atype').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
};

function showAddrError(msg) {
  const err = document.getElementById('addrErr');
  if (err) {
    err.textContent = msg;
    err.classList.add('show');
    err.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function clearAddrError() {
  const err = document.getElementById('addrErr');
  if (err) {
    err.textContent = '';
    err.classList.remove('show');
  }
}

window.submitAddress = function() {
  clearAddrError();
  const name = document.getElementById('fName')?.value.trim();
  const phone = document.getElementById('fPhone')?.value.trim();
  const line1 = document.getElementById('fLine1')?.value.trim();
  const line2 = document.getElementById('fLine2')?.value.trim();
  const city = document.getElementById('fCity')?.value.trim();
  const pin = document.getElementById('fPin')?.value.trim();
  const state = document.getElementById('fState')?.value || 'Jharkhand';
  const landmark = document.getElementById('fLandmark')?.value.trim();
  const cc = document.getElementById('fCC')?.value || '+91';
  const typeElem = document.querySelector('.addr-type-row .atype.sel');
  const addrType = typeElem ? typeElem.textContent.trim() : 'Home';

  if (!name) {
    showAddrError('⚠️ Please enter your Full Name');
    document.getElementById('fName')?.focus();
    return;
  }
  if (!phone) {
    showAddrError('⚠️ Please enter your Phone number');
    document.getElementById('fPhone')?.focus();
    return;
  }
  if (phone.length < 7) {
    showAddrError('⚠️ Please enter a valid Phone number (at least 7 digits)');
    document.getElementById('fPhone')?.focus();
    return;
  }
  if (!line1) {
    showAddrError('⚠️ Please enter your Flat / House & Building details');
    document.getElementById('fLine1')?.focus();
    return;
  }
  if (!city) {
    showAddrError('⚠️ Please enter your City');
    document.getElementById('fCity')?.focus();
    return;
  }
  if (!pin || pin.length < 4) {
    showAddrError('⚠️ Please enter a valid PIN code');
    document.getElementById('fPin')?.focus();
    return;
  }

  currentAddressData = {
    name,
    phone: `${cc} ${phone}`,
    rawPhone: phone,
    cc,
    line1,
    line2,
    city,
    pin,
    state,
    landmark,
    addrType
  };

  // Save to browser localStorage and server txt file
  saveUserDetailsToStorage(currentAddressData);
  saveUserDetailsToServer(currentAddressData);

  // Generate a random 6-digit demo OTP
  currentDemoOtp = Math.floor(100000 + Math.random() * 900000).toString();

  const otpSentTo = document.getElementById('otpSentTo');
  if (otpSentTo) {
    const hiddenPhone = phone.length > 5 ? phone.slice(0, 2) + '****' + phone.slice(-2) : phone;
    otpSentTo.textContent = `${cc} ${hiddenPhone}`;
  }

  const demoOtpShow = document.getElementById('demoOtpShow');
  if (demoOtpShow) demoOtpShow.textContent = currentDemoOtp;

  startOtpTimer();
  clearOtpInputs();

  goPanel('panelOtp');
};

window.autoFillDemoOtp = function() {
  for (let i = 0; i < 6; i++) {
    const ob = document.getElementById(`ob${i}`);
    if (ob && currentDemoOtp[i]) {
      ob.value = currentDemoOtp[i];
      ob.classList.add('filled');
    }
  }
};

function clearOtpInputs() {
  for (let i = 0; i < 6; i++) {
    const ob = document.getElementById(`ob${i}`);
    if (ob) {
      ob.value = '';
      ob.classList.remove('filled');
    }
  }
  const verifiedPill = document.getElementById('verifiedPill');
  if (verifiedPill) verifiedPill.style.display = 'none';
  const otpErr = document.getElementById('otpErr');
  if (otpErr) otpErr.textContent = '';
  setTimeout(() => document.getElementById('ob0')?.focus(), 150);
}

function startOtpTimer() {
  clearInterval(otpTimerInterval);
  let sec = 30;
  const timerTxt = document.getElementById('timerTxt');
  const timerSec = document.getElementById('timerSec');
  const resendBtn = document.getElementById('resendBtn');

  if (timerTxt) timerTxt.style.display = 'inline';
  if (resendBtn) resendBtn.classList.remove('show');
  if (timerSec) timerSec.textContent = sec;

  otpTimerInterval = setInterval(() => {
    sec--;
    if (timerSec) timerSec.textContent = sec;
    if (sec <= 0) {
      clearInterval(otpTimerInterval);
      if (timerTxt) timerTxt.style.display = 'none';
      if (resendBtn) resendBtn.classList.add('show');
    }
  }, 1000);
}

window.resendOtp = function() {
  currentDemoOtp = Math.floor(100000 + Math.random() * 900000).toString();
  const demoOtpShow = document.getElementById('demoOtpShow');
  if (demoOtpShow) demoOtpShow.textContent = currentDemoOtp;
  clearOtpInputs();
  startOtpTimer();
};

window.otpNext = function(idx, input) {
  if (input.value.length === 1) {
    input.classList.add('filled');
    if (idx < 5) {
      document.getElementById(`ob${idx + 1}`)?.focus();
    }
  } else {
    input.classList.remove('filled');
  }
};

window.otpBack = function(idx, event) {
  if (event.key === 'Backspace' && !event.target.value && idx > 0) {
    const prev = document.getElementById(`ob${idx - 1}`);
    if (prev) {
      prev.focus();
      prev.value = '';
      prev.classList.remove('filled');
    }
  }
};

window.verifyOtp = function() {
  let entered = '';
  for (let i = 0; i < 6; i++) {
    entered += document.getElementById(`ob${i}`)?.value || '';
  }

  const err = document.getElementById('otpErr');
  // If user clicked verify without typing, auto-fill demo OTP for convenience
  if (!entered || entered.length < 6) {
    entered = currentDemoOtp;
    if (typeof autoFillDemoOtp === 'function') autoFillDemoOtp();
  }

  if (entered !== currentDemoOtp && entered !== '123456') {
    if (err) {
      err.textContent = `❌ Incorrect OTP. Please enter ${currentDemoOtp}`;
      err.classList.add('show');
    }
    return;
  }

  if (err) {
    err.textContent = '';
    err.classList.remove('show');
  }
  const pill = document.getElementById('verifiedPill');
  if (pill) pill.style.display = 'block';

  clearInterval(otpTimerInterval);

  setTimeout(() => {
    goPanel('panelPay');
  }, 400);
};

let selectedPayment = 'upi';
window.selPay = function(method) {
  selectedPayment = method;
  document.querySelectorAll('.pay-opt').forEach(b => b.classList.remove('sel'));
  document.getElementById(`po_${method}`)?.classList.add('sel');

  const upiField = document.getElementById('upiField');
  if (upiField) upiField.style.display = method === 'upi' ? 'block' : 'none';

  const { total } = calculateCartTotals();
  const payBtnTxt = document.getElementById('payBtnTxt');
  if (payBtnTxt) {
    if (method === 'cod') {
      payBtnTxt.textContent = `📦 Place Cash on Delivery (₹${total})`;
    } else {
      payBtnTxt.textContent = `🔒 Pay ₹${total}`;
    }
  }
};

function populatePaymentPanel() {
  const { subtotal, discount, delivery, total } = calculateCartTotals();

  // Summary breakdown
  const pSub = document.getElementById('pSub');
  const pDel = document.getElementById('pDel');
  const pDisc = document.getElementById('pDisc');
  const pTot = document.getElementById('pTot');
  const payMiniSummary = document.getElementById('payMiniSummary');

  if (pSub) pSub.textContent = `₹${subtotal}`;
  if (pDel) pDel.innerHTML = delivery === 0 ? '<span class="green">FREE</span>' : `₹${delivery}`;
  if (pDisc) pDisc.textContent = `-₹${discount}`;
  if (pTot) pTot.textContent = `₹${total}`;

  if (payMiniSummary) {
    payMiniSummary.innerHTML = cart.map(item => `
      <div class="mini-item">
        <div class="mini-emoji">${item.emoji || '📦'}</div>
        <div class="mini-info">
          <div class="mini-name">${item.name}</div>
          <div class="mini-qty">${item.weight} × ${item.qty}</div>
        </div>
        <div class="mini-price">₹${item.price * item.qty}</div>
      </div>
    `).join('');
  }

  // Address recap
  const addrRecap = document.getElementById('addrRecap');
  if (addrRecap && currentAddressData.name) {
    addrRecap.innerHTML = `
      <strong>${currentAddressData.name}</strong> (${currentAddressData.addrType})<br>
      ${currentAddressData.line1}, ${currentAddressData.line2 ? currentAddressData.line2 + ', ' : ''}${currentAddressData.city} - ${currentAddressData.pin}<br>
      📞 ${currentAddressData.phone}
    `;
  }

  // Pre-fill a demo UPI ID if blank
  const upiInput = document.getElementById('upiId');
  if (upiInput && !upiInput.value) {
    upiInput.value = 'demo@oksbi';
  }

  selPay(selectedPayment);
}

window.confirmOrder = function() {
  const payBtn = document.getElementById('payBtn');
  const payErr = document.getElementById('payErr');

  if (selectedPayment === 'upi') {
    const upiId = document.getElementById('upiId')?.value.trim();
    if (!upiId) {
      if (payErr) {
        payErr.textContent = '⚠️ Please enter your UPI ID (e.g. rahul@oksbi)';
        payErr.classList.add('show');
      }
      return;
    }
  }
  if (payErr) {
    payErr.textContent = '';
    payErr.classList.remove('show');
  }

  // Simulate payment processing spinner
  if (payBtn) payBtn.classList.add('btn-spinning');

  setTimeout(() => {
    if (payBtn) payBtn.classList.remove('btn-spinning');

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const orderId = `#FD-${randomNum}`;
    const { subtotal, discount, delivery, total } = calculateCartTotals();

    const now = new Date();
    const orderRecord = {
      orderId,
      date: now.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
      time: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
      timestamp: now.toISOString(),
      items: [...cart],
      itemCount: cart.reduce((sum, i) => sum + i.qty, 0),
      subtotal,
      discount,
      delivery,
      total,
      address: { ...currentAddressData },
      paymentMethod: selectedPayment.toUpperCase(),
      status: 'Order Placed (Packing)'
    };

    orders.unshift(orderRecord);
    saveOrdersState();
    updateOrdersCountUI();

    // Success UI setup
    const successOrderId = document.getElementById('successOrderId');
    const successCity = document.getElementById('successCity');
    if (successOrderId) successOrderId.textContent = orderId;
    if (successCity) successCity.textContent = currentAddressData.city || 'your address';

    // Empty active cart
    cart = [];
    saveCartState();
    updateCartUI();
    renderAllGrids();

    goPanel('panelSuccess');
  }, 1200);
};

window.resetCheckout = function() {
  closeCart();
  setTimeout(() => goPanel('panelCart'), 400);
};

/* ══════════════════════════════════════════════════════════════════
   7. PLACED ORDERS DRAWER ("MY ORDERS")
══════════════════════════════════════════════════════════════════ */

window.openOrdersModal = function() {
  document.getElementById('ordersOverlay')?.classList.add('open');
  document.getElementById('ordersDrawer')?.classList.add('open');
  renderOrdersList();
  syncDrawerOpenState();
};

window.closeOrdersModal = function() {
  document.getElementById('ordersOverlay')?.classList.remove('open');
  document.getElementById('ordersDrawer')?.classList.remove('open');
  syncDrawerOpenState();
};

function updateOrdersCountUI() {
  const badge = document.getElementById('ordersCount');
  if (badge) badge.textContent = orders.length;
}

function renderOrdersList() {
  const container = document.getElementById('ordersListContainer');
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px 20px; color:#7A6652;">
        <div style="font-size:48px; margin-bottom:10px;">📦</div>
        <div style="font-size:16px; font-weight:700; color:#1A1200;">No Orders Placed Yet</div>
        <p style="font-size:13px; margin-top:6px;">Add items to your cart and checkout to test demo order placement!</p>
      </div>`;
    return;
  }

  container.innerHTML = orders.map(ord => {
    const isCancelled = ord.status === 'Cancelled';
    const badgeHtml = isCancelled
      ? `<div class="order-badge" style="background:#FFEBEE; color:#C62828; border-color:#FFCDD2;">❌ Cancelled</div>`
      : `<div class="order-badge">✅ ${ord.status || 'Order Placed'}</div>`;

    const cancelReasonBox = isCancelled && ord.cancelReason
      ? `<div style="font-size:12px; color:#C62828; background:#FFF5F5; padding:8px 10px; border-radius:8px; border:1px solid #FFCDD2; margin-top:4px;">
           <strong>Cancellation Reason:</strong> ${ord.cancelReason}
           ${ord.cancelledAt ? `<div style="font-size:11px; color:#888; margin-top:2px;">Cancelled at ${ord.cancelledAt}</div>` : ''}
         </div>`
      : '';

    const timelineHtml = isCancelled
      ? `<div style="font-size:12px; font-weight:700; color:#C62828; display:flex; align-items:center; gap:5px;">
           <span>❌</span> This order was cancelled.
         </div>`
      : `<div class="order-status-steps">
           <span class="status-step active">● Placed</span> ➔
           <span class="status-step active">● Packed</span> ➔
           <span class="status-step">○ Out for Delivery</span> ➔
           <span class="status-step">○ Delivered</span>
         </div>`;

    const actionButton = isCancelled
      ? `<button class="reorder-btn" onclick="reorderItems('${ord.orderId}')">
           🔄 Re-order Items
         </button>`
      : `<button class="cancel-order-btn" onclick="openCancelDialog('${ord.orderId}')">
           <span>✕</span> Cancel Order
         </button>`;

    return `
      <div class="order-card" id="order-card-${ord.orderId}">
        <div class="order-card-top">
          <div>
            <div class="order-id">${ord.orderId || '#FD-DEMO'}</div>
            <div class="order-date">${ord.date || ''} ${ord.time ? 'at ' + ord.time : ''}</div>
          </div>
          ${badgeHtml}
        </div>

        <div class="order-items-list">
          ${(ord.items || []).map(it => `
            <div>• ${it.emoji || '🛒'} ${it.name || 'Item'} (${it.weight || ''}) × <strong>${it.qty || 1}</strong> — ₹${(it.price || 0) * (it.qty || 1)}</div>
          `).join('')}
        </div>

        <div class="order-total-row">
          <div>Total Amount (${ord.paymentMethod || 'DEMO'})</div>
          <div style="color:#FF6F00; font-size:16px;">₹${ord.total || 0}</div>
        </div>

        <div style="font-size:11.5px; color:#7A6652; background:#FFF8F0; padding:8px 10px; border-radius:8px; border:1px solid #F0E0C8;">
          📍 Delivering to: <strong>${ord.address?.name || 'Customer'}</strong>${ord.address?.line1 ? ', ' + ord.address.line1 : ''}${ord.address?.city ? ', ' + ord.address.city : ''} ${ord.address?.pin ? '(' + ord.address.pin + ')' : ''}
        </div>

        ${cancelReasonBox}
        ${timelineHtml}
        ${actionButton}
      </div>
    `;
  }).join('');
}

/* ─── CANCEL ORDER LOGIC ─── */
let orderIdToCancel = null;

window.openCancelDialog = function(orderId) {
  orderIdToCancel = orderId;
  const title = document.getElementById('cancelModalTitle');
  if (title) title.textContent = `✕ Cancel Order (${orderId})`;

  const overlay = document.getElementById('cancelOrderOverlay');
  if (overlay) overlay.classList.add('open');

  const details = document.getElementById('cancelReasonDetails');
  if (details) details.value = '';
  syncDrawerOpenState();
};

window.closeCancelDialog = function() {
  orderIdToCancel = null;
  const overlay = document.getElementById('cancelOrderOverlay');
  if (overlay) overlay.classList.remove('open');
  syncDrawerOpenState();
};

window.closeCancelDialogIfBg = function(e) {
  if (e.target.id === 'cancelOrderOverlay') {
    closeCancelDialog();
  }
};

window.confirmCancelOrder = function() {
  if (!orderIdToCancel) return;

  const selectedOpt = document.querySelector('input[name="cancelReason"]:checked');
  let reason = selectedOpt ? selectedOpt.value : 'Ordered by mistake';
  const details = document.getElementById('cancelReasonDetails')?.value.trim();
  if (details) {
    reason += ` - ${details}`;
  }

  const orderIndex = orders.findIndex(o => o.orderId === orderIdToCancel);
  if (orderIndex !== -1) {
    orders[orderIndex].status = 'Cancelled';
    orders[orderIndex].cancelReason = reason;
    orders[orderIndex].cancelledAt = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

    saveOrdersState();
    renderOrdersList();
  }

  closeCancelDialog();
};

window.reorderItems = function(orderId) {
  const order = orders.find(o => o.orderId === orderId);
  if (!order || !order.items) return;

  order.items.forEach(it => {
    const existing = cart.find(c => c.id === it.id);
    if (existing) {
      existing.qty += it.qty;
    } else {
      cart.push({ ...it });
    }
  });

  saveCartState();
  updateCartUI();
  renderAllGrids();
  closeOrdersModal();
  openCart();
};

/* ══════════════════════════════════════════════════════════════════
   8. CUSTOM ORDER DRAWER
══════════════════════════════════════════════════════════════════ */

window.toggleCustomPanel = function() {
  const drawer = document.getElementById('customDrawer');
  const overlay = document.getElementById('customOverlay');
  if (drawer && overlay) {
    const isOpen = drawer.classList.contains('open');
    drawer.classList.toggle('open', !isOpen);
    overlay.classList.toggle('open', !isOpen);
  }
  syncDrawerOpenState();
};

window.closeCustomPanel = function() {
  document.getElementById('customDrawer')?.classList.remove('open');
  document.getElementById('customOverlay')?.classList.remove('open');
  syncDrawerOpenState();
};

window.previewImage = function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      const preview = document.getElementById('imgPreview');
      const removeBtn = document.getElementById('removeImgBtn');
      if (preview) {
        preview.src = evt.target.result;
        preview.style.display = 'block';
      }
      if (removeBtn) removeBtn.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
};

window.removeImage = function() {
  const input = document.getElementById('imgInput');
  const preview = document.getElementById('imgPreview');
  const removeBtn = document.getElementById('removeImgBtn');
  if (input) input.value = '';
  if (preview) { preview.src = ''; preview.style.display = 'none'; }
  if (removeBtn) removeBtn.style.display = 'none';
};

window.submitCustomOrder = function() {
  const text = document.getElementById('customItemsText')?.value.trim();
  if (!text) {
    alert('⚠️ Please enter the list of grocery or stationery items you want to order!');
    return;
  }

  // Create a demo custom order in orders
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const orderId = `#CUSTOM-${randomNum}`;
  const now = new Date();

  orders.unshift({
    orderId,
    date: now.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
    time: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
    timestamp: now.toISOString(),
    items: [{ id: 999, name: `Custom Request: ${text.slice(0, 30)}...`, weight: 'Custom', qty: 1, price: 0, emoji: '📝' }],
    itemCount: 1,
    subtotal: 0,
    discount: 0,
    delivery: 0,
    total: 0,
    address: { name: 'Customer (WhatsApp)', line1: text, city: 'Local Area', pin: 'N/A' },
    paymentMethod: 'WHATSAPP ESTIMATE',
    status: 'Custom Order Received'
  });

  saveOrdersState();
  updateOrdersCountUI();

  alert(`🎉 Custom order registered successfully as ${orderId}!\nOur team will review your item list.`);
  document.getElementById('customItemsText').value = '';
  removeImage();
  closeCustomPanel();
};

/* ══════════════════════════════════════════════════════════════════
   9. POLICY POPUPS & FOOTER
══════════════════════════════════════════════════════════════════ */

const policyContent = {
  about: {
    title: 'About FlexDrop',
    html: `
      <h3>Welcome to FlexDrop</h3>
      <p>FlexDrop is your neighborhood Indian grocery, stationery, and daily essentials delivery platform. We source 100% fresh, authentic items directly from verified farmers, mandis, and certified manufacturers.</p>
      <h3>Our Core Promises</h3>
      <ul>
        <li><strong>Authentic Quality:</strong> Genuine chakki atta, pure cow ghee, clean grains, and certified OTC wellness products.</li>
        <li><strong>Superfast Local Delivery:</strong> Same-day doorstep delivery within 60 to 90 minutes.</li>
        <li><strong>Support for Indian Homes:</strong> From daily dal-roti to school stationery and first-aid kits, we have all your family essentials covered.</li>
      </ul>
    `
  },
  privacy: {
    title: 'Privacy & Policies',
    html: `
      <h3>Privacy Policy</h3>
      <p>We respect your privacy. All user information collected on FlexDrop is strictly used for order processing, customer support, and delivery fulfillment.</p>
      <h3>Data Protection</h3>
      <ul>
        <li>We never sell or rent your personal information to third parties.</li>
        <li>Payment information is processed securely with tokenized encryptions.</li>
        <li>Your contact number is only used for delivery OTP verification and WhatsApp updates.</li>
      </ul>
    `
  },
  terms: {
    title: 'Terms & Conditions',
    html: `
      <h3>General Terms</h3>
      <p>By using the FlexDrop website and placing an order, you agree to our fair usage and delivery terms.</p>
      <h3>Delivery Guidelines</h3>
      <ul>
        <li>Free delivery applies on order values above ₹999. Orders below ₹999 incur a standard ₹40 delivery fee.</li>
        <li>Delivery addresses must be located within our active serviceable PIN codes.</li>
        <li>Restricted items: We do NOT deliver alcohol, tobacco, narcotics, prescription-only medicines, or hazardous substances.</li>
      </ul>
    `
  },
  return: {
    title: 'Return & Refund Policy',
    html: `
      <h3>Hassle-Free Returns</h3>
      <p>If any grocery or perishable item is received damaged, stale, or incorrect, you can request an instant return at your doorstep.</p>
      <h3>Refund Timeline</h3>
      <ul>
        <li>UPI & Net Banking refunds are credited back to the source account within 2–4 hours.</li>
        <li>Credit/Debit card refunds reflect in 3–5 business days.</li>
        <li>Cash on Delivery orders are instantly credited to your FlexDrop store credit or UPI.</li>
      </ul>
    `
  },
  contact: {
    title: 'Contact Us',
    html: `
      <h3>Get in Touch</h3>
      <p>Need assistance with your order or have product questions? We are available 7 days a week, 8:00 AM to 10:00 PM IST.</p>
      <div class="contact-row">
        <div class="contact-label">📞 Phone / WhatsApp</div>
        <div class="contact-val">+91 98765 43210</div>
      </div>
      <div class="contact-row">
        <div class="contact-label">✉️ Email</div>
        <div class="contact-val">support@flexdrop.in</div>
      </div>
      <div class="contact-row">
        <div class="contact-label">📍 Headquarters</div>
        <div class="contact-val">FlexDrop Logistics Hub, Bistupur, Jamshedpur, Jharkhand - 831001</div>
      </div>
    `
  }
};

window.openPolicy = function(type) {
  const data = policyContent[type];
  if (!data) return;

  const titleElem = document.getElementById('policyTitle');
  const bodyElem = document.getElementById('policyBody');
  const overlay = document.getElementById('policyOverlay');

  if (titleElem) titleElem.textContent = data.title;
  if (bodyElem) bodyElem.innerHTML = data.html;
  if (overlay) overlay.classList.add('open');
  syncDrawerOpenState();
};

window.closePolicy = function() {
  document.getElementById('policyOverlay')?.classList.remove('open');
  syncDrawerOpenState();
};

window.closePolicyIfBg = function(e) {
  if (e.target.id === 'policyOverlay') {
    closePolicy();
  }
};

/* ══════════════════════════════════════════════════════════════════
   10. INITIALIZATION
══════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  loadPersistedReviews();
  renderAllGrids();
  loadStoreState();
});

// Run immediate load and render
loadPersistedReviews();
renderAllGrids();
loadStoreState();
