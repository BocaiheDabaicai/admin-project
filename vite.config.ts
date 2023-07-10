import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
//@ts-ignore
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import {viteMockServe} from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({command})=>{
    return {
        plugins: [
            vue(),
            createSvgIconsPlugin({
                //@ts-ignore
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[dir]-[name]',
            }),
            viteMockServe({
                //@ts-ignore
                // 保证开发阶段使用 mock
                localEnabled: command === 'serve',
            }),
        ],
        resolve: {
            alias: {
                "@": path.resolve("./src") // 配置路径引入别名
            }
        },
        // scss 全局变量配置
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: '@import "./src/styles/variable.scss";',
                },
            },
        }
    }
})
