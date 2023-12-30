import { UserConfig, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  const host: UserConfig['server']['host'] = (() => {
    if (!('NODE_ENV' in env)) {
      return undefined
    }
    if (['production', 'development'].includes(env.NODE_ENV)) {
      return '0.0.0.0'
    }
    return undefined
  })()

  const vitePort: UserConfig['server']['port'] = (() => {
    if (!('VITE_PORT' in env)) {
      return undefined
    }

    const port = Number(env.VITE_PORT)
    if (Number.isNaN(port)) {
      return undefined
    }

    return port
  })()

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [
      react(),
      tsconfigPaths({
        root: './../',
      }),
    ],
    server: {
      host: host,
      port: vitePort,
    },
  }
})
