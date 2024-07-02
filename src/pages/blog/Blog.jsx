import { Button, Chip, Image, Link } from "@nextui-org/react"
import BlogPostCard from "../../components/blog/BlogPostCard"
import Breadcrumb from "../../components/breadcrumbs/BreadCrumbs";
import { FiArrowRight } from "react-icons/fi";

export default function Blog() {
    const cetegoryList = [
        {key: "fashion", label: "Fashion"},
        {key: "tech", label: "Tech"},
        {key: "lifestyle", label: "Life Style"},
        {key: "travel", label: "Travel"},
        {key: "gadget", label: "Gadget"},
        {key: "kitchen", label: "Kithcen"},
    ];
    const tagList = [
        {key: "ecommerce", label: "Ecommerce"},
        {key: "shopping", label: "Shopping"},
        {key: "trends", label: "Trends"},
        {key: "inspiration", label: "Inspiration"},
    ]
  return (
    <div className="max-w-6xl m-auto">
      <header className="py-6">
      <div className="pb-4"><Breadcrumb /></div>
        <div className="container">
          <div className="grid md:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-4">
              <Image
                src="https://i.ibb.co/cFL8BQ4/NEW-700x430-UOD-480x304.jpg"
                alt="Featured Blog Post"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full aspect-[4/2]"
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Featured Blog Post</h1>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at augue egestas, scelerisque enim
                  nec, aliquam libero.
                </p>
                <Button
                  as={Link}
                  href="/blog/1"
                  color="primary"
                  size="sm"
                  radius="sm"
                  endContent={<FiArrowRight className="h-4 w-4" />}
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {
                    cetegoryList.map((category) => (
                      <Link key={category.key} href={"/blog"}>
                        <Chip color="default" variant="flat">{category.label}</Chip>
                      </Link>
                    ))
                  }
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {
                    tagList.map((tag) => (
                      <Link key={tag.key} href={"/blog"}>
                        <Chip color="default" variant="flat">#{tag.label}</Chip>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {[1,2,3,4,5,6].map(item => <BlogPostCard key={item}/>)}
        </div>
      </main>
    </div>
  )
}
