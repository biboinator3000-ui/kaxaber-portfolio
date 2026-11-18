# React Developer Portfolio

თანამედროვე, სრულად რესპონსიული პირადი პორტფოლიო, შექმნილი Full Stack Development კურსის პრაქტიკული ამოცანებისთვის.

## ტექნოლოგიები

- React + Vite
- JavaScript
- Tailwind CSS v4 (Vite-ის ოფიციალური plugin ინტეგრაციით)
- React Router
- Fetch API და JSONPlaceholder

## გაშვება

```bash
npm install
npm run dev
```

პროდაქშენ build-ის შესამოწმებლად:

```bash
npm run build
npm run preview
```

## გვერდები

- `/` — მთავარი გვერდი, უნარები და რჩეული პროექტები
- `/projects` — კატეგორიებით გაფილტრული პროექტები
- `/contact` — ვალიდაციიანი დემო საკონტაქტო ფორმა

პირადი მონაცემები და სოციალური ბმულები მარტივად იცვლება `src/data/siteConfig.js` ფაილში, ხოლო პროექტები — `src/data/projects.js`-ში.
