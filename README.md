# next tailwind ts boilerplate

![preview](https://i.ibb.co/Ybnyzm6/boilerplate-cortesdev.jpg)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcortesdev%2Fnext-tailwind-boilerplate)

## Stack:

- NextJS
- TailwindCSS
- Typescript
- Dark Mode Support
- ESLint + Prettier Config
- Husky
- Self-Hosted Inter Font

Under the _components_ folder, use Container for each of your pages - as it provides a reusable starting point for every page.

```jsx
<Container>...pageElements</Container>
```

1. With 'Clone' repository
   ![preview](https://i.ibb.co/Ybnyzm6/boilerplate-cortesdev.jpg)

   2. Clone the project

```bash
# http
git clone https://github.com/cortesdev/next-tailwind-boilerplate.git
```

```bash
# ssh
git clone git@github.com:cortesdev/next-tailwind-boilerplate.git
```

3. With `create-next-app`

```bash
npx create-next-app -e https://github.com/cortesdev/next-tailwind-boilerplate my-project
```

Install the required packages and run the template

```bash
cd my-project
yarn install
```

## Included

### Custom classNames function

> Under `/lib/classNames`

### Packages

1. Next-themes: An abstraction for themes in your Next.js app.
2. react-use: react-hooks

### Custom globals.css

1. custom underline
2. vercel navbar
3. removes firefox, edge and ie. bugs with overflows

### Absolute Imports

```tsx
import TextField from '../../../components/TextField.tsx'
```

changes to

```tsx
import TextField from 'components/TextField.tsx'
```

### SEO optimization found in `Container.tsx`

### Folder structuring & organization

> Under `/components/` & `/public/`

### Self Hosted Inter Font

> Under `/public/fonts/`

### 404 Page

### Favicons and more configs

> Under `/public/static/favicons/`

![preview](https://i.ibb.co/C5G8hQv/Group-4.jpg)
