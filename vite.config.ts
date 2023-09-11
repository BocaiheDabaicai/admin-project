import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
//@ts-ignore
import path from 'path'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import {viteMockServe} from "vite-plugin-mock";
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    // 获取对应环境下的文件
    let env = loadEnv(mode, process.cwd())
    console.log(env)
    console.log(env.VITE_APP_BASE_API)
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
            // 使 vue3组件 可以使用命名属性
            VueSetupExtend()
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
        },
        server: {
            proxy: {
                [env.VITE_APP_BASE_API]: {
                    target: env.VITE_SERVE,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    }
})
