// Data source for dynamic rendering
window.EG_DATA = {
  navLinks: [
    { href: '#home', label: 'Home' },
    { href: '#packages', label: 'Packages' },
    { href: '#stats', label: 'Stats' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ],

  packages: [
    {
      id: 'nepalTours',
      image: 'assets/package/card1.jpg',
      title: '🌏 Nepal Tour Package.',
      subtitle: '5 Days, 4 Nights.',
      price: '৳ 54,999',
      oldPrice: '৳ 60,000',
      detailsHtml: `
        <h4 class="text-lg font-bold">Day 1</h4>
        <ul class="list-disc list-inside mb-4">
          <li>✈️Afternoon flight from <span class="font-semibold">Dhaka to Kathmandu.</span>.</li>
          <li>Arrive at Kathmandu Airport in the evening.</li>
          <li>Transfer to Nagarkot(approx. 2 hours).</li>
          <li>Hotel check-in and dinner.</li>
          <li>Overnight stay in Nagarkot.</li>
        </ul>
        <h4 class="text-lg font-bold">Day 2</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Early morning sunrise view from Nagarkot View Point.</li>
          <li>Return to hotel and have breakfast.</li>
          <li>Depart for Kathmandu.</li>
          <h4 class="font-semibold">Kathmandu City Tour:</h4>
          <li>🏰 Pashupatinath Temple.</li>
          <li>🐒 Swayambhunath (Monkey Temple).</li>
          <li>🏛 Kathmandu Durbar Square.</li>
          <li>Dinner in the evening.</li>
          <li>Overnight journey to Pokhara by bus.</li>
          <li>Night will be spent on the way.</li>
        </ul>
        <h4 class="text-lg font-bold">Day 3</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Early morning arrival in Pokhara, check-in & refresh at hotel.</li>
          <h4 class="font-semibold">After breakfast, explore Pokhara:</h4>
          <li>🌊 Davis Falls.</li>
          <li>🕳 Gupteshwor Cave.</li>
          <li>🏛 Kathmandu Durbar Square.</li>
          <li>🚤 Boating on Fewa Lake.</li>
          <li>Afternoon walk around Lakeside, shopping or relaxing.</li>
          <li>Dinner and overnight stay in Pokhara.</li>
        </ul>
        <h4 class="text-lg font-bold">Day 4</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Very early morning sunrise view from Sarangkot (magnificent Himalayan view).</li>
          <li>Return to hotel and breakfast.</li>
          <li>Depart for Kathmandu (by bus/car – 7–8 hours).</li>
          <li>Evening arrival in Kathmandu, hotel check-in.</li>
          <li>Dinner and overnight stay in Kathmandu.</li>
        </ul>
        <h4 class="text-lg font-bold">Day 5</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Breakfast and some free time for shopping at Thamel Market.</li>
          <li>Airport transfer</li>
          <li>Flight from <span class="font-semibold">Kathmandu → Dhaka.</span></li>
        </ul>
      `
    },
    {
      id: 'msTours',
      image: 'assets/package/card2.jpg',
      title: '🌴 Maldives & Sri Lanka Exclusive Group Tour.',
      subtitle: '6 Nights 7 Days | Maldives(3 nights) + Sri Lanka(3 nights)',
      price: '৳ 94, 999',
      oldPrice: '৳ 100,000',
      detailsHtml: `
        <h4 class="text-lg font-bold">✈️ Flight</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Return ticket with Indigo Airlines Or Srilankan Airlines</li>
          <li>Dhaka → Maldives → Sri Lanka → Dhaka</li>
        </ul>
        <h4 class="text-lg font-bold">🏨 Hotel Stay</h4>
        <ul class="list-disc list-inside mb-4">
          <ul class="list-disc list-inside mb-4">
            <h4 class="font-bold">Sri Lanka</h4>
            <li>Huluhumale(3 nights at a 3-star hotel)</li>
            <li><span class="font-semibold">Hotel:</span> Huvan Beach Hotel, Planktos Beach or Similar.</li>
          </ul>
          <ul class="list-disc list-inside mb-4">
            <h4 class="font-bold">Maldives</h4>
            <li>Colombo(1 nights at a 3-star hotel)</li>
            <li>Kandy (2 nights at a 3-star hotel)</li>
            <li><span class="font-semibold">Colombo Hotels:</span> Lafala Hotel & Service Apartment, GSH Colombo,Pearl City Hotel or Similar.
            <li><span class="font-semibold">Kandy Hotels:</span>Galaxy City hotel, Rivora Gallery, Nature Walk resort or Similar.</li>
          </ul>
        </ul>
        <h4 class="text-lg font-bold">🚗Transport</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Airport pick-up and drop-off</li>
          <li>Colombo–Kandy–Colombo transfer</li>
        </ul>
        <h4 class="text-lg font-bold">Meals</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Daily breakfast.</li>
        </ul>
        <h4 class="text-lg font-bold">Taxes & Charges.</h4>
        <ul class="list-disc list-inside mb-4">
          <li>All taxes and charges in Maldives and Sri Lanka included.</li>
        </ul>
        <h4 class="text-lg font-bold">🐘Kandy Tour Highlights(Included):</h4>
        <ul class="list-disc list-inside mb-4">
          <li>🌿 Pinnawala Elephant Orphanage.</li>
          <li>🌶 Spice Garden</li>
          <li>🌸 Royal Botanical Garden</li>
          <li>🌊 Kandy Lake</li>
          <li>🕌 Temple of the Tooth</li>
          <li>📸 Kandy Viewpoint</li>
        </ul>
        <h4 class="text-lg font-bold">🌄Nuwara Eliya Tour Highlights(Included):</h4>
        <ul class="list-disc list-inside mb-4">
          <li>💦 Ramboda Waterfalls & Tea Plantations</li>
          <li>🍃 Ceylon Tea Museum</li>
          <li>🏡 Little England & Colonial Architecture</li>
          <li>🚣 Lake Gregory</li>
          <li>🌺 Victoria Park, Golf Club & Historic Post Office</li>
        </ul>
        <h4 class="text-lg font-bold text-red-600">🌞Top Attractions in Maldives(Optional – at personal expense):</h4>
        <ul class="list-disc list-inside mb-4">
          <li>🏝 Resort Day Tour (3, 4 & 5-star resorts)</li>
          <li>🚤 Parasailing, Jet Ski, Fun Tube, Kayaking</li>
          <li>🐠 Nems Tour, Fish Tank, Shipwreck Exploration</li>
          <li>🏖 Gili Gili Island, Male & Hulhumale City Tour</li>
          <li>🐬 Stingray Point, Coral Reef</li>
          <li>🎁 Souvenir Street, Artificial Beach, Surfing Point</li>
        </ul>
        <h4 class="text-lg font-bold text-red-600">❌ Not Included (Personal Expenses)</h4>
        <ul class="list-disc list-inside">
          <li>Sri Lanka Visa Fee: $25 (approx. BDT 3,550)</li>
          <li>Lunch and Dinner</li>
          <li>Personal shopping & miscellaneous expenses</li>
        </ul>
      `
    },
    {
      id: 'umrahGroups',
      image: 'assets/package/makkah.jpg',
      title: '🕋 Umrah Group – September 2025',
      subtitle: '👥 35 Seats Available',
      price: '৳ 149,999',
      oldPrice: '৳ 155,000',
      detailsHtml: `
        <h4 class="text-lg font-bold">✈️ Flight: (Transit)</h4>
        <ul class="list-disc list-inside mb-4">
          <li>➡️ Dhaka → Jeddah: 1 hr 17 min Transit (via Kuwait) </li>
          <li>➡️ Madinah → Dhaka: 1 hr 30 min Transit (via Kuwait)</li>
        </ul>
        <h4 class="text-lg font-bold">🏨 Hotel Stay</h4>
        <ul class="list-disc list-inside mb-4">
          <ul class="list-disc list-inside mb-4">
            <h4 class="font-bold">🏨 Makkah Hotel:</h4>
            <li>1000 meters from Haram | 10 Nights </li>
          </ul>
          <ul class="list-disc list-inside mb-4">
            <h4 class="font-bold">🏨 Madinah Hotel: </h4>
            <li> 500 meters from Masjid An-Nabawi | 3 Nights </li>
          </ul>
        </ul>
        <ul class="list-disc list-inside mb-4">
          <li>🛏️ Room Sharing Basis </li>
          <li>🍽️ Without Food (Optional) </li>
          <li>🚌 Full Transport Included </li>
          <li>🕵️‍♂️ Guide & Jiyarah Included</li>
        </ul>
        <h4 class="text-lg font-bold text-red-600">Extra add-on</h4>
        <ul class=" list-disc list-inside mb-4">
          <li>🍱 Food Add-on: Extra 10,000/- (Optional)</li>
        </ul>
      `
    },
    {
      id: 'placeholder1',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2064&auto=format&fit=crop',
      title: '🌏 China Tour - 7 Days, 6 Nights',
      subtitle: '',
      price: '৳ --, ---',
      oldPrice: '৳ --,---',
      unavailable: true
    },
    {
      id: 'placeholder2',
      image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2070&auto=format&fit=crop',
      title: "🌏 Canada Tour - 6 Days, 5 Nights",
      subtitle: '',
      price: '৳ --, ---',
      oldPrice: '৳ --,---',
      unavailable: true
    },
    {
      id: 'placeholder3',
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2070&auto=format&fit=crop',
      title: "🌏 Thailand Tour - 7 Days, 6 Nights",
      subtitle: '',
      price: '৳ --, ---',
      oldPrice: '৳ --,---',
      unavailable: true
    }
  ],

  gallery: [
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop',
    'assets/trip gallery/trip 5 .jpg',
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop',
    'assets/trip gallery/trip 7.jpg',
    'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?q=80&w=2067&auto=format&fit=crop',
    'assets/trip gallery/trip 9.jpg',
    'assets/trip gallery/trip 10.jpg',
    'assets/trip gallery/trip 11.jpg',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop'
  ],

  reviews: [
    {
      name: 'Nusrat Jahan',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: "Seamless experience! They handled everything from hotel to transport. Our Cox's Bazar trip was unforgettable.",
      stars: '★★★★★'
    },
    {
      name: 'Rakib Hasan',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      text: 'Quick responses and great value for money. Highly recommend their Bandarban package!',
      stars: '★★★★★'
    },
    {
      name: 'Tania Karim',
      avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: "Loved the Saint Martin's itinerary. Clean hotels, friendly guides, and tasty food options.",
      stars: '★★★★★'
    },
    {
      name: 'Shahriyar Alam',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      text: 'Their team made our visa and hotel bookings super easy for our Thailand trip.',
      stars: '★★★★★'
    }
  ]
};


