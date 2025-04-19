import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,

  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  async redirects() {
    return [
      {
        source:'/',
        destination:'/gettingstarted',
        permanent:true
      }
    ]
  }
});
