import { Button } from "@nextui-org/react";

export default function CookiesPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookies Policy</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          At our e-commerce website, we use cookies to enhance your browsing experience and provide you with
          personalized content and features. Cookies are small text files that are stored on your device when you visit
          our site. They help us understand how you use our website, so we can improve our services and ensure you get
          the most out of your visit.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Necessary Cookies</h3>
              <p className="text-gray-500 dark:text-gray-400">
                These cookies are essential for the website to function properly. They enable you to navigate the site
                and access its features.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Analytical Cookies</h3>
              <p className="text-gray-500 dark:text-gray-400">
                These cookies help us understand how you and other visitors use our website, so we can improve its
                performance and user experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Marketing Cookies</h3>
              <p className="text-gray-500 dark:text-gray-400">
                These cookies are used to deliver relevant ads and content to you based on your interests and browsing
                behavior.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
              <p className="text-gray-500 dark:text-gray-400">
                These cookies allow the website to remember your preferences and settings, such as your language or
                location, to provide a more personalized experience.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Manage Your Cookie Preferences</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            You can manage your cookie preferences by adjusting your browser settings. Most browsers allow you to accept
            or reject cookies, as well as set preferences for specific types of cookies. Here are some common
            browser-specific instructions:
          </p>
          <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Safari
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Microsoft Edge
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            If you have any questions or concerns about our use of cookies, please don't hesitate to contact us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-500 dark:text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950 dark:text-gray-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-500 dark:text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950 dark:text-gray-50"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-gray-500 dark:text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950 dark:text-gray-50"
              />
            </div>
          </div>
          <Button color="primary" className="mt-4">Submit</Button>
        </div>
      </div>
    </div>
  )
}