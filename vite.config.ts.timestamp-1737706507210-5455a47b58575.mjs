// vite.config.ts
import { resolve } from "path";
import vue from "file:///Users/danielchan/thePlant/vuetify-pro-tiptap/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.13_@types+node@22.10.7_sass@1.60.0__vue@3.5.13_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { PluginPure } from "file:///Users/danielchan/thePlant/vuetify-pro-tiptap/node_modules/.pnpm/rollup-plugin-pure@0.2.1_rollup@3.29.5/node_modules/rollup-plugin-pure/dist/index.mjs";
import { Vuetify3Resolver } from "file:///Users/danielchan/thePlant/vuetify-pro-tiptap/node_modules/.pnpm/unplugin-vue-components@0.27.5_@babel+parser@7.26.5_rollup@3.29.5_vue@3.5.13_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import Components from "file:///Users/danielchan/thePlant/vuetify-pro-tiptap/node_modules/.pnpm/unplugin-vue-components@0.27.5_@babel+parser@7.26.5_rollup@3.29.5_vue@3.5.13_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { defineConfig } from "file:///Users/danielchan/thePlant/vuetify-pro-tiptap/node_modules/.pnpm/vite@5.4.13_@types+node@22.10.7_sass@1.60.0/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/danielchan/thePlant/vuetify-pro-tiptap/node_modules/.pnpm/vite-plugin-dts@4.5.0_@types+node@22.10.7_rollup@3.29.5_typescript@5.5.4_vite@5.4.13_@types+node@22.10.7_sass@1.60.0_/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var dependencies = {
  "@tiptap/core": "^2.11.2",
  "@tiptap/extension-blockquote": "^2.11.2",
  "@tiptap/extension-bold": "^2.11.2",
  "@tiptap/extension-bullet-list": "^2.11.2",
  "@tiptap/extension-character-count": "^2.11.2",
  "@tiptap/extension-code": "^2.11.2",
  "@tiptap/extension-code-block": "^2.11.2",
  "@tiptap/extension-color": "^2.11.2",
  "@tiptap/extension-document": "^2.11.2",
  "@tiptap/extension-dropcursor": "^2.11.2",
  "@tiptap/extension-focus": "^2.11.2",
  "@tiptap/extension-font-family": "^2.11.2",
  "@tiptap/extension-gapcursor": "^2.11.2",
  "@tiptap/extension-hard-break": "^2.11.2",
  "@tiptap/extension-heading": "^2.11.2",
  "@tiptap/extension-highlight": "^2.11.2",
  "@tiptap/extension-history": "^2.11.2",
  "@tiptap/extension-horizontal-rule": "^2.11.2",
  "@tiptap/extension-image": "^2.11.2",
  "@tiptap/extension-italic": "^2.11.2",
  "@tiptap/extension-link": "^2.11.2",
  "@tiptap/extension-list-item": "^2.11.2",
  "@tiptap/extension-mention": "^2.11.2",
  "@tiptap/extension-ordered-list": "^2.11.2",
  "@tiptap/extension-paragraph": "^2.11.2",
  "@tiptap/extension-placeholder": "^2.11.2",
  "@tiptap/extension-strike": "^2.11.2",
  "@tiptap/extension-subscript": "^2.11.2",
  "@tiptap/extension-superscript": "^2.11.2",
  "@tiptap/extension-table": "^2.11.2",
  "@tiptap/extension-table-cell": "^2.11.2",
  "@tiptap/extension-table-header": "^2.11.2",
  "@tiptap/extension-table-row": "^2.11.2",
  "@tiptap/extension-task-item": "^2.11.2",
  "@tiptap/extension-task-list": "^2.11.2",
  "@tiptap/extension-text": "^2.11.2",
  "@tiptap/extension-text-align": "^2.11.2",
  "@tiptap/extension-text-style": "^2.11.2",
  "@tiptap/extension-underline": "^2.11.2",
  "@tiptap/html": "^2.11.2",
  "@tiptap/pm": "^2.11.2",
  "@tiptap/vue-3": "^2.11.2"
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/danielchan/thePlant/vuetify-pro-tiptap";
var deps = Object.keys(dependencies).reduce((result, k) => {
  const ignores = ["@tiptap/vue-3"];
  if (ignores.includes(k)) return result;
  const pattern = /[`~!@#$^\-&*()=|{}':;',\\[\].<>/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
  result[k] = k.replace(pattern, "");
  return result;
}, {});
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: void 0,
      dts: "types/components.d.ts",
      resolvers: [Vuetify3Resolver()]
    }),
    PluginPure({
      functions: ["Mark.create", "Extension.create", "Node.create"]
    }),
    dts({
      insertTypesEntry: true
    })
  ],
  optimizeDeps: {
    include: ["vue", "vuetify"]
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    outDir: "lib",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "VuetifyProTiptap"
    },
    rollupOptions: {
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          vuetify: "Vuetify",
          vuetifyx: "Vuetifyx",
          "vuetify/components": "VuetifyComp"
        }
      },
      external: ["vue", "vuetify", "vuetifyx", "vuetify/components"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2RhbmllbGNoYW4vdGhlUGxhbnQvdnVldGlmeS1wcm8tdGlwdGFwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZGFuaWVsY2hhbi90aGVQbGFudC92dWV0aWZ5LXByby10aXB0YXAvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2RhbmllbGNoYW4vdGhlUGxhbnQvdnVldGlmeS1wcm8tdGlwdGFwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiXG5pbXBvcnQgeyBQbHVnaW5QdXJlIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tcHVyZVwiXG5pbXBvcnQgeyBWdWV0aWZ5M1Jlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiXG5pbXBvcnQgeyBkZXBlbmRlbmNpZXMgfSBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIlxuXG5jb25zdCBkZXBzID0gT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKS5yZWR1Y2UoKHJlc3VsdCwgaykgPT4ge1xuICBjb25zdCBpZ25vcmVzOiBzdHJpbmdbXSA9IFtcIkB0aXB0YXAvdnVlLTNcIl1cbiAgaWYgKGlnbm9yZXMuaW5jbHVkZXMoaykpIHJldHVybiByZXN1bHRcblxuICBjb25zdCBwYXR0ZXJuID1cbiAgICAvW2B+IUAjJF5cXC0mKigpPXx7fSc6OycsXFxcXFtcXF0uPD4vP35cdUZGMDFAI1x1RkZFNVx1MjAyNlx1MjAyNiYqXHVGRjA4XHVGRjA5XHUyMDE0XHUyMDE0fHt9XHUzMDEwXHUzMDExJ1x1RkYxQlx1RkYxQVwiXCInXHUzMDAyXHVGRjBDXHUzMDAxXHVGRjFGXFxzXS9nXG4gIC8vQHRzLWV4cGVjdC1lcnJvciBpZ25vcmVcbiAgcmVzdWx0W2tdID0gay5yZXBsYWNlKHBhdHRlcm4sIFwiXCIpXG5cbiAgcmV0dXJuIHJlc3VsdFxufSwge30pXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkaXJzOiB1bmRlZmluZWQsXG4gICAgICBkdHM6IFwidHlwZXMvY29tcG9uZW50cy5kLnRzXCIsXG4gICAgICByZXNvbHZlcnM6IFtWdWV0aWZ5M1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgUGx1Z2luUHVyZSh7XG4gICAgICBmdW5jdGlvbnM6IFtcIk1hcmsuY3JlYXRlXCIsIFwiRXh0ZW5zaW9uLmNyZWF0ZVwiLCBcIk5vZGUuY3JlYXRlXCJdXG4gICAgfSkgYXMgUGx1Z2luT3B0aW9uLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlXG4gICAgfSlcbiAgXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogW1widnVlXCIsIFwidnVldGlmeVwiXVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIilcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImxpYlwiLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwiVnVldGlmeVByb1RpcHRhcFwiXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICAgIHZ1ZXRpZnk6IFwiVnVldGlmeVwiLFxuICAgICAgICAgIHZ1ZXRpZnl4OiBcIlZ1ZXRpZnl4XCIsXG4gICAgICAgICAgXCJ2dWV0aWZ5L2NvbXBvbmVudHNcIjogXCJWdWV0aWZ5Q29tcFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBleHRlcm5hbDogW1widnVlXCIsIFwidnVldGlmeVwiLCBcInZ1ZXRpZnl4XCIsIFwidnVldGlmeS9jb21wb25lbnRzXCJdXG4gICAgfVxuICB9XG59KVxuIiwgIntcbiAgXCJuYW1lXCI6IFwidnVldGlmeS1wcm8tdGlwdGFwXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInZlcnNpb25cIjogXCIyLjUuN1wiLFxuICBcInByaXZhdGVcIjogZmFsc2UsXG4gIFwicGFja2FnZU1hbmFnZXJcIjogXCJwbnBtQDguMTUuOFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidGlwdGFwIHRleHQgZWRpdG9yIG9uIHZ1ZWpzIGFuZCB2dWV0aWZ5XCIsXG4gIFwiYXV0aG9yXCI6IFwieWlrb3l1PDIyODIzNzMxODFAcXEuY29tPlwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8veWlrb3l1LmdpdGh1Yi5pby92dWV0aWZ5LXByby10aXB0YXAvXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20veWlrb3l1L3Z1ZXRpZnktcHJvLXRpcHRhcFwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwidnVlXCIsXG4gICAgXCJ2dWUuanNcIixcbiAgICBcInR5cGVzY3JpcHRcIixcbiAgICBcInZ1ZXRpZnlcIixcbiAgICBcInRpcHRhcFwiLFxuICAgIFwiZWRpdG9yXCIsXG4gICAgXCJtYXRlcmlhbCBkZXNpZ25cIixcbiAgICBcInd5c2l3eWdcIixcbiAgICBcIm1hcmtkb3duXCJcbiAgXSxcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi5cIjoge1xuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliL2luZGV4LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9saWIvdnVldGlmeS1wcm8tdGlwdGFwLmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2xpYi92dWV0aWZ5LXByby10aXB0YXAudW1kLmNqc1wiXG4gICAgfSxcbiAgICBcIi4vc3R5bGUuY3NzXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9saWIvc3R5bGUuY3NzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2xpYi9zdHlsZS5jc3NcIlxuICAgIH0sXG4gICAgXCIuL3N0eWxlcy9cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2xpYi9zdHlsZXMvXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2xpYi9zdHlsZXMvXCJcbiAgICB9XG4gIH0sXG4gIFwibWFpblwiOiBcIi4vbGliL3Z1ZXRpZnktcHJvLXRpcHRhcC51bWQuY2pzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9saWIvdnVldGlmeS1wcm8tdGlwdGFwLmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2xpYi9pbmRleC5kLnRzXCIsXG4gIFwiZmlsZXNcIjogW1xuICAgIFwiTElDRU5TRVwiLFxuICAgIFwiUkVBRE1FLm1kXCIsXG4gICAgXCJsaWJcIixcbiAgICBcInBhY2thZ2UuanNvblwiXG4gIF0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiXjE4LjAuMCB8fCBeMjAuMC4wIHx8ID49MjIuMC4wXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcIndhdGNoLWJ1aWxkXCI6IFwibm9kZW1vbiAtLXdhdGNoIHNyYyAtZSB0cyx2dWUsc2NzcyAtLWV4ZWMgJ3BucG0gYnVpbGQ6bGliJ1wiLFxuICAgIFwiYnVpbGQ6bGliXCI6IFwicG5wbSBjaGVjazp0eXBlcyAmJiB2aXRlIGJ1aWxkICAmJiBwbnBtIGJ1aWxkOnN0eWxlc1wiLFxuICAgIFwiYnVpbGQ6ZXhhbXBsZXNcIjogXCJwbnBtIGJ1aWxkOmxpYiAmJiBwbnBtIGNoZWNrOnR5cGVzICYmIHZpdGUgYnVpbGQgLS1jb25maWcgdml0ZS1leGFtcGxlLmNvbmZpZy50c1wiLFxuICAgIFwiYnVpbGQ6c3R5bGVzXCI6IFwicG5wbSBzYXNzIC4vc3JjL3N0eWxlczouL2xpYi9zdHlsZXMgLS1zdHlsZT1jb21wcmVzc2VkIC0tbm8tc291cmNlLW1hcFwiLFxuICAgIFwibGludDpjc3NcIjogXCJzdHlsZWxpbnQgKiovKi57Y3NzLGxlc3Msc2Nzcyx2dWV9XCIsXG4gICAgXCJsaW50OmpzXCI6IFwiZXNsaW50IC5cIixcbiAgICBcImxpbnQ6YWxsXCI6IFwiZXNsaW50IC4gJiBzdHlsZWxpbnQgKiovKi57Y3NzLGxlc3Msc2Nzcyx2dWV9XCIsXG4gICAgXCJsaW50OmZpeFwiOiBcImVzbGludCAuIC0tZml4ICYgc3R5bGVsaW50ICoqLyoue2NzcyxsZXNzLHNjc3MsdnVlfSAtLWZpeFwiLFxuICAgIFwiY29tbWl0XCI6IFwiY3pnXCIsXG4gICAgXCJjaGVjazp0eXBlc1wiOiBcInZ1ZS10c2MgLS1ub0VtaXQgLS1za2lwTGliQ2hlY2tcIixcbiAgICBcInB1c2hcIjogXCJwbnBtIGJ1aWxkOmxpYiAmJiBwbnBtIHB1Ymxpc2ggLS1uby1naXQtY2hlY2tzIC0tcmVnaXN0cnkgaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInZ1ZVwiOiBcIl4zLjIuMFwiLFxuICAgIFwidnVldGlmeVwiOiBcIl4zLjAuMFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0aXB0YXAvY29yZVwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLWJsb2NrcXVvdGVcIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1ib2xkXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tYnVsbGV0LWxpc3RcIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1jaGFyYWN0ZXItY291bnRcIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1jb2RlXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tY29kZS1ibG9ja1wiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLWNvbG9yXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tZG9jdW1lbnRcIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1kcm9wY3Vyc29yXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tZm9jdXNcIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1mb250LWZhbWlseVwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLWdhcGN1cnNvclwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLWhhcmQtYnJlYWtcIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1oZWFkaW5nXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24taGlnaGxpZ2h0XCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24taGlzdG9yeVwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLWhvcml6b250YWwtcnVsZVwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLWltYWdlXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24taXRhbGljXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tbGlua1wiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLWxpc3QtaXRlbVwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLW1lbnRpb25cIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1vcmRlcmVkLWxpc3RcIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1wYXJhZ3JhcGhcIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1wbGFjZWhvbGRlclwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLXN0cmlrZVwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLXN1YnNjcmlwdFwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLXN1cGVyc2NyaXB0XCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tdGFibGVcIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi10YWJsZS1jZWxsXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tdGFibGUtaGVhZGVyXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tdGFibGUtcm93XCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tdGFzay1pdGVtXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tdGFzay1saXN0XCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tdGV4dFwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLXRleHQtYWxpZ25cIjogXCJeMi4xMS4yXCIsXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi10ZXh0LXN0eWxlXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9leHRlbnNpb24tdW5kZXJsaW5lXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9odG1sXCI6IFwiXjIuMTEuMlwiLFxuICAgIFwiQHRpcHRhcC9wbVwiOiBcIl4yLjExLjJcIixcbiAgICBcIkB0aXB0YXAvdnVlLTNcIjogXCJeMi4xMS4yXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGFudGZ1L2VzbGludC1jb25maWdcIjogXCJeMy4xMS4yXCIsXG4gICAgXCJAbWRpL2pzXCI6IFwiXjcuNC40N1wiLFxuICAgIFwiQHR5cGVzL2xvZGFzaFwiOiBcIl40LjE3LjEzXCIsXG4gICAgXCJAdHlwZXMvbG9kYXNoLWVzXCI6IFwiXjQuMTcuMTJcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl41LjIuMVwiLFxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjExLjMuMFwiLFxuICAgIFwiQHlpa295dS9jb21taXRsaW50LWNvbmZpZ1wiOiBcIl4wLjIuMVwiLFxuICAgIFwiQHlpa295dS9zZW1hbnRpYy1yZWxlYXNlLWNvbmZpZ1wiOiBcIl4wLjEuM1wiLFxuICAgIFwiQHlpa295dS9zdHlsZWxpbnQtY29uZmlnXCI6IFwiXjAuMS4xXCIsXG4gICAgXCJjb252ZW50aW9uYWwtY2hhbmdlbG9nLWNvbnZlbnRpb25hbGNvbW1pdHNcIjogXCJeOC4wLjBcIixcbiAgICBcImN6LWdpdFwiOiBcIl4xLjExLjBcIixcbiAgICBcImN6Z1wiOiBcIl4xLjExLjBcIixcbiAgICBcImVzbGludFwiOiBcIl45LjE2LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tZm9ybWF0XCI6IFwiXjAuMS4zXCIsXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4zLjBcIixcbiAgICBcImh1c2t5XCI6IFwiXjkuMS43XCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xNS4yLjExXCIsXG4gICAgXCJsb2Rhc2hcIjogXCJeNC4xNy4yMVwiLFxuICAgIFwibG9kYXNoLWVzXCI6IFwiXjQuMTcuMjFcIixcbiAgICBcImxvZGFzaC11bmlmaWVkXCI6IFwiXjEuMC4zXCIsXG4gICAgXCJub2RlbW9uXCI6IFwiXjMuMS45XCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMy4yOS40XCIsXG4gICAgXCJyb2xsdXAtcGx1Z2luLXB1cmVcIjogXCJeMC4yLjFcIixcbiAgICBcInNhc3NcIjogXCIxLjYwLjBcIixcbiAgICBcInNlbWFudGljLXJlbGVhc2VcIjogXCJeMjQuMi4wXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiNS41LjRcIixcbiAgICBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzXCI6IFwiXjAuMjcuNVwiLFxuICAgIFwidml0ZVwiOiBcIl41LjQuMTFcIixcbiAgICBcInZpdGUtcGx1Z2luLWNoZWNrZXJcIjogXCJeMC44LjBcIixcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl40LjMuMFwiLFxuICAgIFwidnVlXCI6IFwiXjMuMi40N1wiLFxuICAgIFwidnVlLXRzY1wiOiBcIjIuMS42XCIsXG4gICAgXCJ2dWV0aWZ5XCI6IFwiXjMuNy41XCIsXG4gICAgXCJ4c3NcIjogXCJeMS4wLjE1XCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxTQUFTLGVBQWU7QUFDalYsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsd0JBQXdCO0FBQ2pDLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQWtDO0FBQzNDLE9BQU8sU0FBUzs7O0FDK0RkLG1CQUFnQjtBQUFBLEVBQ2QsZ0JBQWdC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
