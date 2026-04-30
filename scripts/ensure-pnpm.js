const userAgent = process.env.npm_config_user_agent ?? '';

if (!userAgent.startsWith('pnpm/')) {
  const detected = userAgent.split(' ')[0] || 'unknown package manager';

  console.error('This project uses pnpm for dependency management.');
  console.error('Run `corepack enable`, then use `pnpm install`.');
  console.error(`Detected: ${detected}`);
  process.exit(1);
}
