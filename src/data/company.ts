export type Region = 'الغربية' | 'الجبل الغربي' | 'الوسطى' | 'الجنوبية' | 'الشرقية';

export type CityRate = {
  city: string;
  region: Region;
  price: number;
  delivery: string;
  trips: string;
};

export type Branch = {
  name: string;
  city: string;
  phone: string;
  whatsapp: boolean;
};

export const company = {
  nameAr: 'النورس للشحن والتوصيل',
  nameEn: 'Al Nawras Delivery & Shipping',
  email: 'info@alnawras.ly',
  mainPhone: '0911885353',
  facebook: 'https://www.facebook.com/share/1EN2P9Sda6/',
  tiktok: 'https://www.tiktok.com/@alnuwras.ly?_r=1&_t=ZS-9Bb0FN2ugD4',
  traderApp: 'https://play.google.com/store/apps/details?id=com.nawris.client',
  courierApp: 'https://play.google.com/store/apps/details?id=swift.captain.com',
  // رابط App Store لم يرد في البيانات؛ لا نضع رابطاً تخمينياً.
  appStore: '',
  website: 'https://alnuwrasdelivery.com/',
  founded: '2019',
  stats: [
    { value: '+10,000', labelAr: 'عميل', labelEn: 'Customers' },
    { value: '+6M', labelAr: 'شحنة', labelEn: 'Shipments' },
    { value: '3,200', labelAr: 'مندوب', labelEn: 'Couriers' },
    { value: '20+', labelAr: 'مدينة ليبية', labelEn: 'Libyan cities' },
  ],
};

export const services = [
  { icon: 'package', title: 'التوصيل', titleEn: 'Delivery', text: 'توصيل طلبات المتاجر إلى زبائنها في مختلف المدن الليبية.', textEn: 'Delivering store orders to customers across Libyan cities.' },
  { icon: 'truck', title: 'التجميع', titleEn: 'Collection', text: 'استلام الطرود من المتجر أو استقبالها في أحد فروع النورس.', textEn: 'Pickup from the store or drop-off at a Nawras branch.' },
  { icon: 'warehouse', title: 'التخزين', titleEn: 'Storage', text: 'خدمة تخزين تساعد المتاجر على تنظيم تجهيز الطلبات.', textEn: 'Storage support to help stores organize order fulfilment.' },
  { icon: 'wallet', title: 'التسويات', titleEn: 'Settlements', text: 'تحصيل قيمة الطلبات من الزبائن وتسليم مستحقات المتاجر وفق آلية الشركة.', textEn: 'Collecting order payments and settling merchant proceeds through the company process.' },
  { icon: 'box', title: 'التغليف العادي', titleEn: 'Standard packaging', text: 'تجهيز الطرود بتغليف مناسب لعملية النقل والتوصيل.', textEn: 'Preparing parcels with suitable packaging for transport.' },
  { icon: 'shield-check', title: 'التغليف الآمن', titleEn: 'Secure packaging', text: 'عناية إضافية بتغليف الطرود للمساعدة في حمايتها أثناء النقل.', textEn: 'Extra packaging care to help protect parcels in transit.' },
];

export const branches: Branch[] = [
  { name: 'فرع المعري', city: 'طرابلس', phone: '0941885353', whatsapp: true },
  { name: 'فرع المعري', city: 'طرابلس', phone: '0915322576', whatsapp: true },
  { name: 'فرع زناتة', city: 'طرابلس', phone: '0911885252', whatsapp: true },
  { name: 'فرع جنزور', city: 'طرابلس', phone: '0911883131', whatsapp: true },
  { name: 'فرع حي دمشق', city: 'طرابلس', phone: '0921885353', whatsapp: true },
  { name: 'فرع غرغور', city: 'طرابلس', phone: '0911885353', whatsapp: true },
  { name: 'فرع ترهونة', city: 'ترهونة', phone: '0918750015', whatsapp: false },
  { name: 'فرع الخمس', city: 'الخمس', phone: '0923776369', whatsapp: false },
  { name: 'فرع سبها', city: 'سبها', phone: '0921885454', whatsapp: false },
  { name: 'فرع أجدابيا', city: 'أجدابيا', phone: '0921885757', whatsapp: false },
  { name: 'فرع زليتن', city: 'زليتن', phone: '0930043408', whatsapp: false },
  { name: 'فرع مصراتة', city: 'مصراتة', phone: '0920770200', whatsapp: false },
  { name: 'فرع بنغازي', city: 'بنغازي', phone: '0911885151', whatsapp: false },
  { name: 'فرع استقبال بنغازي', city: 'بنغازي', phone: '0921885252', whatsapp: false },
  { name: 'فرع الزاوية', city: 'الزاوية', phone: '0915372042', whatsapp: false },
];

