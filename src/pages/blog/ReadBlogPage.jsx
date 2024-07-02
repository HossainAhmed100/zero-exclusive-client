import { Link } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumbs/BreadCrumbs";

export default function ReadBlogPage() {
  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      <div className="pb-6"><Breadcrumb /></div>
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
      
      <article className="flex-1 prose prose-gray dark:prose-invert">
        <div className="space-y-4 not-prose">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Taxing Laughter: The Joke Tax Chronicles</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div>John Doe</div>
            <span className="h-4 w-px bg-muted" />
            <div>August 24, 2023</div>
          </div>
        </div>
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
          day, his advisors came to him with a problem: the kingdom was running out of money.
        </p>
        <p>
          Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under
          the king&apos;s pillow, in his soup, even in the royal toilet. The king was furious, but he couldn&apos;t seem
          to stop Jokester.
        </p>
        <p>
          And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that
          they couldn&apos;t help but laugh. And once they started laughing, they couldn&apos;t stop.
        </p>
        <figure>
          <img
            src="https://i.ibb.co/cFL8BQ4/NEW-700x430-UOD-480x304.jpg"
            alt="Cover image"
            width={1250}
            height={340}
            className="aspect-video overflow-hidden rounded-lg object-cover"
          />
          <figcaption className="text-center text-muted-foreground">Image caption goes here</figcaption>
        </figure>
        <p>
          The king thought long and hard, and finally came up with <a to="/">a brilliant plan</a>: he would tax the
          jokes in the kingdom.
        </p>
        <blockquote>
          &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good joke, so it&apos;s only fair that they should
          pay for the privilege.&rdquo;
        </blockquote>
        <h3>The Joke Tax</h3>
        <p>The king&apos;s subjects were not amused. They grumbled and complained, but the king was firm:</p>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <p>
          As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
          refused to let the king&apos;s foolishness get him down: a court jester named Jokester.
        </p>
      </article>
      <div className="flex flex-col gap-8 md:w-80 lg:w-96">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Related Posts</h2>
          <div className="grid gap-4">
            <Link to="/" className="group">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co/cFL8BQ4/NEW-700x430-UOD-480x304.jpg"
                  alt="Related post thumbnail"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-md object-contain"
                />
                <div>
                  <h3 className="text-lg font-medium group-hover:underline">The Rise of Joke Inflation</h3>
                  <p className="text-muted-foreground">Exploring the economic impact of the Joke Tax.</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="group">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co/cFL8BQ4/NEW-700x430-UOD-480x304.jpg"
                  alt="Related post thumbnail"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-md object-contain"
                />
                <div>
                  <h3 className="text-lg font-medium group-hover:underline">The Jokester Rebellion</h3>
                  <p className="text-muted-foreground">How one court jester fought back against the Joke Tax.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
            >
              Taxes
            </Link>
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
            >
              Humor
            </Link>
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
            >
              Politics
            </Link>
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
            >
              Satire
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}