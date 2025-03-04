import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { supabase } from "./lib/supabaseClient";

const app = createApp(App);
app.use(router);
app.provide('supabase', supabase);
app.mount("#app");