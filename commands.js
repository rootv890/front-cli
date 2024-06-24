const commands = {
  nextjs: {
    name: "nextjs",
    desc: "Create a Next.js project",
    command: (projectName) =>
      `pnpm create next-app ${projectName} --ts --no-js --tailwind --eslint --app --no-src-dir --default-import-alias   --use-pnpm --no-import-alias `,
  },
  vitejs: {
    name: "vitejs",
    desc: "Create a Vanilla JS project",
    command: (projectName) =>
      `
        pnpm create vite ${projectName} --template vanilla  && cd ${projectName} && pnpm install
    `,
  },
  vitereact: {
    name: "Vite React",
    desc: "Create a Vite React Project",
    command: (projectName) =>
      `
          pnpm create vite ${projectName} --template react-ts  && cd ${projectName} && pnpm install
      `,
  },
  vitereactjs: {
    name: "Vite React",
    desc: "Create a Vite React Project",
    command: (projectName) =>
      `
          pnpm create vite ${projectName} --template react  && cd ${projectName} && pnpm install
      `,
  },
  //   Can add custom commands here
};
module.exports = commands;
