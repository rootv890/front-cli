_Front-CLI_

#### Package Installation

```bash
npm i front-cli-p -g
```

#### Command

```bash
front-cli <project_path> <template_name>
```

eg:

```bash
front-cli my-vite vitejs
```

I often feel bored and frustrated when installing frameworks like Vite.js and Next.js because they ask a lot of questions during the setup process. Additionally, I find it difficult to remember the specific commands needed for each framework.

To simplify this process, I decided to create a simple Node.js CLI application that allows me to install both Vite.js and Next.js projects with a single command.

### Custom Commands

You can add your custom commands in commands.js file.

## Bug Fixes

1. Fix empty directory installation failure.
2. Fix current directory installation failure.

## Todo

1. ThreeJs with Vite plug custom Config. and Basic BoilerPlate

**Built by Prootv890**
