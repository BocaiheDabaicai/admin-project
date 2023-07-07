import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
//@ts-ignore
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        createSvgIconsPlugin({
            //@ts-ignore
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]',
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src") // 配置路径引入别名
        }
    }
})
