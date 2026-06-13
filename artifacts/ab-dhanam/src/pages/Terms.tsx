import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Terms & Conditions</h1>
          <p className="text-primary-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Agreement to Terms</h2>
          <p>These Terms of Use constitute a legally binding agreement made between you and A.B. Dhanam Online Services, concerning your access to and use of the website as well as any other media form related, linked, or otherwise connected thereto.</p>
          
          <h2>Services Provided</h2>
          <p>We provide legal documentation and registration consultancy. However, the final approval of any registration lies with the respective government authorities. We ensure documents are prepared per legal standards but do not guarantee state processing times.</p>
          
          <h2>User Representation</h2>
          <p>By using the Site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete.</p>
          
          <h2>Contact Us</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at info@abdhanam.com.</p>
        </div>
      </div>
    </Layout>
  );
}