export const rates: CityRate[] = [
  // المنطقة الغربية
  { city: 'طرابلس', region: 'الغربية', price: 15, delivery: 'خلال 24 ساعة', trips: 'يومياً' },
  { city: 'ضواحي طرابلس', region: 'الغربية', price: 20, delivery: 'خلال 24 ساعة', trips: 'يومياً' },
  { city: 'مصراتة', region: 'الغربية', price: 20, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'زليتن', region: 'الغربية', price: 20, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'الخمس', region: 'الغربية', price: 20, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'الزاوية', region: 'الغربية', price: 20, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'ورشفانة', region: 'الغربية', price: 25, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'صرمان', region: 'الغربية', price: 25, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'صبراتة', region: 'الغربية', price: 25, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'العجيلات', region: 'الغربية', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'زوارة', region: 'الغربية', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'زلطان', region: 'الغربية', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'رقدالين', region: 'الغربية', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  // الجبل الغربي
  { city: 'غريان', region: 'الجبل الغربي', price: 25, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'ككلة', region: 'الجبل الغربي', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'الرحيبات', region: 'الجبل الغربي', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'الزنتان', region: 'الجبل الغربي', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'نالوت', region: 'الجبل الغربي', price: 40, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'تيجي', region: 'الجبل الغربي', price: 40, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'الحرابة', region: 'الجبل الغربي', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'الرياينة', region: 'الجبل الغربي', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'يفرن', region: 'الجبل الغربي', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'جادو', region: 'الجبل الغربي', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'قلعة', region: 'الجبل الغربي', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  // المنطقة الوسطى
  { city: 'ترهونة', region: 'الوسطى', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'بني وليد', region: 'الوسطى', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'مسلاتة', region: 'الوسطى', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'سرت', region: 'الوسطى', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'تاورغاء', region: 'الوسطى', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'البريقة', region: 'الوسطى', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'بن جواد', region: 'الوسطى', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  // المنطقة الجنوبية
  { city: 'الجفرة', region: 'الجنوبية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'هون', region: 'الجنوبية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'سوكنة', region: 'الجنوبية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'زلة', region: 'الجنوبية', price: 40, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'براك الشاطئ', region: 'الجنوبية', price: 35, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'سبها', region: 'الجنوبية', price: 30, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'أوباري', region: 'الجنوبية', price: 45, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'الكفرة', region: 'الجنوبية', price: 45, delivery: '2–4 أيام', trips: 'يومياً' },
  { city: 'أم الأرانب', region: 'الجنوبية', price: 45, delivery: '2–4 أيام', trips: 'يومياً' },
  { city: 'تراغن', region: 'الجنوبية', price: 45, delivery: '2–4 أيام', trips: 'يومياً' },
  { city: 'مرزق', region: 'الجنوبية', price: 45, delivery: '2–4 أيام', trips: 'يومياً' },
  { city: 'غات', region: 'الجنوبية', price: 50, delivery: '2–4 أيام', trips: 'يومياً' },
  { city: 'ودان', region: 'الجنوبية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  // المنطقة الشرقية
  { city: 'بنغازي', region: 'الشرقية', price: 25, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'ضواحي بنغازي', region: 'الشرقية', price: 25, delivery: '24–48 ساعة', trips: 'يومياً' },
  { city: 'أجدابيا', region: 'الشرقية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'المرج', region: 'الشرقية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'البيضاء', region: 'الشرقية', price: 35, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'قمينس', region: 'الشرقية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'توكرة', region: 'الشرقية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'شحات', region: 'الشرقية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'سوسة', region: 'الشرقية', price: 30, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'درنة', region: 'الشرقية', price: 40, delivery: '48–72 ساعة', trips: 'يومياً' },
  { city: 'طبرق', region: 'الشرقية', price: 35, delivery: '48–72 ساعة', trips: 'يومياً' },
];

export const terms = [
  'أسعار التوصيل المعروضة هي التعرفة الأساسية للطرد حسب المدينة، وقد تختلف الرسوم في الحالات الخاصة وفق سياسة الشركة.',
  'قد تُطبق تكلفة إضافية على الطرود كبيرة الحجم أو التي تتطلب معالجة خاصة، ويتم توضيحها وفق إجراءات الشركة.',
  'مدة التوصيل تقديرية وقد تتأثر بالظروف التشغيلية أو الطقس أو الطرق أو العوامل الخارجة عن السيطرة.',
  'يجب على المتجر تقديم بيانات المستلم ورقم هاتفه وعنوانه بصورة صحيحة وكاملة.',
  'يجب تجهيز الطرد وتغليفه بما يناسب طبيعة محتوياته، ويمكن طلب خدمات التغليف المتاحة من النورس.',
  'تُدار عمليات تحصيل قيمة الطلبات وتسوية مستحقات المتاجر وفق الإجراءات والاتفاق المعتمد مع الشركة.',
  'تُمنع الشحنات المخالفة للقوانين واللوائح الليبية أو التي تشكل خطراً على الأشخاص أو الممتلكات.',
  'تتم متابعة حالة الشحنات من خلال تطبيق النورس المخصص للتجار، بحسب الصلاحيات والخدمات المتاحة في التطبيق.',
  'للاستفسار عن حالة شحنة أو تقديم ملاحظة، يرجى التواصل مع الفرع أو قنوات الاتصال الرسمية للشركة.',
];
