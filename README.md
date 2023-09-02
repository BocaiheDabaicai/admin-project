## 项目总结

---

#### 一. 解决Vue3下组件无法命名的问题

1、安装

```bash
npm i vite-plugin-vue-setup-extend -D
```

2、配置 ( vite.config.ts )

```js
import { defineConfig } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig({
  plugins: [ VueSetupExtend() ]
})
```

3、使用

```html
<script lang="ts" setup name="demo">

</script>
```
