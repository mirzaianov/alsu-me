const userAgent = process.env.npm_config_user_agent ?? '';
const execPath = process.env.npm_execpath ?? '';

const isPnpm =
  userAgent.startsWith('pnpm/') ||
  /[\\/]pnpm(?:\.c?js)?$/i.test(execPath) ||
  (process.env.VERCEL === '1' && userAgent === '');

if (!isPnpm) {
  const detected = userAgent.split(' ')[0] || 'unknown package manager';

  console.error('This project uses pnpm for dependency management.');
  console.error('Run `corepack enable`, then use `pnpm install`.');
  console.error(`Detected: ${detected}`);
  process.exit(1);
}
