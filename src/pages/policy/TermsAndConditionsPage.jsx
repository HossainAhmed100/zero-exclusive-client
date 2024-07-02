
export default function TermsAndConditionsPage() {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Terms and Conditions</h1>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          Welcome to our online ecommerce shop. By accessing or using our website, you agree to be bound by these terms
          and conditions, our privacy policy, and any additional terms and conditions that may apply to specific sections
          of our website or to products and services available through the website.
        </p>
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">Payment Methods</h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              We accept a variety of payment methods, including credit cards, debit cards, and PayPal. All transactions
              are processed securely and in accordance with industry standards.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              We reserve the right to add, modify, or remove payment methods at any time without prior notice.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">Shipping Policies</h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              We offer a variety of shipping options, including standard, express, and international shipping. Shipping
              times and costs may vary depending on the destination and the selected shipping method.
            </p>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              We are not responsible for any delays or issues that may arise during the shipping process. If you have any
              questions or concerns about your order, please contact our customer service team.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              We reserve the right to change our shipping policies at any time without prior notice.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">Returns and Refunds</h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              We understand that sometimes you may need to return an item. We offer a 30-day return policy for most
              products, subject to certain conditions. Please refer to our returns and refunds policy for more
              information.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              We reserve the right to modify our returns and refunds policy at any time without prior notice.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">Privacy Policy</h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              We take the privacy of our customers very seriously. We collect and use personal information in accordance
              with our privacy policy, which is available on our website. By using our website, you consent to the
              collection and use of your personal information as described in our privacy policy.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              We reserve the right to update our privacy policy at any time without prior notice.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">Intellectual Property Rights</h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              All content on our website, including but not limited to text, graphics, logos, images, and software, is the
              property of our company or our licensors and is protected by copyright, trademark, and other intellectual
              property laws.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              You may not modify, copy, distribute, transmit, display, reproduce, or create derivative works from our
              website or its contents without our prior written permission.
            </p>
          </div>
        </div>
      </div>
    )
  }