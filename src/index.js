// Minimal Cloudflare Worker entrypoint
// Replace this handler with your application logic as needed
export default {
  async fetch(request, env) {
    return new Response("Hello from Luis Ayala's Worker! Replace with your app logic.", {
      headers: { "content-type": "text/plain;charset=UTF-8" }
    });
  }
};
