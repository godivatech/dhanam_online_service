import { Layout } from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Introduction</h2>
          <p>At A.B. Dhanam Online Services, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          
          <h2>Information We Collect</h2>
          <p>We collect information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, or otherwise contact us.</p>
          
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect or receive to communicate with you, to process your requests for legal documentation and registration services, and for other business purposes.</p>
          
          <h2>Contact Us</h2>
          <p>If you have questions or comments about this policy, you may contact us at info@abdhanam.com.</p>
        </div>
      </div>
    </Layout>
  );
}
