# NAWRAS Corporate Website

موقع النورس للشحن والتوصيل في ليبيا، مبني على React + TypeScript + Vite ومهيأ للنشر عبر GitHub Pages في مستودع `aahhhjk99-pixel/NAWRAS`.

## الهوية والحركة

يحافظ الموقع على البنفسجي والذهبي المستخدمين في القنوات الرسمية للنورس، مع مكونات محلية بأسلوب Magic UI، وMotion للتفاعلات، وGSAP/ScrollTrigger لكشف الأقسام، وLenis للتمرير، وLottie لحركة مسار شحنة خفيفة. أزيل Framer Motion لتجنب تكرار أنظمة الحركة.

## التشغيل

```bash
npm ci
npm run dev
```

للتأكد من البناء الإنتاجي:

```bash
npm run typecheck
npm run build
```

يتم النشر تلقائياً من فرع `main` عبر `.github/workflows/deploy.yml` إلى GitHub Pages. عند تفعيل Pages من إعدادات المستودع، استخدم مصدر النشر `GitHub Actions`.
